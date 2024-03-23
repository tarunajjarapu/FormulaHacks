const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, 
    },
    ingredients: {
      type: String,
      required: true,
    }
  }, {collection: "meal"});

module.exports = mongoose.model('Meal', mealSchema);