Feature: Create account of facebook
  As a user you need to open facebook home page and do the validations

  Background: common login steps
    Given User need to be on Facebook login page

  Scenario: Validate First Name Field
    When User enters user "David" first Name
    Then User checks user "David" first name is present
    Then close browser

  Scenario: Validate create user multiple fields
    When User enters user "Ryan" first Name
    And User enters user "Jack" last Name
    Then User checks user "Ryan" first name is present
    But User Mobile Field should be Blank
    Then close browser
