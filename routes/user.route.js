const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyIfAdmin } = require('../middleware/middleware');

router.post('/newUser', verifyIfAdmin, userController.add);
router.post('/deleteUser/:id',verifyIfAdmin, userController.remove);


module.exports = router ;