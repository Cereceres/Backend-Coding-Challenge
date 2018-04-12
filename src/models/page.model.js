const mongo = require('../database');
const getModelFromDB = require('./get-model-from-db');
const Schema = mongo.Schema;
const schema = new Schema({
    html: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    slug: String
}, {
    strict:false
});

const model = mongo.model('page', schema);

module.exports = getModelFromDB(model);
