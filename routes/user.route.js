const express = require('express');
const router = express.Router();
const auth = require('../Auth/auth.controller');

router.post('/register', auth.register)


module.exports = router ;