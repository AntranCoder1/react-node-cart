const express = require('express')
const router = express.Router()

const Product = require('../models/Product.models')

// @router GET api/products
// @desc GET all products from db
// @access Public 
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})

        res.json({ success: true, products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @router GET api/products/:id
// @desc GET a products by id from db
// @access Public
router.get('/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id)

        res.json({ success: true, products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

module.exports = router