const  { ObjectId }  = require('mongodb');
const { Database } = require('../database/index');

const COLLECTION = 'users';

const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()
};

const getByid = async (id) => {
    const collection = await Database(COLLECTION);
    return await collection.findOne({ _id: new ObjectId(id) });
};

const create = async (user) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(user);
    return result.insertedId
};

const deleteUsers = async (id) =>{
    const collection = await Database(COLLECTION);
    let identificador =  Number(id)
    idx = collection.findIndex((collection.id === identificador))
    let result = await collection.splice(idx, option)
    return result

};
const update = () =>{};

//update
//delete
module.exports.UsersService ={
    getAll,
    getByid,
    create,
    deleteUsers,
    update
}; 