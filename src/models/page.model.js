const mongo = require('../database');
const getModelFromDB = require('./get-model-from-db');
const Schema = mongo.Schema;
const schema = Schema({
    html: String,
    user: String,
}, {
    strict:false
});

const model = mongo.model('page', schema);

module.exports = getModelFromDB(model);
