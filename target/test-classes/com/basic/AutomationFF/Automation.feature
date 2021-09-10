
Feature: Create account of facebook
  As a user you need to open facebook home page and do the validations

  Background: common login steps
    Given User need to be on Facebook login page

  Scenario: Validate First Name Field
    When User enters user "David" first Name
    Then User checks user "David" first name is present
    Then User Enter Name
    Then User checks password 
    
    Then check user name is entered or not
    
    #Then User is able to login successfully
    Then close browser

    #GherkinLanguage