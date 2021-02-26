// SERVER/main/routes.js

var express = require('express')

var router  = express.Router()

router.get('/hai', function (req, res) {
	res.json('hello world!')
})

module.exports = router