const express = require('express');
const get = require('../../controllers/landing-pages-get-controller');
const post = require('../../controllers/landing-pages-post-controller');
const put = require('../../controllers/landing-pages-put-controller');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation')({});

const postSchema = Joi.object({
    html: Joi.string().required()
});
const getSchema = Joi.object({});
const putSchema = Joi.object({
    html: Joi.string().required()
});
router.post('/landing-pages', validator.body(postSchema), post);
router.get('/landing-pages', validator.body(getSchema), get);
router.put('/landing-pages/:id', validator.body(putSchema), put);

module.exports = router;
