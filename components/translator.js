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
        const timeRegex = /\d{0,2}\.\d{0,2}/g;

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
            if(result.includes(word.toLowerCase())){
                const regex = new RegExp(`${word}`, flags);
                result = result.replace(regex, `<span class="highlight">${britishOnly[word.toLowerCase()]}</span>`);
                // console.log(result);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(britishOnly[word.toLowerCase()])
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            }
        });
        brTitles.forEach(word => {
            if(result.includes(word) || result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word.toLowerCase());
                result = result.replace(regex, `<span class="highlight">${this.capitalize(replacement)}</span>`);
                // console.log(result);
            }
        });
        brSpelling.forEach(word => {
            if(result.includes(word.toLowerCase())){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word.toLowerCase());
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
                // console.log(result);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word.toLowerCase());
                result = result.replace(regex, `<span class="highlight">${this.capitalize(replacement)}</span>`);
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
        const timeRegex = /\d{0,2}:\d{0,2}/g;

        if(result.match(timeRegex)){
            const matchArr = result.match(timeRegex);
        
            matchArr.forEach(i => {
                const r = i.replace(':','.')
                const newTimeRegex = new RegExp(i, 'g');
                result = result.replace(newTimeRegex, `<span class="highlight">${r}</span>`);
            });
        }

        amOnlyArr.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                result = result.replace(regex, `<span class="highlight">${americanOnly[word.toLowerCase()]}</span>`);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(americanOnly[word.toLowerCase()]);
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            }
        });
        amTitles.forEach(word => {
            if(result.includes(word) || result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(americanToBritishTitles[word.toLowerCase()]);
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            }
        });
        amSpelling.forEach(word => {
            if(result.includes(word)){
                const regex = new RegExp(`${word}`, flags);
                const replacement = americanToBritishSpelling[word.toLowerCase()];
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            }
            if(result.includes(this.capitalize(word))){
                const regex = new RegExp(`${word}`, flags);
                const replacement = this.capitalize(americanToBritishSpelling[word.toLowerCase()]);
                result = result.replace(regex, `<span class="highlight">${replacement}</span>`);
            }
        })

        return result;
    }
}

module.exports = Translator;


//cand scriu "vulgarized" ia in considerare doar "vulgarize" pt ca vine inaintea lui "vulgarized" in lista, de aceea "d" ramane neevidentiat plm