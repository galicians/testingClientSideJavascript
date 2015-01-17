# Karma and Protractor framework test

## Overview

Setting up a javascript testing framework for unit and e2e testing.
Jasmine + karma for unit tests and Protactor(Selenium) for end to end tests.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-github].
- Git [home][git-home] (download, documentation).

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`).


## Workings of the application

- The backend for this application is running on port 3000.


## Testing with Protractor

As a one-time setup, download webdriver.
```
npm run update-webdriver
```

Start the Protractor test runner using the e2e configuration:

```
npm run protractor
```


## Development with protractor and karma

The following docs describe how you can test and develop further this application.


### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:3000/app/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


### End to end testing

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
      bower_components  --> 3rd party js libraries, including angular and jquery
    test/               --> test source files and libraries
      karma.conf.js        --> config file for running unit tests with Karma
      protractor-conf.js   --> config file for running e2e tests with Protractor
      e2e/
        scenarios.js       --> end-to-end specs
      unit/             --> unit level specs/tests
    index.js            --> Server running on port 3000
    bower.json          --> front ent dependencies(jQuery, Bootstrap)
    package.json        --> all the node dependencies

## Important concepts:

###Selenium

As mentioned on the selenium [website](http://www.seleniumhq.org/), Selenium automates browsers. That’s it.

This having support for almost all major browsers, is a very good alternative to automate our tests in the browser. So whatever you do in the browser while testing your application, like navigating to pages, clicking a button, writing text in input boxes, submitting forms etc, can be automated using Selenium.

###WebDriver

WebDriver (or Selenium 2) basically refers to the language bindings and the implementations of the individual browser controlling code.

###WebDriverJS

As mentioned, WebDriver has a number of bindings for various languages like Ruby, Python etc. JavaScript being the language of choice for the web, is the latest one to make it to the list. Enter WebDriverJS!

So as you might guess, WebDriverJS is simply a wrapper over the JSON wire protocol exposing high level functions to make our life easy.

### 
In BDD tests are usually called specs.

## More resources:

For more information on the tools-concepts used:

* [how-protractor-works](https://github.com/angular/protractor/blob/master/docs/infrastructure.md)
* [locators](https://github.com/angular/protractor/blob/master/docs/locators.md)
* [page-objects](https://code.google.com/p/selenium/wiki/PageObjects)

*[protractor-non-angular-sites](http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/)

*[angular-seed](https://github.com/angular/angular-seed)

*[protractor](https://github.com/angular/protractor)

*[jasmine](http://pivotal.github.com/jasmine/)

*[karma](http://karma-runner.github.io)
*[grunt-protractor](http://programmerbuddy.blogspot.co.uk/2014/03/full-automation-of-protractor-e2e-tests.html)
*[HTML-DOM-Object](http://www.w3schools.com/jsref/dom_obj_all.asp)
*[JsonWireProtocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol)
*[jquery-API](http://api.jquery.com/)
*[unit-test-DOM-manipulation](http://stackoverflow.com/questions/16163852/how-to-unit-test-dom-manipulation-with-jasmine)
*[jasmine-jquery](https://github.com/velesin/jasmine-jquery)
*[qunit-vs-jasmine-vs-mocha](http://www.techtalkdc.com/which-javascript-test-library-should-you-use-qunit-vs-jasmine-vs-mocha/)
*[phantom.js](http://phantomjs.org/headless-testing.html)
*[webdriver](http://webdriver.io/api.html)
*[casper](http://casperjs.org/)


