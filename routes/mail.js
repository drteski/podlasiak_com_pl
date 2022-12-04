const express = require('express');

const router = express.Router();
const mailClient = require('../controllers/mail.controller');
const { query } = require('express');

router.post('/', mailClient.replay, mailClient.confirmation);

module.exports = router;
