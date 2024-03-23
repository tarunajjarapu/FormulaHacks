const asyncHandler = require('express-async-handler');

const Meal = require('../models/mealModel');

const getAllFavoriteMeals = asyncHandler(async (req, res) => {
    try {
        const meal = await Meal.find({ favorite: true });
        res.json(meal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    getAllFavoriteMeals
}