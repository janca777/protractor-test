var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

exports.config = {
   capabilities: {
      browserName: 'chrome',
      //browserName: 'firefox',
      marionette: true
   },
   seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,
   specs: ['spec.google.buchner.js'],
   onPrepare: () => {
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
         new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
         })
      );//addReporter
   },//onPrepare
   jasmineNodeOpts: {
      showColors: true // Use colors in the command line report.
   }

};

