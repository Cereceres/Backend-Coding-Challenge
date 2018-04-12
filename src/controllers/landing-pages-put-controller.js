const Page = require('../models/page.model');

module.exports = async(req, res) => {
    const page = req.body.page;
    page.user = req.user._id;
    const pageUpdated = await Page.update({ page });
    res.set('Content-Type', 'application/json');

    if (!pageUpdated) return res.status(403).send();

    res.send({ page: pageUpdated });
};
