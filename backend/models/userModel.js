const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, 
    },
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    streak: {
      type: Number,
      require: true
    }
  }, {collection: "user"});

module.exports = mongoose.model('User', userSchema);