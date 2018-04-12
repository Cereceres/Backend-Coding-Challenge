const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const { jwt:{ secret, expiresIn } } = require('../settings');
const codeBase64 = require('../lib/code-base64');
module.exports = async(req, res) => {
    const { user, pass } = req.body;
    const userSaved = await User.getOne({ user });
    if (!userSaved) return res.status(404).send();
    if (userSaved.pass !== codeBase64(pass)) return res.status(401);

    res.set('Content-Type', 'application/json');
    user.exp = Math.floor(Date.now() / 1000) + expiresIn;
    const token = jwt.sign(JSON.stringify(userSaved), secret);
    res.send({ token });
};
