const asyncHandler = require('express-async-handler')
const Meal = require('../models/mealModel');


const addMeal = asyncHandler(async (req, res) => {
    try {
        const { meal_name, ingredients } = req.body;
        await Meal.create({
            name: meal_name,
            ingredients: ingredients
        });
        res.status(201).json({ message: 'Meal added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to add favorite meal' });
    }
})

module.exports = {
    addMeal
}