const express = require('express')
const router = express.Router()
const apiControls = require('../Controller/Api')

router.get('/', apiControls.getAllMessage)
router.post('/', apiControls.addNewMessage)

module.exports = router