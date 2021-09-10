$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tags.feature");
formatter.feature({
  "line": 2,
  "name": "Create account of facebook",
  "description": "As a user you need to open facebook home page and do the validations",
  "id": "create-account-of-facebook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Important"
    }
  ]
});
formatter.scenario({
  "line": 13,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters user \"Ryan\" first Name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters user \"Jack\" last Name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User checks user \"Ryan\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Mobile Field should be Blank",
  "keyword": "But "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 7244315000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 115713700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.101)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ON34C03074536\u0027, ip: \u002710.0.0.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.101, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\SiddiqAb\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58680}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1a6cab822caf246a4645c410b1be95ba\n*** Element info: {Using\u003dname, value\u003dfirstname}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.basic.tagsSD.TagsStepDef.user_enters_user_first_name(TagsStepDef.java:35)\r\n\tat ✽.When User enters user \"Ryan\" first Name(tags.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_last_name_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TagsStepDef.user_mobile_field_is_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Validate First Name Field",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User enters user \"Dave\" first Name",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User checks user \"Dave\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 4382469600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dave",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 54729600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.101)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ON34C03074536\u0027, ip: \u002710.0.0.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.101, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\SiddiqAb\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58299}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ceed8b58bed10ff2eb57f0b596f4d01a\n*** Element info: {Using\u003dname, value\u003dfirstname}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.basic.tagsSD.TagsStepDef.user_enters_user_first_name(TagsStepDef.java:35)\r\n\tat ✽.When User enters user \"Dave\" first Name(tags.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dave",
      "offset": 18
    }
  ],
  "location": "TagsStepDef.user_checks_user_first_name_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});