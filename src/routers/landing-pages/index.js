const express = require('express');
const get = require('../../controllers/landing-pages-get-controller');
const post = require('../../controllers/landing-pages-post-controller');
const put = require('../../controllers/landing-pages-put-controller');
const router = express.Router();

router.post('/landing-pages', post);
router.get('/landing-pages', get);
router.put('/landing-pages', put);

module.exports = router;
