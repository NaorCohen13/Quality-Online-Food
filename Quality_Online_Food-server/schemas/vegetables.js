const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
    
    type: {type: String, required: true},
    weight: {type: Number, required: true},
    price: {type: Number, required: true},
  
});

module.exports = mongoose.model('vegetable', vegetableSchema);