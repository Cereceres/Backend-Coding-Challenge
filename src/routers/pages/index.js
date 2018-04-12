const express = require('express');
const get = require('../../controllers/pages-get-controller');
const router = express.Router();

router.get('/pages/slug', get);

module.exports = router;
