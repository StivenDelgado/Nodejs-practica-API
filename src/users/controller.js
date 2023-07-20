const  debug  = require("debug")("app: module-users-controller");
const { UsersService } = require("./service");
const { Response } = require("../common/response");
const createError = require("http-errors");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de usuarios", users);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let user = await UsersService.getByid(id);
      if (!user) {
        Response.error(res, createError.NotFound());
      } else {
        Response.success(res, 200, `Usuario ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await UsersService.create(body);
        Response.success(res, 201, "Usuario agregado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  //update
  deleteUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let user = await getUser(id)
      if (!user) {
        Response.error(res, new createError.BadRequest());
      } else {
        const deleteUser = await UsersService.deleteUsers(id, 1)
        Response.success(res, 200, "Usuario eliminado", deleteUser)
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
