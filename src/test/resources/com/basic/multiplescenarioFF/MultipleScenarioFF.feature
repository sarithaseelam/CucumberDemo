Feature: Create account of facebook
  As a user you need to open facebook home page and do the validations

  Scenario: Validate First Name Field
    Given User need to be on Facebook login page
    When User enters user first Name
    Then User checks user first name is present
    Then close browser

  Scenario: Validate create user multiple fields
    Given User need to be on Facebook login page
    When User enters user first Name
    And User enters user last Name
    Then User checks user first name is present
    But User Mobile Field should be Blank
    Then close browser
