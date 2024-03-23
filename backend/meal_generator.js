const asyncHandler = require('express-async-handler')
const Info = require('../models/questionModel')
const { GoogleGenerativeAI } = require("@google/generative-ai");

const createQuestions = asyncHandler(async (req, res) => {
    const { question } = req.body
    const userId = req.user.id
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Create 5 multiple choice questions about ${question}. Do not bold anything and format the each question like this: Question 1: Which of these is a vegetable\nA) Apple\nB) Orange\nC) Broccoli\nD) Pear\nAnswer: C`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        const apiRes = {
            questions: text,
        };
        res.status(201).json(apiRes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message || 'Failed to create question' });
    }
})

module.exports = {
    getQuestion,
    createQuestions
}