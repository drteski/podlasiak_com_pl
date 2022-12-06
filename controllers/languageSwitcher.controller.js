require('dotenv').config();

const Content = require('../models/Content');

const languageSwitcherController = {
	async initialLang(req, res) {
		const clientLang = req.headers['accept-language'].split(',')[0];
		const cookieLang = req.session.lang;
		const serverLang = await Content.findOne({
			language: `${clientLang}`,
		});
		if (!serverLang || !cookieLang) return res.redirect(`/en`);
		if (cookieLang === '') return res.redirect('/en');
		return res.redirect(`/${cookieLang}`);
	},
	async targetLang(req, res) {
		const { lang } = req.params;
		if (lang.length > 2)
			return res.status(404).render('404', { layout: 'error' });
		req.session.lang = lang;
		const translations = await Content.findOne({ language: `${lang}` });
		res.render('index', {
			lang,
			title: `Podlasiak ${lang.toUpperCase()}`,
			translations,
		});
	},
};

module.exports = languageSwitcherController;
