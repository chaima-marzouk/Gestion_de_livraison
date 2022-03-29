const express = require('express');
const router = express.Router();
const User = require('../controllers/auth.controller');

router.post('/register' , User.register )


module.exports = router ;