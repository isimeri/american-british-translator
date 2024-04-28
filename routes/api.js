'use strict';

const express = require('express');
const router = express.Router()
const Translator = require('../components/translator.js');
const translate = new Translator;


router.post('/', (req, res) => {
    const rawText = req.body.text;
    const locale = req.body.locale;
    let output;

    if(locale === undefined || rawText === undefined){
        return res.json({ error: 'Required field(s) missing' });
    }
    
    if(locale === 'american-to-british'){
        output = translate.translateAB(rawText);
    } else if(locale === "british-to-american"){
        output = translate.translateBA(rawText);
    } else {
        return res.json({ error: 'Invalid value for locale field' });
    }

    if(!rawText){
        return res.json({ error: 'No text to translate' })
    }
    if(output === translate.capitalize(rawText)){
        output = "Everything looks good to me!";
    }

    res.json({text: rawText, translation: output, error: ''});
});

module.exports = router;