const mongoose = require('mongoose');

const Content = new mongoose.Schema({
	hero: {
		type: [
			{
				name: String,
			},
		],
	},
	features: {
		title: {
			type: String,
		},
		content: {
			type: [
				{
					title: String,
					desc: String,
				},
			],
		},
	},
	reviews: {
		title: {
			type: String,
		},
		review: {
			type: [
				{
					desc: String,
					user: String,
				},
			],
		},
		desc: {
			recommended: {
				type: String,
			},
			firstPart: {
				type: String,
			},
			secondPart: {
				type: String,
			},
		},
	},
	about: {
		title: {
			type: String,
		},
		firstPart: {
			type: String,
		},
		secondPart: {
			type: String,
		},
	},
	stores: {
		title: {
			type: String,
		},
	},
	contact: {
		details: {
			title: {
				type: String,
			},
			locations: {
				type: [
					{
						title: String,
						subTitle: String,
						email: String,
						phone: String,
						site: String,
					},
				],
			},
		},
		form: {
			title: {
				type: String,
			},
			layout: {
				content: {
					type: [
						{
							label: String,
							placeholder: String,
						},
					],
				},
				button: {
					type: String,
				},
			},
		},
	},
});
module.exports = mongoose.model('Content', Content);
