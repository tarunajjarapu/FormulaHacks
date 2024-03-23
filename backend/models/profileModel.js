const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    cuisine: {
      type: String,
      required: true, 
    },
    budget: {
        type: Number,
        required: true, 
    },
    numOfMeals: {
        type: Number,
        required: true, 
    },
    cookingTime: {
        type: Number,
        required: true, 
    },
    type: {
        type: Number,
        required: true, 
    },
  }, {collection: "profile"});

module.exports = mongoose.model('Profile', profileSchema);