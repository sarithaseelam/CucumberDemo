Feature: Validate first and last name
  As a user you need to do the validations

  Scenario: Validate First Name and last name
    Given User need to be on Demo Site
    When User enters user "David" initial Name
    Then User enters user "Ryan" surname
    #Then close browser

 