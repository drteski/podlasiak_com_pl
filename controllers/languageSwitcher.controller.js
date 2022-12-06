require('dotenv').config();

const Content = require('../models/Content');

const languageExtractor = (languages) => {
	return languages
		.split(';')
		.map((lang) => {
			return lang.split(',');
		})
		.reduce((a, b) => {
			return a.concat(b);
		}, [])
		.filter((lang) => {
			return lang.length <= 2;
		})[0];
};

const languageSwitcherController = {
	async initialLang(req, res) {
		const clientLang = languageExtractor(req.headers['accept-language']);
		const sessionLang = req.session.lang;
		const serverLang = await Content.findOne({
			language: `${clientLang}`,
		});
		if (!serverLang || !sessionLang) return res.redirect(`/en`);
		return res.redirect(`/${sessionLang}`);
	},
	async targetLang(req, res) {
		const { lang } = req.params;
		const serverLang = await Content.findOne({ language: `${lang}` });
		if (lang.length > 2)
			return res.status(404).render('404', { layout: 'error' });
		if (!serverLang) return res.redirect(`/en`);
		req.session.lang = lang;
		return res.render('index', {
			lang,
			title: `Podlasiak ${lang.toUpperCase()}`,
			serverLang,
		});
	},
};

module.exports = languageSwitcherController;
