const Page = require('../models/page.model');

module.exports = async(req, res) => {
    const { id:_id } = req.params;
    const update = req.body;
    const pageUpdated = await Page.update({ _id }, update);
    res.set('Content-Type', 'application/json');

    if (!pageUpdated) return res.status(403).send();

    res.send({ page: pageUpdated });
};
