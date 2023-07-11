const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

    test('Translation with text and locale fields: POST request to /api/translate', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .send({text: "give this man a bicky", locale: "british-to-american"})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, `Give this man a <span class="highlight">cookie</span>`);
            done();
          });
    });
    test('Translation with text and invalid locale field: POST request to /api/translate', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .send({text: "give this man a bicky", locale: "asdasdaasdasd"})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, `Invalid value for locale field`);
            done();
          });
    });
    test('Translation with missing text field: POST request to /api/translate', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .send({text: "", locale: "british-to-american"})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, `No text to translate`);
            done();
          });
    });
    test('Translation with missing locale field: POST request to /api/translate', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .send({text: "give this man a cookie", locale: 'asdfasdf'})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, `Invalid value for locale field`);
            done();
          });
    });
    test('Translation with empty text: POST request to /api/translate', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .send({text: "", locale: "british-to-american"})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, `No text to translate`);
            done();
          });
    });
    test('Translation with text that needs no translation: POST request to /api/translate', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .send({text: "your cookie is the best", locale: "british-to-american"})
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, `Everything looks good to me!`);
            done();
          });
    });
});



// Translation with text and locale fields: POST request to /api/translate
// Translation with text and invalid locale field: POST request to /api/translate
// Translation with missing text field: POST request to /api/translate
// Translation with missing locale field: POST request to /api/translate
// Translation with empty text: POST request to /api/translate
// Translation with text that needs no translation: POST request to /api/translate
