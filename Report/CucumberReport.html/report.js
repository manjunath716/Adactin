$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Functionality in the Adactin Application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1266747,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the valid \"Manjunath716\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"16@March@1992\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies whether the Homepage navigates to the search Hotelpage.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 5202208552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manjunath716",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 241159434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16@March@1992",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 183569147,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1332574736,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_search_Hotelpage()"
});
formatter.result({
  "duration": 40106,
  "status": "passed"
});
formatter.after({
  "duration": 169384,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the user is able to fillup the Search Hotel Details",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-fillup-the-search-hotel-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User chooses/select a particular \"Sydney\" as \"value\" in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User chooses/select a particular \"Hotel Sunshine\" as \"text\" in the hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User chooses/select a particular \"\u003croomtype\u003e\" in the room type field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User chooses/select a no.of rooms in the number of rooms field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the date in the check in date field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the date in the check out date field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User chooses/select a no.of adult per room in the adult per room field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User chooses/select a no.of children per room in the children per room field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks the search option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verifies whether the search Hotelpage navigates to the Select Hotelpage",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-fillup-the-search-hotel-details;",
  "rows": [
    {
      "cells": [
        "roomtype"
      ],
      "line": 23,
      "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-fillup-the-search-hotel-details;;1"
    },
    {
      "cells": [
        "Deluxe"
      ],
      "line": 24,
      "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-fillup-the-search-hotel-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 151890,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify the user is able to fillup the Search Hotel Details",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-fillup-the-search-hotel-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User chooses/select a particular \"Sydney\" as \"value\" in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User chooses/select a particular \"Hotel Sunshine\" as \"text\" in the hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User chooses/select a particular \"Deluxe\" in the room type field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User chooses/select a no.of rooms in the number of rooms field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the date in the check in date field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the date in the check out date field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User chooses/select a no.of adult per room in the adult per room field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User chooses/select a no.of children per room in the children per room field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks the search option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User verifies whether the search Hotelpage navigates to the Select Hotelpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 34
    },
    {
      "val": "value",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_chooses_select_a_particular_as_in_the_location_field(String,String)"
});
formatter.result({
  "duration": 173727428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 34
    },
    {
      "val": "text",
      "offset": 54
    }
  ],
  "location": "StepDefinition.user_chooses_select_a_particular_as_in_the_hotel_field(String,String)"
});
formatter.result({
  "duration": 166414086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deluxe",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_chooses_select_a_particular_in_the_room_type_field(String)"
});
formatter.result({
  "duration": 130806067,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_chooses_select_a_no_of_rooms_in_the_number_of_rooms_field()"
});
formatter.result({
  "duration": 152621515,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_date_in_the_check_in_date_field()"
});
formatter.result({
  "duration": 137441879,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_date_in_the_check_out_date_field()"
});
formatter.result({
  "duration": 130204907,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_chooses_select_a_no_of_adult_per_room_in_the_adult_per_room_field()"
});
formatter.result({
  "duration": 130947718,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_chooses_select_a_no_of_children_per_room_in_the_children_per_room_field()"
});
formatter.result({
  "duration": 94030288,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_search_option()"
});
formatter.result({
  "duration": 848438304,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_search_Hotelpage_navigates_to_the_Select_Hotelpage()"
});
formatter.result({
  "duration": 46079,
  "status": "passed"
});
formatter.after({
  "duration": 130984,
  "status": "passed"
});
formatter.before({
  "duration": 139944,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the user is able to select the shortlisted hotel",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-select-the-shortlisted-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User can click the radio button in shortlisted hotel",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User clicks the continue option",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User verifies whether the Select Hotelpage navigates to the Book a Hotelpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_can_click_the_radio_button_in_shortlisted_hotel()"
});
formatter.result({
  "duration": 118100621,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_continue_option()"
});
formatter.result({
  "duration": 1012693927,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Select_Hotelpage_navigates_to_the_Book_a_Hotelpage()"
});
formatter.result({
  "duration": 54186,
  "status": "passed"
});
formatter.after({
  "duration": 1200615,
  "status": "passed"
});
formatter.before({
  "duration": 134398,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the user is able to book the shortlisted hotel",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-book-the-shortlisted-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User enters the firstname in the First Name field",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters the lastname in the Last Name field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enters the billing address in the Billing Address field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters the Credit card number details in the Credit Card No field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User chooses/select the credit card type in the Credit card type field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User chooses/select the select month in the Expiry month field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User chooses/select the select year in the Expiry year field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enters the CVV number in the CVV number field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User clicks the Book Now option",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User verifies the Book a Hotelpage navigates to Booking Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_firstname_in_the_First_Name_field()"
});
formatter.result({
  "duration": 195518129,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_lastname_in_the_Last_Name_field()"
});
formatter.result({
  "duration": 128148415,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_billing_address_in_the_Billing_Address_field()"
});
formatter.result({
  "duration": 147222158,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Credit_card_number_details_in_the_Credit_Card_No_field()"
});
formatter.result({
  "duration": 132668430,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_chooses_select_the_credit_card_type_in_the_Credit_card_type_field()"
});
formatter.result({
  "duration": 120557745,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_chooses_select_the_select_month_in_the_Expiry_month_field()"
});
formatter.result({
  "duration": 123263609,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_chooses_select_the_select_year_in_the_Expiry_year_field()"
});
formatter.result({
  "duration": 129847794,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_CVV_number_in_the_CVV_number_field()"
});
formatter.result({
  "duration": 114578560,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_Book_Now_option()"
});
formatter.result({
  "duration": 85249241,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_the_Book_a_Hotelpage_navigates_to_Booking_Confirmation_page()"
});
formatter.result({
  "duration": 38826,
  "status": "passed"
});
formatter.after({
  "duration": 111784,
  "status": "passed"
});
formatter.before({
  "duration": 106238,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify the user is able to logout the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-logout-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "User clicks the logout option",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User verifes the Confirmation page navigates to successfully logout page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_logout_option()"
});
formatter.result({
  "duration": 6290548930,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifes_the_Confirmation_page_navigates_to_successfully_logout_page()"
});
formatter.result({
  "duration": 74238,
  "status": "passed"
});
formatter.after({
  "duration": 135250,
  "status": "passed"
});
});