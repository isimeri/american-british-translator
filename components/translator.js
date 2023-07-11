const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    translateBA(text){
        const brOnlyArr = Object.keys(britishOnly);
        const brTitles = Object.values(americanToBritishTitles);
        const brSpelling = Object.values(americanToBritishSpelling);
        const timeRegex = /\d{1,2}\.\d{1,2}/g;

        let result = text;
        const flags = 'gi';

        if(result.match(timeRegex)){
            const matchArr = result.match(timeRegex);
        
            matchArr.forEach(i => {
                const r = i.replace('.',':')
                const newTimeRegex = new RegExp(i, 'g');
                result = result.replace(newTimeRegex, `<span class="highlight">${r}</span>`);
            });
        }
        brOnlyArr.forEach(word => {

            const regex = new RegExp(`(?<![-'])\\b${word}\\b(?![-'])`, flags);
            let replacement;
            
            if(result.match(regex)){
                
                replacement = britishOnly[word];
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            
            }
        });
        brTitles.forEach(word => {

            const regex = new RegExp(`(?<![-'])\\b${word}\\b(?![-'])`, flags);
            let replacement;
            
            if(result.match(regex)){
                
                replacement = this.capitalize(Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word));
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            
            }
        });
        brSpelling.forEach(word => {
           
            const regex = new RegExp(`(?<![-'])\\b${word}\\b(?![-'])`, flags);
            let replacement;
            
            if(result.match(regex)){
                
                replacement = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word);
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            
            }
        });
        return this.capitalize(result);
    }

    translateAB(text){
        const amOnlyArr = Object.keys(americanOnly);
        const amTitles = Object.keys(americanToBritishTitles);
        const brTitles = Object.values(americanToBritishTitles);
        const amSpelling = Object.keys(americanToBritishSpelling);

        let result = text;
        const flags = 'gi';
        const timeRegex = /\d{1,2}:\d{1,2}/g;

        if(result.match(timeRegex)){
            const matchArr = result.match(timeRegex);
        
            matchArr.forEach(i => {
                const r = i.replace(':','.')
                const newTimeRegex = new RegExp(i, 'g');
                result = result.replace(newTimeRegex, `<span class="highlight">${r}</span>`);
            });
        }

        amOnlyArr.forEach(word => {

            const regex = new RegExp(`(?<![-'])\\b${word}\\b(?![-'])`, flags);
            let replacement;
            
            if(result.match(regex)){
                
                replacement = americanOnly[word];
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            
            }
        });
        brTitles.forEach(word => {

            const regex = new RegExp(`(?<![-'])\\b${word}\\.(?![-'])`, flags);
            let replacement;
            // console.log('prof.'.match(regex));
            // console.log(regex)

            if(result.match(regex)){
                // console.log('aicia');
                replacement = this.capitalize(americanToBritishTitles[`${word}.`]);
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            
            }
        });
        amSpelling.forEach(word => {

            const regex = new RegExp(`(?<![-'])\\b${word}\\b(?![-'])`, flags);
            let replacement;
            
            if(result.match(regex)){
                
                replacement = americanToBritishSpelling[word];
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            
            }
        });

        return this.capitalize(result);
    }
}

module.exports = Translator;