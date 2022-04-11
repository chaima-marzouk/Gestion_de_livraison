const express = require('express');
const router = express.Router();
const auth = require('../Auth/auth.controller');

router.post('/register', auth.register)
router.post('/login', auth.login)
// router.post('/refresh', auth.refresh)


module.exports = router ;