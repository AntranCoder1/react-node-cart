const express = require('express')
const router = express.Router()

const Product = require('../models/Product.models')

router.get('/', async (req, res, next) => {
    var page = req.query.page || 1 // n
    var perPage = 8

    Product
        .find()
        .skip((perPage * page) - perPage) // first page value is 0
        .limit(perPage)
        .exec((err, products) => {
            Product.countDocuments((err, count) => { // how many pages are there to see?
                if (err) return next(err);
                // res.send(products) // returns product data in json, XML, ....
                res.render()
            })
        })
})

module.exports = router