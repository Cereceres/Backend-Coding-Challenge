const Page = require('../models/page.model');

module.exports = async(req, res) => {
    const page = req.body;
    page.user = req.user._id;
    await Page.insert(page);
    res.set('Content-Type', 'application/json');
    res.send({ result:'ok' });
};
