$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "I want to purchase from angemoi website",
  "description": "",
  "id": "i-want-to-purchase-from-angemoi-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "As a guest i want to purchase a bra from angemoi website",
  "description": "",
  "id": "i-want-to-purchase-from-angemoi-website;as-a-guest-i-want-to-purchase-a-bra-from-angemoi-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on angemoi website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"bra\" select my \"size\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "my \"color\" and click \"buy it now\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I was able to click on \"paypal\" to pay",
  "keyword": "Then "
});
formatter.match({
  "location": "loginsteps.i_am_on_angemoi_website()"
});
formatter.result({
  "duration": 5045504000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bra",
      "offset": 12
    },
    {
      "val": "size",
      "offset": 28
    }
  ],
  "location": "loginsteps.i_click_on_select_my(String,String)"
});
formatter.result({
  "duration": 46707500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: div.medium-down--one-half:nth-child(2) \u003e div:nth-child(1) \u003e a:nth-child(2) \u003e div:nth-child(1) \u003e span:nth-child(2)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PC\u0027, ip: \u0027192.168.1.146\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 18236, moz:profile: C:\\Users\\chloe\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 421ec65e-cd6b-47ea-8529-84140bd9dfd1\n*** Element info: {Using\u003dcss selector, value\u003ddiv.medium-down--one-half:nth-child(2) \u003e div:nth-child(1) \u003e a:nth-child(2) \u003e div:nth-child(1) \u003e span:nth-child(2)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinition.loginsteps.i_click_on_select_my(loginsteps.java:24)\r\n\tat ✽.When I click on \"bra\" select my \"size\"(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "color",
      "offset": 4
    },
    {
      "val": "buy it now",
      "offset": 22
    }
  ],
  "location": "loginsteps.my_and_click(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "paypal",
      "offset": 24
    }
  ],
  "location": "loginsteps.i_was_able_to_click_on_to_pay(String)"
});
formatter.result({
  "status": "skipped"
});
});