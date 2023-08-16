Feature: Specify number of events
 Scenario: When user hasn't specified a number, 32 events are shown by default.
  Given the user has not specified a number of events
  When the main page is open
  Then the number of events listed should be 32

 Scenario: User can change number of events displayed
  Given the user has entered a number less than 32
  When the main page is open
  Then the number of eventslisted should match this number