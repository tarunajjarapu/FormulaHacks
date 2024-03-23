const asyncHandler = require('express-async-handler')
const Ingredients = require('../models/ingredientModel');
const mongoose = require('mongoose');
const db = require('../config/db.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { json } = require('express');

const get_ingr_list = async () => {
    try {
        const documents = await Ingredients.find({});
        // Convert documents to JSON
        const jsonResult = JSON.stringify(documents, null, 2);
        return jsonResult; // Return JSON data
    } catch (error) {
        console.error('Error querying MongoDB:', error);
        return null;
    }
};

function get_dietary_restrictions() {
  return "vegetarian"
}

const makeMeals = asyncHandler(async (req, res) => {
    try {
        // await Ingredients.create({
        //     name: "tomatoes",
        //     quantity: 2,
        //     start: "2024-08-23",
        //     end: "2024-08-25"
        // });
        // await Ingredients.create({
        //     name: "eggs",
        //     quantity: 2,
        //     start: "2024-08-23",
        //     end: "2024-08-25"
        // });
        // await Ingredients.create({
        //     name: "garlic powder",
        //     quantity: 2,
        //     start: "2024-08-23",
        //     end: "2024-08-25"
        // });
        // await Ingredients.create({
        //     name: "bell peppers",
        //     quantity: 2,
        //     start: "2024-08-23",
        //     end: "2024-08-25"
        // });
        const GEMINI_API_KEY = "AIzaSyCTHER10arC87fY5JEDfxBnzsmyIhcKmQw"
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"}); 
        const json_schema = `{"Meal":{"meal name":<string>,"ingredients":[<string>, <string>]},
        "Meal":{"meal name":<string>,"ingredients":[<string>, <string>]}}`;
        const ingr_json = await get_ingr_list();
        console.log("ingr_json:\n" + ingr_json);
        if (ingr_json === null) {
            console.error('Error connecting to MongoDB:');
        }
        const diet_restr = get_dietary_restrictions();
        const prompt = `Using the JSON list of ingredients provided below, provide a meal plan 
        based on the name category. Make sure to consider the expiration date (labeled end) and prioritize 
        Only use the list of ingredients provided to you below as the context, and do not add any ingredients.
        Also keep in mind the dietary restrictions mentioned below. Try not to add any
        ingredients that expire earlier. Also consider the quantity of each food item. Once you've used an ingredient once, don't use it for another meal. 
        ingredients, but if you do, include a 'not provided' in the string. Do not provide meals that only use ingredients that are not listed below. 
        Only return the response in the JSON schema format ` + json_schema + `.\n` + `Ingredients:\n` + ingr_json + `Dietary Restrictions:\n` + diet_restr
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // const apiRes = {
        //     meals: text,
        // };
        res.status(201).json(text)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to create meals' });
    }
})

module.exports = {
    makeMeals
}