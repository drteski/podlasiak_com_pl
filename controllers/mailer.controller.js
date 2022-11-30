require('dotenv').config();

const nodemailer = require('nodemailer');
const handlebarsNodeMailer = require('nodemailer-express-handlebars');

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
	async replay(req, res, next) {
		const { userName, email, subject, text } = req.body;
		await transporter
			.sendMail({
				from: '"Podlasiak" <admin@podlasiak.com.pl>',
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
		await transporter
			.sendMail({
				from: '"Podlasiak" <admin@podlasiak.com.pl>',
				to: `${email}`,
				subject: `Otrzymaliśmy twoje zgłoszenie - ${email}`,
				template: 'replay',
				context: {
					text,
					subject,
					userName,
				},
			})
			.then((done) => {
				console.log(done);
				res.json({ message: 'Dziękujemy za kontakt.' });
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
