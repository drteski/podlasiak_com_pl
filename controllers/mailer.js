const nodemailer = require('nodemailer');

const { host, port, user, password } = process.env;

const transporter = nodemailer.createTransport({
	host,
	port,
	secure: true, // true for 465, false for other ports
	auth: {
		user, // generated ethereal user
		password, // generated ethereal password
	},
});

const mailClient = {
	async send(req, res, next) {
		const { subject, text } = req.body;
		const info = await transporter.sendMail({
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

module.exports = mailClient;
