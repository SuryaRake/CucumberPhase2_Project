$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Homepage.feature");
formatter.feature({
  "name": "This feature will add a product to the cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "This scenario will add a product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I entered valid username and password",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Add to Cart of the \"\u003cProduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"\u003cProduct\u003e\" should be added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario will add a product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I entered valid username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.HomePageTestDef.i_entered_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Add to Cart of the \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.HomePageTestDef.i_click_on_Add_to_Cart_of_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sauce Labs Backpack\" should be added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.HomePageTestDef.should_be_added_to_the_cart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario will add a product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I entered valid username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.HomePageTestDef.i_entered_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Add to Cart of the \"Sauce Labs Fleece Jacket\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.HomePageTestDef.i_click_on_Add_to_Cart_of_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sauce Labs Fleece Jacket\" should be added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.HomePageTestDef.should_be_added_to_the_cart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Login feature scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "This scenario defined the positive login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"\u003cUserName\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "name": "I  should land on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario defined the positive login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario defined the positive login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"problem_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario defined the positive login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"performance_glitch_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.LoginStepDef.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});