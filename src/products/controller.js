const  debug  = require("debug")("app: module-products-controller");
const { ProductsService } = require("./service");
const { Response } = require("../common/response");
const createError = require("http-errors");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsService.getAll();
      Response.success(res, 200, "Lista de productos", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsService.getByid(id);
      if (!product) {
        Response.error(res, createError.NotFound());
      } else {
        Response.success(res, 200, `Producto ${id}`, product);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createProduct: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await ProductsService.create(body);
        Response.success(res, 201, "Producto agregado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  //update
  deleteProducts: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsService.getByid(id);
      if (!product) {
        Response.error(res, new createError.BadRequest());
      } else {
        const deleteProduct = await ProductsService.deleteP(id)
        Response.success(res, 200, "Producto eliminado", product)
      }
      
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  //delete
  generateReport: (req, res) => {
    try {
      ProductsService.GenerateReport('inventario', res)
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  }

};
