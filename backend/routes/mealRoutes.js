const express = require('express');
const router = express.Router();
const { makeMeals } = require('../controllers/generateController')
const { parseReceipt } = require('../controllers/receiptController')

router.put('/makeMeals', makeMeals)
router.put('/parseReceipt', parseReceipt)

module.exports = router;