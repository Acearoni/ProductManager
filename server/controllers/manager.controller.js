const Product = require('../models/manager.model.js')



module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct) //201 is successful post request
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => {
                res.status(200).json(allProducts)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Read One
    findOneProduct: (req, res) => {
        console.log(req.params);
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => {
                res.status(200).json(oneProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Update
    updateProduct:(req,res) => {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true })
            .then((updatedProduct) => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //Delete
    deleteProduct:(req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

