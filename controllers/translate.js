require('dotenv').config();

const Content = require('../models/Content');
const deepl = require('deepl-node');

const translate = new deepl.Translator(process.env.TOKEN, {
	minTimeout: 100000,
});

const translator = async (data, sourceLang, targetLang) => {
	const { hero, features, reviews, about, stores, contact } = data;

	const translateItem = async (data) =>
		translate
			.translateText(data, sourceLang, targetLang)
			.then((res) => res.text);

	return {
		features: {
			title: await translateItem(features.title),
			content: [
				{
					title: await translateItem(features.content[0].title),
					desc: await translateItem(features.content[0].desc),
					img: '/images/zasieg.svg',
				},
				{
					title: await translateItem(features.content[1].title),
					desc: await translateItem(features.content[1].desc),
					img: '/images/szybka.svg',
				},
				{
					title: await translateItem(features.content[2].title),
					desc: await translateItem(features.content[2].desc),
					img: '/images/returns.svg',
				},
			],
		},
		reviews: {
			desc: {
				recommended: await translateItem(reviews.desc.recommended),
				firstPart: await translateItem(reviews.desc.firstPart),
				secondPart: await translateItem(reviews.desc.secondPart),
			},
			title: await translateItem(reviews.title),
			review: [
				{
					desc: await translateItem(reviews.review[0].desc),
					user: await translateItem(reviews.review[0].user),
				},
				{
					desc: await translateItem(reviews.review[1].desc),
					user: await translateItem(reviews.review[1].user),
				},
				{
					desc: await translateItem(reviews.review[2].desc),
					user: await translateItem(reviews.review[2].user),
				},
			],
		},
		about: {
			title: await translateItem(about.title),
			firstPart: await translateItem(about.firstPart),
			secondPart: await translateItem(about.secondPart),
		},
		stores: {
			title: await translateItem(stores.title),
		},
		contact: {
			details: {
				labels: {
					phone: await translateItem(contact.details.labels.phone),
					email: await translateItem(contact.details.labels.email),
					website: await translateItem(
						contact.details.labels.website
					),
				},
				title: await translateItem(contact.details.title),
				locations: [
					{
						title: await translateItem(
							contact.details.locations[0].title
						),
						subTitle: 'CH Fasty',
						email: 'salonlazienekrea@wp.pl',
						phone: '+48856621976',
					},
					{
						title: await translateItem(
							contact.details.locations[1].title
						),
						subTitle: 'Rea, Tutumi, Toolight, Bluegarden',
						email: 'biuro.rea@podlasiak.com.pl',
						phone: '+48857337777',
					},
					{
						title: await translateItem(
							contact.details.locations[2].title
						),
						subTitle: await translateItem(
							contact.details.locations[2].subTitle
						),
						email: 'salonlazienekrea@wp.pl',
						website: 'https://www.reahurt.pl/',
					},
				],
			},
			form: {
				layout: {
					content: [
						{
							label: await translateItem(
								contact.form.layout.content[0].label
							),
							placeholder: await translateItem(
								contact.form.layout.content[0].placeholder
							),
						},
						{
							label: await translateItem(
								contact.form.layout.content[1].label
							),
							placeholder: await translateItem(
								contact.form.layout.content[1].placeholder
							),
						},
						{
							label: await translateItem(
								contact.form.layout.content[2].label
							),
							placeholder: await translateItem(
								contact.form.layout.content[2].placeholder
							),
						},
						{
							label: await translateItem(
								contact.form.layout.content[3].label
							),
							placeholder: await translateItem(
								contact.form.layout.content[3].placeholder
							),
						},
					],
					button: await translateItem(contact.form.layout.button),
				},
				title: await translateItem(contact.form.title),
			},
		},
		hero: [
			{
				name: await translateItem(hero[0].name),
				dataIndex: 'home',
			},
			{
				name: await translateItem(hero[1].name),
				dataIndex: 'features',
			},
			{
				name: await translateItem(hero[2].name),
				dataIndex: 'reviews',
			},
			{
				name: await translateItem(hero[3].name),
				dataIndex: 'about',
			},
			{
				name: await translateItem(hero[4].name),
				dataIndex: 'stores',
			},
			{
				name: await translateItem(hero[5].name),
				dataIndex: 'contact',
			},
		],
	};
};

module.exports = translator;
