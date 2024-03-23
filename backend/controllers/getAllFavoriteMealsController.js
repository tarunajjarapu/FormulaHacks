const asyncHandler = require('express-async-handler');
const Scraper = require('images-scraper');

const Meal = require('../models/mealModel');
const google = new Scraper({
    puppeteer: {
        headless: true,
    },
})

const getAllFavoriteMeals = asyncHandler(async (req, res) => {
    try {
        const meal = await Meal.find({});
        res.json(meal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const getImageForMeal = asyncHandler(async (req, res) => {
    const meal_name = req.body.meal_name;
    const results = await google.scrape(meal_name, 1);
    const resJson = {
        url: results[0].url,
    }
    res.json(resJson);
});

module.exports = {
    getAllFavoriteMeals,
    getImageForMeal
}