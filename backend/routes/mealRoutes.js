const express = require('express');
const router = express.Router();
const { makeMeals, getIngredientsList } = require('../controllers/generateController')
const { recommendMeals } = require('../controllers/preferredFoodsController')
const { makeGroceries } = require('../controllers/generateGroceriesController')
const { parseReceipt } = require('../controllers/receiptController')

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.put('/makeMeals', makeMeals)
router.put('/parseReceipt', parseReceipt)
router.get('/getIngredientsList', getIngredientsList)
router.put('/parseReceipt', upload.single('image'), parseReceipt)
router.get('/recommendMeals', recommendMeals)
router.get('/makeGroceries', makeGroceries)

module.exports = router;