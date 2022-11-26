var express = require('express');
var router = express.Router();

const translate = require('../controllers/translate');
const Content = require('../models/Content');

router.get('/', (req, res) => {
	res.redirect('/pl');
});

router.get('/pl', async (req, res) => {
	const translations = await Content.findOne({});
	res.render('index', {
		language: 'pl',
		title: 'Podlasiak PL',
		translations,
	});
});
//
// router.get('/en-GB', async (req, res) => {
// 	const data = await Content.findOne({});
// 	const translations = await translate(data, 'pl', 'en-GB');
// 	res.render('index', {
// 		title: 'Podlasiak en',
// 		translations,
// 	});
// });
//
// router.get('/test', async (req, res) => {
// 	const translations = await Content.findOne({});
// 	res.json(translations);
// });
//
// router.get('/test2', async (req, res) => {
// 	const dat = await Content.findOne({});
// 	const re = await translate(dat, 'pl', 'en-GB');
// 	res.json(re);
// });

router.get('/:lang', async (req, res) => {
	const language = req.params.lang;
	if (language === 'pl') {
		return res.redirect('/pl');
	}
	const data = await Content.findOne({});
	const translations = await translate(data, 'pl', language);
	res.render('index', {
		language,
		title: 'Podlasiak PL',
		translations,
	});
});

module.exports = router;
