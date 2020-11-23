Feature: I want to purchase from angemoi website

  Scenario: As a guest i want to purchase a bra from angemoi website

    Given I am on angemoi website
    When I click on "bra" select my "size"
    And my "color" and click "buy it now"
    Then I was able to click on "paypal" to pay