Feature: Login feature scenario

  Background: 
    Given I have already launched the application

  @sanity
  Scenario Outline: This scenario defined the positive login with valid credentials
    When I enter the username as "<UserName>" and password as "<Password>"
    And I click on LoginButton
    Then I  should land on the home page

    Examples: 
      | UserName                | Password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  Scenario: This scenario defined the negative login with invalid credentials
    When I enter incorrect username and password
    And I click on LoginButton
    Then I  should get the error message "Epic sadface: Username and password do not match any user in this service"
