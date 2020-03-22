describe('Ein erster Beispieltest', () => {
   let googleObj = require("./google.js");
   let ExpCond = protractor.ExpectedConditions;
   let suchText = "buchner und partner praxisbedarf";

   beforeEach(() => {
      browser.waitForAngularEnabled(false);
      googleObj.getURL();
   });

   it('sollte den Standort von Buchner und Partner in Google Maps anzeigen', () => {
      googleObj.searchInput.sendKeys(suchText, protractor.Key.ENTER);
      browser.wait(ExpCond.elementToBeClickable(googleObj.mapsLink), 10000);
      googleObj.mapsLink.click().then(function () {
         browser.sleep(5000);
      });
   });
});