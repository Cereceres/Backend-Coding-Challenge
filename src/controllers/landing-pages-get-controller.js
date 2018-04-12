const Page = require('../models/page.model');

module.exports = async(req, res) => {
    console.log('req.user ', req.user);
    const { _id: user } = req.user;
    console.log('query ', { user });
    const pages = await Page.get({ user });
    console.log('pages ', pages);
    res.set('Content-Type', 'application/json');
    res.send({ pages });
};
