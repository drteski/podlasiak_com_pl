const express = require('express');

const router = express.Router();
const languageSwitcher = require('../controllers/languageSwitcher');

router.get('/', languageSwitcher.initialLang);

router.get('/:lang', languageSwitcher.targetLang);

module.exports = router;
