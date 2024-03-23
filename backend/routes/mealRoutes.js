const express = require('express');
const router = express.Router();
const { makeMeals, getIngredientsList } = require('../controllers/generateController')
const { parseReceipt } = require('../controllers/receiptController')

router.put('/makeMeals', makeMeals)
router.put('/parseReceipt', parseReceipt)
router.get('/getIngredientsList', getIngredientsList)

module.exports = router;