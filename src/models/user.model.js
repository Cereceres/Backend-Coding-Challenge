const mongo = require('../database');
const getModelFromDB = require('./get-model-from-db');
const Schema = mongo.Schema;

const schema = new Schema({
    user: String,
    pass: String
}, {
    strict:false
});

const model = mongo.model('user', schema);

module.exports = getModelFromDB(model);
