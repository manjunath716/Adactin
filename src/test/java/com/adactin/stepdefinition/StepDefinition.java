package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.ConfigurationReader;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.BookHotelPage;
import com.adactin.pom.LoginPage;
import com.adactin.pom.LogoutPage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.pom.SelectHotelPage;
import com.adactin.testrunner.TestRunner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class StepDefinition extends BaseClass {
	public static WebDriver driver = TestRunner.driver;
	PageObjectManager pom = new PageObjectManager(driver);

	@Before
	public void beforeHooks(Scenario scenario) {
		String name = scenario.getName();
		System.out.println("Scenario:  " + name);

	}
	@After
	public void afterHooks(Scenario scenario) {
		String status = scenario.getStatus();
		System.out.println("Scenario:   " +status);
	}
	
	@Given("^User launches the application$")
	public void user_launches_the_application() throws Throwable {
		/*
		 * driver = getBrowser("chrome"); getUrl("https://adactinhotelapp.com/");
		 */
		/*
		 * ConfigurationReader cr = new ConfigurationReader(); String url = cr.getUrl();
		 * getUrl(url);
		 */
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
	}

	/*
	 * @When("^User enters the valid username in the username field$") public void
	 * user_enters_the_valid_username_in_the_username_field() throws Throwable {
	 * LoginPage lp = new LoginPage(driver); inputToElement(lp.getUsername(),
	 * "Manjunath716"); }
	 * 
	 * @When("^User enters the valid password in the password field$") public void
	 * user_enters_the_valid_password_in_the_password_field() throws Throwable {
	 * LoginPage lp = new LoginPage(driver); inputToElement(lp.getPassword(),
	 * "16@March@1992"); }
	 */
	@When("^User enters the valid \"([^\"]*)\" in the username field$")
	public void user_enters_the_valid_in_the_username_field(String username) throws Throwable {
		inputToElement(pom.getLp().getUsername(), username);
		// LoginPage lp = new LoginPage(driver);
		// inputToElement(lp.getUsername(), username);
	}

	@When("^User enters the valid \"([^\"]*)\" in the password field$")
	public void user_enters_the_valid_in_the_password_field(String password) throws Throwable {
		inputToElement(pom.getLp().getPassword(), password);
//		LoginPage lp = new LoginPage(driver);
//		inputToElement(lp.getPassword(), password);
	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		inputToClick(pom.getLp().getLogin());

	}

	@Then("^User verifies whether the Homepage navigates to the search Hotelpage\\.$")
	public void user_verifies_whether_the_Homepage_navigates_to_the_search_Hotelpage() throws Throwable {

	}

	@When("^User chooses/select a particular \"([^\"]*)\" as \"([^\"]*)\" in the location field$")
	public void user_chooses_select_a_particular_as_in_the_location_field(String value, String option)
			throws Throwable {
		selectDropDown(pom.getShp().getLocation(), option, value);
	}

	@When("^User chooses/select a particular \"([^\"]*)\" as \"([^\"]*)\" in the hotel field$")
	public void user_chooses_select_a_particular_as_in_the_hotel_field(String value, String text) throws Throwable {
		selectDropDown(pom.getShp().getHotels(), text, value);
	}

	@When("^User chooses/select a particular \"([^\"]*)\" in the room type field$")
	public void user_chooses_select_a_particular_in_the_room_type_field(String roomtype) throws Throwable {
		inputToElement(pom.getShp().getRoom(), roomtype);
	}

	/*
	 * @When("^User chooses/select a particular location in the location field$")
	 * public void user_chooses_select_a_particular_location_in_the_location_field()
	 * throws Throwable { SearchHotelPage shp = new SearchHotelPage(driver);
	 * selectDropDown(shp.getLocation(), "value", "London"); }
	 * 
	 * @When("^User chooses/select a particular hotel in the hotel field$") public
	 * void user_chooses_select_a_particular_hotel_in_the_hotel_field() throws
	 * Throwable { SearchHotelPage shp = new SearchHotelPage(driver);
	 * selectDropDown(shp.getHotels(), "value", "Hotel Sunshine");
	 * 
	 * }
	 * 
	 * @When("^User chooses/select a particular room type in the room type field$")
	 * public void
	 * user_chooses_select_a_particular_room_type_in_the_room_type_field() throws
	 * Throwable { SearchHotelPage shp = new SearchHotelPage(driver);
	 * selectDropDown(shp.getRoom(), "value", "Double"); }
	 */
	@When("^User chooses/select a no\\.of rooms in the number of rooms field$")
	public void user_chooses_select_a_no_of_rooms_in_the_number_of_rooms_field() throws Throwable {
		selectDropDown(pom.getShp().getRoomnos(), "value", "4");
	}

	@When("^User enters the date in the check in date field$")
	public void user_enters_the_date_in_the_check_in_date_field() throws Throwable {
		inputToElement(pom.getShp().getCheckindate(), "10/01/2021");
	}

	@When("^User enters the date in the check out date field$")
	public void user_enters_the_date_in_the_check_out_date_field() throws Throwable {
		inputToElement(pom.getShp().getCheckoutdate(), "13/01/2021");
	}

	@When("^User chooses/select a no\\.of adult per room in the adult per room field$")
	public void user_chooses_select_a_no_of_adult_per_room_in_the_adult_per_room_field() throws Throwable {
		selectDropDown(pom.getShp().getAdults(), "value", "3");
	}

	@When("^User chooses/select a no\\.of children per room in the children per room field$")
	public void user_chooses_select_a_no_of_children_per_room_in_the_children_per_room_field() throws Throwable {
		selectDropDown(pom.getShp().getChilds(), "value", "0");

	}

	@When("^User clicks the search option$")
	public void user_clicks_the_search_option() throws Throwable {
		inputToClick(pom.getShp().getSubmit());
	}

	@Then("^User verifies whether the search Hotelpage navigates to the Select Hotelpage$")
	public void user_verifies_whether_the_search_Hotelpage_navigates_to_the_Select_Hotelpage() throws Throwable {
	}

	@When("^User can click the radio button in shortlisted hotel$")
	public void user_can_click_the_radio_button_in_shortlisted_hotel() throws Throwable {
		inputToClick(pom.getSehp().getRadiobutton());
	}

	@When("^User clicks the continue option$")
	public void user_clicks_the_continue_option() throws Throwable {
		inputToClick(pom.getSehp().getContinues());
	}

	@Then("^User verifies whether the Select Hotelpage navigates to the Book a Hotelpage$")
	public void user_verifies_whether_the_Select_Hotelpage_navigates_to_the_Book_a_Hotelpage() throws Throwable {
	}

	@When("^User enters the firstname in the First Name field$")
	public void user_enters_the_firstname_in_the_First_Name_field() throws Throwable {
		inputToElement(pom.getBhp().getFirstname(), "Manjunath");

	}

	@When("^User enters the lastname in the Last Name field$")
	public void user_enters_the_lastname_in_the_Last_Name_field() throws Throwable {
		inputToElement(pom.getBhp().getLastname(), "Rb");

	}

	@When("^User enters the billing address in the Billing Address field$")
	public void user_enters_the_billing_address_in_the_Billing_Address_field() throws Throwable {
		inputToElement(pom.getBhp().getAddress(), "Chennai");
	}

	@When("^User enters the Credit card number details in the Credit Card No field$")
	public void user_enters_the_Credit_card_number_details_in_the_Credit_Card_No_field() throws Throwable {
		inputToElement(pom.getBhp().getCreditcard(), "1234567890123456");

	}

	@When("^User chooses/select the credit card type in the Credit card type field$")
	public void user_chooses_select_the_credit_card_type_in_the_Credit_card_type_field() throws Throwable {
		selectDropDown(pom.getBhp().getCreditcardtype(), "value", "VISA");

	}

	@When("^User chooses/select the select month in the Expiry month field$")
	public void user_chooses_select_the_select_month_in_the_Expiry_month_field() throws Throwable {
		selectDropDown(pom.getBhp().getExpmonth(), "value", "4");

	}

	@When("^User chooses/select the select year in the Expiry year field$")
	public void user_chooses_select_the_select_year_in_the_Expiry_year_field() throws Throwable {
		selectDropDown(pom.getBhp().getExpyear(), "value", "2014");
	}

	@When("^User enters the CVV number in the CVV number field$")
	public void user_enters_the_CVV_number_in_the_CVV_number_field() throws Throwable {
		inputToElement(pom.getBhp().getCvv(), "123");
	}

	@When("^User clicks the Book Now option$")
	public void user_clicks_the_Book_Now_option() throws Throwable {
		inputToClick(pom.getBhp().getBook());
	}

	@Then("^User verifies the Book a Hotelpage navigates to Booking Confirmation page$")
	public void user_verifies_the_Book_a_Hotelpage_navigates_to_Booking_Confirmation_page() throws Throwable {
	}

	@When("^User clicks the logout option$")
	public void user_clicks_the_logout_option() throws Throwable {
		inputToClick(pom.getLop().getLogout());

	}

	@Then("^User verifes the Confirmation page navigates to successfully logout page$")
	public void user_verifes_the_Confirmation_page_navigates_to_successfully_logout_page() throws Throwable {
	}

}
