Feature: This feature will add a product to the cart

  Background: 
    Given I have already launched the application

  @sanity
  Scenario Outline: This scenario will add a product to cart
    Given I entered valid username and password
    When I click on LoginButton
    And I click on Add to Cart of the "<Product>"
    Then "<Product>" should be added to the cart

    Examples: 
      | Product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
