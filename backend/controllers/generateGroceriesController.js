// generates groceries from fav meals
const asyncHandler = require('express-async-handler')
const Ingredients = require('../models/ingredientModel');
const mongoose = require('mongoose');
const db = require('../config/db.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { json } = require('express');
const { getAllFavoriteMeals } = require('./getAllFavoriteMealsController');

const makeGroceries = asyncHandler(async (req, res) => {
    try {
        const GEMINI_API_KEY = "AIzaSyCTHER10arC87fY5JEDfxBnzsmyIhcKmQw"
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"}); 
        const json_schema = `{
            "Ingredient 1": {
                "name": "<string>",
                "quantity": "<number>",
                "start": "-1",
                "end": "-1"
            },
            "Ingredient 2": {
                "name": "<string>",
                "quantity": "<number>",
                "start": "-1",
                "end": "-1"
            }
        }`
        
        const fav_meals = await getAllFavoriteMeals();
        
        const prompt = `Given the following list of meals, please give me a grocery list the with ingredient
        names and questions in the following JSON format: \n` + json_schema + `\n Populate the start and end keys with \"-1\"` + 
        "\nFavorite Meals: \n" + fav_meals;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = JSON.parse(response.text());

        res.status(201).json(text)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to create meals' });
    }
})

module.exports = {
    makeGroceries
}