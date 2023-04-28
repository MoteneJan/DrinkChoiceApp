const express = require('express');
const Drink = require('../models/Drink');

const router = express.Router();

router.post('/drinks', async(req, res) => {
    try {
        const { name, type, rating } = req.body;

        const drink = new Drink({ name, type, rating });
        await drink.save();

        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = router;