const express = require('express');
const router = express.Router();
const { loginUser, registerUser, getUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/getUser', protect, getUser)

module.exports = router;