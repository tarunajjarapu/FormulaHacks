const express = require('express');
const router = express.Router();
const { createMeals } = require('../controllers/aiController')

router.put('/createQuestions', createMeals)

module.exports = router;