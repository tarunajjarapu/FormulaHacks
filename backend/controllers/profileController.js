const asyncHandler = require('express-async-handler');
const Profile = require('../models/profileModel');

const getProfile = asyncHandler(async (req, res) => {
    try {
        const profile = await Profile.find();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const setProfile = asyncHandler(async (req, res) => {
    try {
        const { cuisine, budget, numOfMeals, cookingTime } = req.body;
        await Profile.create({
            cuisine: cuisine,
            budget: budget,
            numOfMeals: numOfMeals,
            cookingTime: cookingTime
        });
        res.status(201).json({ message: 'Profile added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to add profile' });
    }
})

module.exports = {
    getProfile,
    setProfile
}