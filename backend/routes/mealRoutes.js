const express = require('express');
const router = express.Router();
const { makeMeals, getIngredientsList } = require('../controllers/generateController')
const { recommendMeals } = require('../controllers/preferredFoodsController')
const { makeGroceries } = require('../controllers/generateGroceriesController')
const { parseReceipt } = require('../controllers/receiptController')
const { getAllFavoriteMeals, getImageForMeal } = require('../controllers/getAllFavoriteMealsController')
const { addMeal } = require('../controllers/addNewFavMeal.js')

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/makeMeals', makeMeals)
router.get('/getIngredientsList', getIngredientsList)
router.put('/parseReceipt', upload.single('image'), parseReceipt)
router.get('/recommendMeals', recommendMeals)
router.get('/makeGroceries', makeGroceries)
router.get('/getAllFavoriteMeals', getAllFavoriteMeals)
router.post('/getImageForMeal', getImageForMeal);
router.put('/addMeal', addMeal)


module.exports = router;
