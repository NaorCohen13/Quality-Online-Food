const mongoose = require('mongoose');

const ShoppingListSchema = new mongoose.Schema({
    carrot: {type: Number, required: true},
    tomato: {type: Number, required: true},
    pumpkin: {type: Number, required: true},
    eggplant: {type: Number, required: true},
    apple: {type: Number, required: true}, 
    banana: {type: Number, required: true},
    orange: {type: Number, required: true},
});

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);