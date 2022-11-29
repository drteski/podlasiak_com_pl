require('dotenv').config();
const nodemailer = require('nodemailer');
// const handlebarsNodeMailer = require('nodemailer-express-handlebars');

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
	host: MAIL_HOST,
	port: MAIL_PORT,
	secure: true,
	auth: {
		user: MAIL_USER,
		pass: MAIL_PASS,
	},
});

// transporter.use(
// 	'compile',
// 	handlebarsNodeMailer({
// 		extName: '.hbs',
// 		viewPath: __dirname + '/views/email/',
// 		layoutsDir: __dirname + '/view/email',
// 		defaultLayout: 'email',
// 		partialsDir: __dirname + '/views/email/partials/',
// 	})
// );

// const clientMessage = {
// 	from: 'from@domain.com',
// 	to: 'to@domain.com',
// 	subject: 'Test',
// 	template: 'email',
// 	context: {
// 		name: 'Name',
// 	},
// };
//
// const confirmationMessage = {
// 	from: 'from@domain.com',
// 	to: 'to@domain.com',
// 	subject: 'Test',
// 	template: 'email',
// 	context: {
// 		name: 'Name',
// 	},
// };

const mailClient = {
	async replay(req, res, next) {
		const { subject, text } = req.body;
		await transporter.sendMail({
			from: 'admin@podlasiak.com.pl', // sender address
			// from: '"Fred Foo 👻" <admin@podlasiak.com.pl>', // sender address
			to: 'drteski@gmail.com', // list of receivers
			subject,
			text,
		});
		return next();
	},
	async confirmation(req, res) {
		const { userName, email, subject, text } = req.body;
		const info = await transporter.sendMail({
			from: '"Podlasiak" <admin@podlasiak.com.pl>', // sender address
			// from: '"Fred Foo 👻" <admin@podlasiak.com.pl>', // sender address
			to: `${email}`, // list of receivers
			subject: 'Podlasiak - Dziękujemy za wiadomość',
			text: `
			Witaj ${userName},

			Dziękujemy za wiadomość, odpowiemy na nią najszybciej jak to jest możliwe.

			-----
			Twoja wiadomość:

			Temat: ${subject}
			Treść: ${text}

			z poważaniem,
			Podlasiak
			`,
		});
		console.log(info.messageId);
		res.send(`Confirmation sent: ${info.messageId}`);
	},
};

// const mailClient = {
// 	async replay(req, res) {
// 		const { subject, text } = req.body;
// 		// await transporter.sendMail({
// 		// 	from: 'admin@podlasiak.com.pl',
// 		// 	to: 'drteski@gmail.com',
// 		// 	subject: 'Test',
// 		// 	template: 'email',
// 		// 	context: {
// 		// 		name: 'Name',
// 		// 	},
// 		// });
// 		res.send('ok');
// 		// return next();
// 	},
// 	async confirmation(req, res) {
// 		const { userName, email, subject, text } = req.body;
// 		const info = await transporter.sendMail({
// 			from: '"Podlasiak" <admin@podlasiak.com.pl>', // sender address
// 			// from: '"Fred Foo 👻" <admin@podlasiak.com.pl>', // sender address
// 			to: `${email}`, // list of receivers
// 			subject: 'Podlasiak - Dziękujemy za wiadomość',
// 			text: `
// 			Witaj ${userName},
//
// 			Dziękujemy za wiadomość, odpowiemy na nią najszybciej jak to jest możliwe.
//
// 			-----
// 			Twoja wiadomość:
//
// 			Temat: ${subject}
// 			Treść: ${text}
//
// 			z poważaniem,
// 			Podlasiak
// 			`,
// 		});
// 		res.send(`Confirmation sent: ${info.messageId}`);
// 	},
// };

module.exports = mailClient;
