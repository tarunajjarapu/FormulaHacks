const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    cuisine: {
      type: String,
      required: true, 
    },
    budget: {
        type: String,
        required: true, 
    },
    numOfMeals: {
        type: Number,
        required: true, 
    },
    cookingTime: {
        type: String,
        required: true, 
    }
  }, {collection: "profile"});

module.exports = mongoose.model('Profile', profileSchema);