const express = require('express');

const router = express.Router();
const mailClient = require('../controllers/mailer.controller');

router.post('/', mailClient.replay, mailClient.confirmation);

module.exports = router;
