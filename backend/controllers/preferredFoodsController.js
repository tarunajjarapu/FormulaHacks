// generate preferred foods based on cuisine, budget, dietary cost, # meals, cooking time, 
// type of good (breakfast, lunch, dinner)
const asyncHandler = require('express-async-handler')
const Ingredients = require('../models/ingredientModel');
const mongoose = require('mongoose');
const db = require('../config/db.js');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { json } = require('express');
const Profile = require('../models/profileModel');

const getProfile = async () => {
    try {
        const profile = await Profile.find();
        return profile;
    } catch (error) {
        return null;
    }
};

const recommendMeals = asyncHandler(async (req, res) => {
    try {
        const GEMINI_API_KEY = "AIzaSyCTHER10arC87fY5JEDfxBnzsmyIhcKmQw"
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro"}); 
        const json_schema = `{["Meal":{"meal name":<string>,"ingredients":[<string>, <string>]},
        "Meal":{"meal name":<string>,"ingredients":[<string>, <string>]}]}`;
        const user_pref = await getProfile();
        const prompt = `Using the dietary preferences below, suggest an list of meals for the next week. Put the list of meals in a JSON
        format as described by the schema below. JSON schema should have a size of 10. \n` + json_schema + `\n Do not return anything except the
        JSON. Here are the user preferences: \n` + user_pref;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = JSON.parse(response.text().replace(/```|json/ig, "").trim());
        console.log(text)
        // const text = JSON.parse(response.text());
        res.status(201).json(text)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to create meals' });
    }
})

module.exports = {
    recommendMeals
}