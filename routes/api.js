'use strict';

const express = require('express');
const router = express.Router()
const Translator = require('../components/translator.js');
const translate = new Translator;


router.post('/', (req, res) => {
    const rawText = req.body.text;
    const locale = req.body.locale;

    const output = translate.translateBA(rawText);

    res.json({translation: output, error: ''});
});

module.exports = router;