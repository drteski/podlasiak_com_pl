require('dotenv').config();

const Content = require('../models/Content');
const deepl = require('deepl-node');

const translate = new deepl.Translator(process.env.TOKEN, {
	minTimeout: 100000,
});

const translator = async (data, sourceLang, targetLang) => {
	const { hero, features, reviews, about, stores, contact } = data;

	const kek = await translate
		.translateText(hero[0].name, sourceLang, targetLang, {
			tagHandling: 'html',
			preserveFormating: true,
		})
		.then((res) => res.text);
	return {
		hero: [{ name: kek }],
	};
};

module.exports = translator;
