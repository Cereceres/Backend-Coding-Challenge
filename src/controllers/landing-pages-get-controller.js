const Page = require('../models/page.model');

module.exports = async(req, res) => {
    const { _id: user } = req.user;
    const pages = await Page.get({ user });
    res.set('Content-Type', 'application/json');
    res.send({ pages });
};
