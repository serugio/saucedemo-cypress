Feature: purchase

    Background:
        Given User visits saucelabs page

    Scenario: succesfull purchase
        When user makes login with standardUser
        And user add sauce lab backpack to cart
        Then shopping cart icon should have number one badge
        And lab backpack remove button should exist
        When user click shopping cart icon
        Then shoping cart has sauce lab backpack in inventory
        When user click checkout button
        And user fill delivery information
        And user click continue button
        Then overview page is displays product, payment, shipping and price info
        When user click Finish button
        Then checkout complete page is displayed

    