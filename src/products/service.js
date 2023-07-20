const  { ObjectId }  = require('mongodb');
const { Database } = require('../database/index');
const { ProductsUtils } = require('./utils');

const COLLECTION = 'products';

const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()
};

const getByid = async (id) => {
    const collection = await Database(COLLECTION);
    console.log(id);
    let product = await collection.findOne({ _id: new ObjectId(id) });
    return product
    
};

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId
};

const deleteP = async (id) =>{
    const collection = await Database(COLLECTION);
    let result = await collection.findOneAndDelete({ _id: new ObjectId(id) })
    return result.values
};
const update = () =>{};

//update
//delete

const GenerateReport = async (name, res) => {
    let products = await getAll();
    ProductsUtils.excelGenerator(products, name, res)
}

module.exports.ProductsService ={
    getAll,
    getByid,
    create,
    GenerateReport,
    deleteP,
    update
}; 