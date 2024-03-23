const asyncHandler = require('express-async-handler')
const Info = require('../models/mealsModel')
const { GoogleGenerativeAI } = require("@google/generative-ai");

function get_ingr_list() {
    return "eggs, tomatoes, onions, bell peppers, garlic powder";
}

const makeMeals = asyncHandler(async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const ingr_json = get_ingr_list();
        const prompt = `Using the JSON list of ingredients provided below, provide a meal plan of 10 meals 
        based on the name category. Make sure to consider the expiration date (labeled end) and prioritize 
        ingredients that expire earlier. Once you've used an ingredient once, don't use it for another meal. 
        Only use the list of ingredients provided to you below as the context, and do not add any ingredients.
        Return your response as a JSON with the categories meal name and ingredients.\n` + ingr_json

        const result = await model.generateContent(prompt);
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
    makeMeals
}