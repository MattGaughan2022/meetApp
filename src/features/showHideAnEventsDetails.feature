Feature: Show or hide event details
 Scenario: An event element is collapsed by default
  Given the main page is open
  When events are showing
  Then event details should be hidden

 Scenario: When user clicks on 'show details' the event details appear.
  Given the main page is open
  When the user clicks on details button
  Then the user should receive the event details

 Scenario: When user clicks on 'hide details' the event details are hidden.
  Given the first event has its details showing
  When the user clicks on details button
  Then the user should not see the event details anymore