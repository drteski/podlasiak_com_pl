const express = require('express');

const router = express.Router();
const languageSwitcher = require('../controllers/languageSwitcher');
const mailClient = require('../controllers/mailer');

router.get('/', languageSwitcher.initialLang);

router.get('/:lang', languageSwitcher.targetLang);

// router.post('/send', mailClient.send, mailClient.confirmation);
router.get('/send', (req, res) => {
	console.log(req.body, res.body);
});

module.exports = router;
