const express = require('express');
const router = express.Router();
const auth = require('../Auth/auth.controller');
const { verify } = require('../middleware/middleware');
const { verifyIfAdmin } = require('../middleware/middleware');

router.post('/register', auth.register)
router.post('/login', verifyIfAdmin,verify, auth.login)
// router.post('/refresh', auth.refresh)


module.exports = router ;