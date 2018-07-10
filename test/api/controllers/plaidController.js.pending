const puppeteer = require('puppeteer');
const should = require('should');
const request = require('supertest');
const app = require('../../../server');
const FPORT = process.env.FPORT || 3000;
app.listen(7000, function () {
    console.log("Starting tests... ");
});

/*test('Connect to Plaid\'s Link', async () => {

    let browser = await puppeteer.launch({headless:true});
    let page = await browser.newPage();
    await page.goto(`http://localhost:${3000}/`);
    await page.waitForSelector('#link-btn');
    await page.click('#link-btn');
    await page.click('#plaid-link-iframe-1 .PrivacyInterstitialPane__actions button');
    await page.click('#plaid-link-iframe-1 .InstitutionSelectPane__institution-list li[data-institution="chase"]');
    await page.keyboard.type('#plaid-link-container #username', 'user_good', {delay: 3});
    await page.keyboard.type('#plaid-link-container #password', 'pass_good', {delay: 3});
    await page.click('#plaid-link-iframe-container .CredentialPane button[type="submit"]');
    const label = await page.$eval( '#plaid-link-iframe-container .ConnectedPane button[type="submit"]', e => e.text());
    expect(label).toBe('Continue');
    await page.click('#plaid-link-iframe-container .ConnectedPane button[type="submit"]');
});*/
/*
describe('controllers', function() {

  describe('plaidController', function() {

    describe('GET /api/get_access_token', function() {

      it('should return a an access token', function(done) {

        request(app)
          .post('/api/get_access_token')
          .set('Accept', 'application/json')
          .send({ public_token: __plaidClient.publicToken})
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res.body.access_token);
            should.exist(res.body.item_id);
            res.body.should.be.an('object');
            done();
          });
      });

    });

  });

});*/
