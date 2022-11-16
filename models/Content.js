const mongoose = require('mongoose');

const Content = new mongoose.Schema({
	hero: {
		type: {
			name: String,
		},
	},
	features: {
		type: {
			title: String,
			content: [
				{
					title: String,
					desc: String,
				},
			],
		},
	},
	reviews: {
		type: {
			title: String,
			content: [
				{
					desc: String,
					user: String,
				},
			],
			desc: {
				recommend: String,
				firstPart: String,
				secondPart: String,
			},
		},
	},
	about: {
		type: {
			title: String,
			firstPart: String,
			secondPart: String,
		},
	},
	footer: {
		type: {
			address: String,
		},
	},
});
module.exports = mongoose.model('Content', Content);
