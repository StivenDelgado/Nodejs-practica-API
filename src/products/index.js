const express = require('express');
const serverless = require('serverless-http');

const { ProductsController } = require('./controller');
const  cors  = require('cors');
const router = express.Router();

const whiteList = ['http://localhost:3000', 'http://localhost:3001']

module.exports.ProductsAPI = (app) => {
    router
    .get('/', ProductsController.getProducts) //http://localhost:3000/api/products/
    .get("/report", ProductsController.generateReport)
    .get('/:id', ProductsController.getProduct)//http://localhost:3000/api/products/2
    .post('/', ProductsController.createProduct)
    .put('/', )
    .delete('/:id', ProductsController.deleteProducts);
    app.use(cors({
        origin: whiteList
    }))
    app.use('/api/products', router)
    
}