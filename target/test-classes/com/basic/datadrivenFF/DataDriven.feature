Feature: Create account of facebook
  As a user you need to open facebook home page and do the validations

  Scenario Outline: Validate create user multiple fields
    Given User need to be on Facebook login page
    When User enters user "<user>" first Name
    And User enters user "<surname>" last Name
    Then User checks user "<user>" first name is present
    But User Mobile Field should be Blank
    Then close browser

    Examples: 
      | user | surname |
      | Tom  | Hanks   |
      | Jack | Hens    |
