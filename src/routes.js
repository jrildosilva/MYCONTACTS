const { Router} = require('express');

const ContactController = require('./app/controllers/ContactController')

const router = Router();

router.get('/contact', ContactController.index);

module.exports = router;
