Feature: Header Feature

Feature this feature for user actions in Header

Background:
Given A user opens the Homepage 1

Scenario: User using Network option

When A user click on Network button in header
When A user click on Try Our Network button
Then System redirects you to sign up page

Scenario: Check visibility of header categories

When Check visibility of Products category
When Check visibility of Solutions category
When Check visibility of Network button
When Check visibility of Resources category
When Check visibility of Company category
Then Check visibility of Pricing category

Scenario: User using Support-center option 

When User click on Support-center button in header
When User click on Getting Started button
Then System redirects you to Getting started page

Scenario: A user using Phone-numbers option

When A user click on global numbers button in Products category
When A user click on Claim your Free Testing Credit
Then System redirects user to sign-up page

Scenario: Check functionality of call-tracking page

When Click on Call tracking button in Solutions category
When Check visibility of Call tracking title
When Check visibility of Call tracking image
When Check visibility one of how it works block title
Then Check visibility one of how it works block image

Scenario: Check functionality of CEP page

When Click on Customer Engagement platforms button at Solutions category
When Check visibility of Page title
When Check visibility of Top image
When Click Schedule a call with our experts
Then System redirects you to contact us page

Scenario: Check functionality of Bring your own career option

When Click on Bring your own career button in Resources category
When Click on Try it for Free button
Then System redirects you to sign up page 

Scenario: Check functionality of Partnership page

When Click on Partners button in Company category
When Check visibility of main title
When Check visibility of Learn about our Network link text
Then Check visibility on of Grow with Telnyx block image

Scenario: A user search in Blog page

When Click on Blog button in Resources category
When Search “API” and click enter
Then Check visibility of “Search result” text

Scenario: Check functionality of Call us option

When Click on Call us button
Then Check phone image on visibility

Scenario: A user log in by false data

When A user click on Log in button in header
When A user input "adgadgadg@gmail.com" in Business input line
When A user input "rscdaadafadafaf" in password input line
When A user click on Log in button
Then System shows negative message