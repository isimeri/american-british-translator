const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    brOnly(word){
        return britishOnly[word];
    }
    amOnly(word){
        return americanOnly[word];
    }
    amToBrSpelling(word){
        return americanToBritishSpelling[word]
    }
    brToAmSpelling(word){
        return Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word);
    }
    amToBrTitles(word){
        return americanToBritishTitles(word);
    }
    brToAmTitles(word){
        return Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word);
    }

    translateBA(text){
        const brOnlyArr = Object.keys(britishOnly);
        const brTitles = Object.values(americanToBritishTitles);
        const brSpelling = Object.values(americanToBritishSpelling);

        // console.log(brSpelling)

        let result = text;
        const flags = 'gi';

        brOnlyArr.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                result = result.replace(regex, britishOnly[word]);
                console.log(result);
            }
        });
        brTitles.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word);
                result = result.replace(regex, replacement);
                console.log(result);
            }
        });
        brSpelling.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word);
                result = result.replace(regex, replacement);
                console.log(result);
            }
        })
        return result;
    }

    translateAB(text){
        const amOnlyArr = Object.keys(americanOnly);
        const amTitles = Object.keys(americanToBritishTitles);
        const amSpelling = Object.keys(americanToBritishSpelling);

        result = text;
        flags = 'gi'

        //continua aici

        return result;
    }
}

module.exports = Translator;