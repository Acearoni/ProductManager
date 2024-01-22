//This is where we would create what we need. Titles, Description, and a Price.

const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    },

    //_id gets created everytime we create something new. Not needed within the schema

    //Timestamps is our created and updated at.
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema);
//Could also do const Product = mongoose.model('Prodcut',ProductSchema);
//module.exports = Product;