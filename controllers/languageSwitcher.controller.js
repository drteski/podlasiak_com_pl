require('dotenv').config();

const Content = require('../models/Content');

const languageSwitcherController = {
	async initialLang(req, res) {
		const clientLanguage = req.headers['accept-language'].split(',')[0];
		const serverLanguage = await Content.findOne({
			language: `${clientLanguage}`,
		});
		if (serverLanguage !== null) return res.redirect(`/${clientLanguage}`);
		return res.redirect(`/en`);
	},
	async targetLang(req, res) {
		const { lang } = req.params;
		// console.log(req.headers['accept-language'].split(',')[0]);
		const translations = await Content.findOne({ language: `${lang}` });
		res.render('index', {
			lang,
			title: 'Podlasiak PL',
			translations,
		});
	},
};

module.exports = languageSwitcherController;
