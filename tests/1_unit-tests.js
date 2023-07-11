const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const tr = new Translator;

//<span class="highlight">

suite('Unit Tests', () => {
    suite("American to british tests", () => {
        test(`Translate "Mangoes are my favorite fruit." to British English`, done => {

            let result = tr.translateAB("Mangoes are my favorite fruit.");
            assert.equal(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
            done();
        });

        test(`Translate "I ate yogurt for breakfast." to British English`, done => {

            let result = tr.translateAB("I ate yogurt for breakfast.");
            assert.equal(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
            done();
        });

        test(`Translate "We had a party at my friend's condo." to British English`, done => {

            let result = tr.translateAB(`We had a party at my friend's condo.`);
            assert.equal(result, `We had a party at my friend's <span class="highlight">flat</span>.`);
            done();
        });

        test(`Translate "Can you toss this in the trashcan for me?" to British English`, done => {

            let result = tr.translateAB("Can you toss this in the trashcan for me?");
            assert.equal(result, 'Can you toss this in the <span class="highlight">bin</span> for me?');
            done();
        });

        test(`Translate "The parking lot was full." to British English`, done => {

            let result = tr.translateAB("The parking lot was full.");
            assert.equal(result, 'The <span class="highlight">car park</span> was full.');
            done();
        });

        test(`Translate "Like a high tech Rube Goldberg machine." to British English`, done => {

            let result = tr.translateAB("Like a high tech Rube Goldberg machine.");
            assert.equal(result, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
            done();
        });

        test(`Translate "To play hooky means to skip class or work." to British English`, done => {

            let result = tr.translateAB("To play hooky means to skip class or work.");
            assert.equal(result, 'To <span class="highlight">bunk off</span> means to skip class or work.');
            done();
        });

        test(`Translate "No Mr. Bond, I expect you to die." to British English`, done => {

            let result = tr.translateAB("No Mr. Bond, I expect you to die.");
            assert.equal(result, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
            done();
        });

        test(`Translate "Dr. Grosh will see you now." to British English`, done => {

            let result = tr.translateAB("Dr. Grosh will see you now.");
            assert.equal(result, '<span class="highlight">Dr</span> Grosh will see you now.');
            done();
        });

        test(`Translate "Lunch is at 12:15 today." to British English`, done => {

            let result = tr.translateAB("Lunch is at 12:15 today.");
            assert.equal(result, 'Lunch is at <span class="highlight">12.15</span> today.');
            done();
        });
    });
    suite("British to american tests", () => {

        test(`Translate "We watched the footie match for a while." to American English`, done => {

            let result = tr.translateBA("We watched the footie match for a while.");
            assert.equal(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
            done();
        });
        test(`Translate "Paracetamol takes up to an hour to work." to American English`, done => {

            let result = tr.translateBA("Paracetamol takes up to an hour to work.");
            assert.equal(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
            done();
        });
        test(`Translate "First, caramelise the onions." to American English`, done => {

            let result = tr.translateBA("First, caramelise the onions.");
            assert.equal(result, 'First, <span class="highlight">caramelize</span> the onions.');
            done();
        });
        test(`Translate "I spent the bank holiday at the funfair." to American English`, done => {

            let result = tr.translateBA("I spent the bank holiday at the funfair.");
            assert.equal(result, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
            done();
        });
        test(`Translate "I had a bicky then went to the chippy." to American English`, done => {

            let result = tr.translateBA("I had a bicky then went to the chippy.");
            assert.equal(result, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
            done();
        });
        test(`Translate "I've just got bits and bobs in my bum bag." to American English`, done => {

            let result = tr.translateBA("I've just got bits and bobs in my bum bag.");
            assert.equal(result, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
            done();
        });
        test(`Translate "The car boot sale at Boxted Airfield was called off." to American English`, done => {

            let result = tr.translateBA("The car boot sale at Boxted Airfield was called off.");
            assert.equal(result, `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`);
            done();
        });
        test(`Translate "Have you met Mrs Kalyani?" to American English`, done => {

            let result = tr.translateBA("Have you met Mrs Kalyani?");
            assert.equal(result, `Have you met <span class="highlight">Mrs.</span> Kalyani?`);
            done();
        });
        test(`Translate "Prof Joyner of King's College, London." to American English`, done => {

            let result = tr.translateBA("Prof Joyner of King's College, London.");
            assert.equal(result, `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
            done();
        });
        test(`Translate "Tea time is usually around 4 or 4.30." to American English`, done => {

            let result = tr.translateBA("Tea time is usually around 4 or 4.30.");
            assert.equal(result, `Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
            done();
        });
    });
    suite("Highlight tests", () => {

        test(`Translate "Mangoes are my favorite fruit." to American English`, done => {

            let result = tr.translateAB("Mangoes are my favorite fruit.");
            assert.equal(result, `Mangoes are my <span class="highlight">favourite</span> fruit.`);
            done();
        });
        test(`Translate "I ate yogurt for breakfast." to American English`, done => {

            let result = tr.translateAB("I ate yogurt for breakfast.");
            assert.equal(result, `I ate <span class="highlight">yoghurt</span> for breakfast.`);
            done();
        });
        test(`Translate "We watched the footie match for a while." to American English`, done => {

            let result = tr.translateBA("We watched the footie match for a while.");
            assert.equal(result, `We watched the <span class="highlight">soccer</span> match for a while.`);
            done();
        });
        test(`Translate "Paracetamol takes up to an hour to work." to American English`, done => {

            let result = tr.translateBA("Paracetamol takes up to an hour to work.");
            assert.equal(result, `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
            done();
        });
    });
});



// Translate Mangoes are my favorite fruit. to British English
// Translate I ate yogurt for breakfast. to British English
// Translate We had a party at my friend's condo. to British English
// Translate Can you toss this in the trashcan for me? to British English
// Translate The parking lot was full. to British English
// Translate Like a high tech Rube Goldberg machine. to British English
// Translate To play hooky means to skip class or work. to British English
// Translate No Mr. Bond, I expect you to die. to British English
// Translate Dr. Grosh will see you now. to British English
// Translate Lunch is at 12:15 today. to British English

// Translate We watched the footie match for a while. to American English
// Translate Paracetamol takes up to an hour to work. to American English
// Translate First, caramelise the onions. to American English
// Translate I spent the bank holiday at the funfair. to American English
// Translate I had a bicky then went to the chippy. to American English
// Translate I've just got bits and bobs in my bum bag. to American English
// Translate The car boot sale at Boxted Airfield was called off. to American English
// Translate Have you met Mrs Kalyani? to American English
// Translate Prof Joyner of King's College, London. to American English
// Translate Tea time is usually around 4 or 4.30. to American English

// Highlight translation in Mangoes are my favorite fruit.
// Highlight translation in I ate yogurt for breakfast.
// Highlight translation in We watched the footie match for a while.
// Highlight translation in Paracetamol takes up to an hour to work.
