var express = require('express');
var router = express.Router();

const translate = require('../controllers/translate');

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Podlasiak' });
});

router.get('/pl', function (req, res, next) {
	res.render('index', { title: 'Podlasiak PL' });
});

module.exports = router;
