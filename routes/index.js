var express = require('express');
var router = express.Router();

const translate = require('../controllers/translate');
const Content = require('../models/Content');

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Podlasiak' });
});

router.get('/pl', async (req, res) => {
	const translations = await Content.findOne({});
	res.render('index', {
		title: 'Podlasiak PL',
		translations,
	});
});

router.get('/test', async (req, res) => {
	const translations = await Content.findOne({});
	res.json(translations);
});

module.exports = router;
