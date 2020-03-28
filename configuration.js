var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

exports.config = {

   capabilities: {
         browserName: 'chrome',
         //browserName: 'firefox',//<-- supports one browser at a time only
         // marionette: true //<-- uncomment this line when running tests on firefox
      },
      directConnect: true,   
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['spec.google.buchner.js'],//<--this points to the file(s) that contain(s) the test(s)
      framework: 'jasmine2',
   
   onPrepare: () => {
      browser.driver.manage().window().maximize();//<-- run browser in maximised window
      jasmine.getEnv().addReporter(
         new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
         })
      );//addReporter
   },//onPrepare
   jasmineNodeOpts: {
      showColors: true, /<-- use colors in the command line report.
   }
   
};
