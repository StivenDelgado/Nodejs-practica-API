const express = require('express');
const serverless = require('serverless-http');

const { ProductsController } = require('./controller');
const ServerlessHttp = require('serverless-http');

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
module.exports.handler = serverless(app);