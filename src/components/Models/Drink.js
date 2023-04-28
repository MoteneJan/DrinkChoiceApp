const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: String,
    type: String,
    rating: Number,
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;