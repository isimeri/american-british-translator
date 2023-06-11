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


        let result = text;
        const flags = 'gi';

        brOnlyArr.forEach(word => {
            if(result.includes(word.toLowerCase())){
                const regex = new RegExp(`${word}`, flags);
                result = result.replace(regex, britishOnly[word.toLowerCase()]);
                // console.log(result);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(britishOnly[word.toLowerCase()])
                result = result.replace(regex, replacement);
            }
        });
        brTitles.forEach(word => {
            if(result.includes(word) || result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word.toLowerCase());
                result = result.replace(regex, this.capitalize(replacement));
                // console.log(result);
            }
        });
        brSpelling.forEach(word => {
            if(result.includes(word.toLowerCase())){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word.toLowerCase());
                result = result.replace(regex, replacement);
                // console.log(result);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word.toLowerCase());
                result = result.replace(regex, this.capitalize(replacement));
            }
        })
        return result;
    }

    translateAB(text){
        const amOnlyArr = Object.keys(americanOnly);
        const amTitles = Object.keys(americanToBritishTitles);
        const amSpelling = Object.keys(americanToBritishSpelling);

        let result = text;
        const flags = 'gi';

        amOnlyArr.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                result = result.replace(regex, americanOnly[word.toLowerCase()]);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(americanOnly[word.toLowerCase()]);
                result = result.replace(regex, replacement);
            }
        });
        amTitles.forEach(word => {
            if(result.includes(word) || result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(americanToBritishTitles[word.toLowerCase()]);
                result = result.replace(regex, replacement);
            }
        });
        amSpelling.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                const replacement = americanToBritishSpelling[word.toLowerCase()];
                result = result.replace(regex, replacement);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(americanToBritishSpelling[word.toLowerCase()]);
                result = result.replace(regex, replacement);
            }
        })

        return result;
    }
}

module.exports = Translator;