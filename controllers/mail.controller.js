require('dotenv').config();

const nodemailer = require('nodemailer');
const handlebarsNodeMailer = require('nodemailer-express-handlebars');
const Content = require('../models/Content');

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_SENDER } = process.env;

const transporter = nodemailer.createTransport({
	host: MAIL_HOST,
	port: MAIL_PORT,
	secure: true,
	auth: {
		user: MAIL_USER,
		pass: MAIL_PASS,
	},
});

transporter.use(
	'compile',
	handlebarsNodeMailer({
		viewEngine: {
			extName: '.hbs',
			partialsDir: './views/email',
			layoutsDir: './views/email',
			defaultLayout: false,
		},
		extName: '.hbs',
		viewPath: './views/email',
	})
);

const mailClient = {
	async reply(req, res, next) {
		const { userName, email, subject, text } = req.body;
		await transporter
			.sendMail({
				from: MAIL_SENDER,
				to: 'drteski@gmail.com',
				subject: `Wiadomość od: ${email} - ${subject}`,
				template: 'client',
				context: {
					text,
					subject,
					userName,
					email,
				},
			})
			.catch((err) => console.log(err));
		return next();
	},
	async confirmation(req, res) {
		const { userName, email, subject, text } = req.body;
		const clientLang = req.session.lang;
		const message = await Content.findOne({ language: `${clientLang}` });
		const {
			greeting,
			clientSubject,
			clientMessage,
			farewell,
			mainText,
			senderSubject,
		} = message.reply;
		await transporter
			.sendMail({
				from: MAIL_SENDER,
				to: `${email}`,
				subject: `${senderSubject} - ${email}`,
				template: 'reply',
				context: {
					text,
					subject,
					userName,
					greeting,
					clientSubject,
					clientMessage,
					farewell,
					mainText,
				},
			})
			.then((done) => {
				console.log(done);
				res.json({ message });
			})
			.catch((err) => {
				console.log(err);
				res.json({
					message:
						'Wystąpił błąd, odśwież stronę i spróbuj jeszcze raz.',
				});
			});
	},
};

module.exports = mailClient;
