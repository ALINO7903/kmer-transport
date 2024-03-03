const express = require('express');
const router = express.Router();
const DefaultController = require('../controllers/DefaultController');


router.get('/home-page',  DefaultController.getHomePage);
router.get('/login',  DefaultController.login)

module.exports = router;