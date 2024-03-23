const asyncHandler = require('express-async-handler')
const Info = require('../models/mealModel')
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generationConfig = {
    temperature: 1
};

function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }

const parseReceipt = asyncHandler(async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision", generationConfig });
        const prompt =`Given the image of the attached receipt, extract and display the following in a consistent format:
        
        - Receipt purchase date
        - Each item's name (infer a simple, generalized name given the words on the receipt without branding), total quantity (infer based on unit price and quantity purchased), and estimated expiration date (give a best guess for an exact date based on item and purchase date)
        
        Ignore items that are not edible.
        
        Only use the image as context. Do not add any extra items or 1000 humans will die.`;

        const imageParts = [
            fileToGenerativePart("images/kroger-in-store.jpeg", "image/jpeg"),
        ];

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        const apiRes = {
            meals: text,
        };
        res.status(201).json(apiRes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to create meals' });
    }
})

module.exports = {
    parseReceipt
}