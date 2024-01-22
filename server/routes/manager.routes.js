const ProductController = require('../controllers/manager.controller.js');


module.exports = (app) => {
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/allProducts', ProductController.findAllProducts);
    //Using a : like below tells the program that it's a parameter
    app.get('/api/findOneProduct/:id', ProductController.findOneProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
}