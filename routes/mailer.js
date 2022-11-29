const express = require('express');

const router = express.Router();
const mailClient = require('../controllers/mailer.controller');

router.post('/send', mailClient.replay, mailClient.confirmation);

module.exports = router;
