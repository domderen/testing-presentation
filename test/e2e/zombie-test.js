import Browser from 'zombie';
import chai from 'chai';

const { expect } = chai;

describe('User visits search page', function () {
  this.timeout(10000);
  let browser = new Browser();

  before(() => {
    browser.site = 'import.io';
    return browser.visit('/');
  });

  describe('submits form', () => {
    before(() => {
      browser.fill('#url-input', 'http://www.ikea.com/us/en/search/?query=chair');
      return browser.pressButton('Try it Out');
    });

    it('should be successful', () => {
      browser.assert.success();
    });

    it('should see welcome page', () => {
      browser.assert.text('title', 'import.io Magic | Web Data Platform & Free Web Scraping Tool');
    });
  });
});
