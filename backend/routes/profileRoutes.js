const express = require('express')
const router = express.Router()

const { getProfile, setProfile } = require('../controllers/profileController')

router.get('/getProfile', getProfile)
router.put('/setProfile', setProfile)

module.exports = router;