package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelPage {
	public static WebDriver driver;

	@FindBy(xpath = "//select[@id='location']")
	private WebElement location;

	@FindBy(id = "hotels")
	private WebElement hotels;

	@FindBy(id = "room_type")
	private WebElement room;

	@FindBy(id = "room_nos")
	private WebElement roomnos;

	@FindBy(id = "datepick_in")
	private WebElement checkindate;

	@FindBy(id = "datepick_out")
	private WebElement checkoutdate;

	@FindBy(id = "adult_room")
	private WebElement adults;

	@FindBy(id = "child_room")
	private WebElement childs;

	@FindBy(id = "Submit")
	private WebElement submit;

	public SearchHotelPage(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoom() {
		return room;
	}

	public WebElement getRoomnos() {
		return roomnos;
	}

	public WebElement getCheckindate() {
		return checkindate;
	}

	public WebElement getCheckoutdate() {
		return checkoutdate;
	}

	public WebElement getAdults() {
		return adults;
	}

	public WebElement getChilds() {
		return childs;
	}

	public WebElement getSubmit() {
		return submit;
	}

}
