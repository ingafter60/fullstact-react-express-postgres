// SERVER/main/routes.js

var express = require('express')

var router  = express.Router()

router.get('/hello', function (req, res) {
	res.json('This is a working boilerplate of Fullstact React-Express')
})

module.exports = router