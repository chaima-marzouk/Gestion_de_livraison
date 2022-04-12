const express = require('express');
const router = express.Router();
const auth = require('../Auth/auth.controller');
const { verifyToken } = require('../middleware/middleware');


router.post('/register', auth.register)
router.post('/login', verifyToken, auth.login)
// router.post('/refresh', auth.refresh)


module.exports = router ;