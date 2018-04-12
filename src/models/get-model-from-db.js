
const optionToUpdate = {
    upsert:true,
    new: true
};
module.exports = (model) => ({
    remove: (query) => model.remove(query).exec(),
    get: (query = {}) => model.find(query).lean().exec(),
    insert: (data) => model.create(data),
    insertIfNotExists: (query, data) => model.update(query, { $set:data }, optionToUpdate),
    update: (query, data) => model.update(query, { $set: data }, { new:true }),
    getOne: (query = {}) => model.findOne(query).lean().exec(),
});
