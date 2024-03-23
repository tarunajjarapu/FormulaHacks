const asyncHandler = require('express-async-handler');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Ingredients = require('../models/ingredientModel');

const generationConfig = {
    temperature: 1
};

const parseReceipt = asyncHandler(async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const imageBuffer = req.file.buffer;
        const imageMimeType = req.file.mimetype;

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision", generationConfig });
        const prompt = `Given the image of the attached receipt, extract and display the following in a consistent format:
        
        - Receipt purchase date
        - Each item's name (infer a simple, generalized name given the words on the receipt without branding), total quantity (infer based on unit price and quantity purchased), and estimated expiration date (give a best guess for an exact date based on item and purchase date)
        
        Ignore items that are not edible.
        
        Only use the image as context. Do not add any extra items.
        
        Your response must be in JSON format in the following schema:
        
        {
            "purchaseDate": "YYYY-MM-DD",
            "items": [
                {
                "name": "Item name",
                "quantity": 1,
                "expirationDate": "YYYY-MM-DD"
                },
                {
                "name": "Item name",
                "quantity": 1,
                "expirationDate": "YYYY-MM-DD"
                },
                ...
            ]
        }
        
        The JSON will be immediately parsed without any human intervention. If the JSON is not in the correct format, the response will be considered incorrect.;`

        const imageParts = [
            {
                inlineData: {
                    data: imageBuffer.toString("base64"),
                    mimeType: imageMimeType
                }
            }
        ];

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text().replace(/```|json/ig, "").trim();
        console.log(text);
        jsonText = JSON.parse(text);

        jsonText.items.forEach(item => {
            Ingredients.create({
                name: item.name,
                quantity: item.quantity,
                start: jsonText.purchaseDate,
                end: item.expirationDate
            })
        });

        res.status(201).json(jsonText);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to create meals' });
    }
})

module.exports = {
    parseReceipt
}