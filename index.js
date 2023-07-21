const express = require('express');
const debug = require('debug')('app:server');

const { Config } = require('./src/config');
const { ProductsAPI } = require('./src/products');
const { UsersAPI } = require('./src/users');
const {IndexAPI, NotFoundAPI } = require('./src/index/index');
const cors = require('cors');

const whiteList = ['http://localhost:3000', 'http://localhost:3001']

const app = express();

app.use(express.json())
app.use(cors({
    origin: whiteList
}))
IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundAPI(app);

//modulos
app.listen(Config.port, () => {
    debug(`Servidor escuchando desde el puerto ${Config.port}`)
});
