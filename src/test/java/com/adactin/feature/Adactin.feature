Feature: Booking Functionality in the Adactin Application 
@SmokeTest
Scenario: Verify the user is able to login the application 
	Given User launches the application 
	When User enters the valid "Manjunath716" in the username field 
	And User enters the valid "16@March@1992" in the password field 
	And User clicks on the login button 
	Then User verifies whether the Homepage navigates to the search Hotelpage. 
@RegressionTest	
Scenario Outline: Verify the user is able to fillup the Search Hotel Details 
	When User chooses/select a particular "Sydney" as "value" in the location field 
	And User chooses/select a particular "Hotel Sunshine" as "text" in the hotel field 
	And User chooses/select a particular "<roomtype>" in the room type field 
	And User chooses/select a no.of rooms in the number of rooms field 
	And User enters the date in the check in date field 
	And User enters the date in the check out date field 
	And User chooses/select a no.of adult per room in the adult per room field 
	And User chooses/select a no.of children per room in the children per room field 
	And User clicks the search option 
	Then User verifies whether the search Hotelpage navigates to the Select Hotelpage 
	
	Examples:
	|roomtype|
	|Deluxe|
	
Scenario: Verify the user is able to select the shortlisted hotel 
	When User can click the radio button in shortlisted hotel 
	And User clicks the continue option 
	Then User verifies whether the Select Hotelpage navigates to the Book a Hotelpage 
	
Scenario: Verify the user is able to book the shortlisted hotel 
	When User enters the firstname in the First Name field 
	And User enters the lastname in the Last Name field 
	And User enters the billing address in the Billing Address field 
	And User enters the Credit card number details in the Credit Card No field 
	And User chooses/select the credit card type in the Credit card type field 
	And User chooses/select the select month in the Expiry month field 
	And User chooses/select the select year in the Expiry year field
	And User enters the CVV number in the CVV number field 
	And User clicks the Book Now option 
	Then User verifies the Book a Hotelpage navigates to Booking Confirmation page 
	
Scenario: Verify the user is able to logout the application 
	When User clicks the logout option 
	Then User verifes the Confirmation page navigates to successfully logout page 
	
	
	
	
