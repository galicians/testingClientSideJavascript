'use strict';


describe('protactor', function() {

  beforeEach(function() {
      return browser.ignoreSynchronization = true;
    });

  it('should start at index.html ', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'index.html');
  });




