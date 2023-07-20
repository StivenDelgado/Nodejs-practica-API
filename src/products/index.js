const express = require('express');

const { ProductsController } = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
    .get('/', ProductsController.getProducts) //http://localhost:3000/api/products/
    .get("/report", ProductsController.generateReport)
    .get('/:id', ProductsController.getProduct)//http://localhost:3000/api/products/2
    .post('/', ProductsController.createProduct)
    .put('/', )
    .delete('/:id', ProductsController.deleteProducts);

    app.use('/api/products', router)
}