const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, 
    },
    quantity: { 
        type: Number,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
      type: String,
      require: true,
    }
  }, {collection: "ingredients"});

module.exports = mongoose.model('Ingredients', ingredientsSchema);