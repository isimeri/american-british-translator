'use strict';

const express = require('express');
const router = express.Router()
const Translator = require('../components/translator.js');
const translate = new Translator;


router.post('/', (req, res) => {
    const rawText = req.body.text;
    const locale = req.body.locale;
    let output;
    if(locale === 'american-to-british'){
        output = translate.translateAB(rawText);
    } else {
        output = translate.translateBA(rawText);
    }

    if(output === rawText){
        output = "Everything looks good to me!";
    }

    res.json({translation: output, error: ''});
});

module.exports = router;