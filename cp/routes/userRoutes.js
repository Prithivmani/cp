var express = require('express');
var { authenticateUser, authorizeRoles } = require('../middleware/authendication');
var userController = require('../controller/user.controller');

var router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/getAlluser', authenticateUser, authorizeRoles('admin'), userController.getUsers);
router.get('/getUser/:id', authenticateUser, authorizeRoles('admin'), userController.getUser);

module.exports = router;
