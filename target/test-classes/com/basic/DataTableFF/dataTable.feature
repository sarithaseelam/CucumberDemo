Feature: Create account of facebook
  As a user you need to open facebook home page and do the validations

  Background: common login steps
    Given User need to be on Facebook login page

  Scenario: Validate create user multiple Fields
    When Enter following data
    |username |surname |Mobile|
    |Tom	  |Hanks   |12345 |
    |Jack	  |Hens	   |45678 |
    Then close browser


