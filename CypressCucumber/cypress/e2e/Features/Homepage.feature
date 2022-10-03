Feature: Homepage Feature

Feature This feature for user actions on homepage
          
Background:
Given A user opens the Homepage    

Scenario: Successful using of EmailForm at homepage
           
When A user fill input line "valddlav11@gmail.com"
When A user click on Try for free button
Then System redirects user to Sign up page

Scenario: User using comments options successfully

When A user click on right arrow
When A user Click on left dot
Then System shows you first comment

Scenario: A user using customer story option

When A user click on Read Ooma customer story 
When A user Click on Ooma link text
Then System open new Ooma page