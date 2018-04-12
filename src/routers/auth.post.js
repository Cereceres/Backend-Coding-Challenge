const express = require('express');
const post = require('../controllers/auth-post-controller');
const router = express.Router();

router.post('/auth', post);
module.exports = router;
