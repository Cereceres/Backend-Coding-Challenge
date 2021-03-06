const Page = require('../models/page.model');

module.exports = async(req, res) => {
    const query = req.params;
    const page = await Page.get(query);
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(page);
};
