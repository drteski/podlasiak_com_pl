const express = require('express');

const router = express.Router();
const mailClient = require('../controllers/mail.controller');

router.post('/', mailClient.reply, mailClient.confirmation);

module.exports = router;
