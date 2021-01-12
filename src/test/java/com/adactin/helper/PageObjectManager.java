package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookHotelPage;
import com.adactin.pom.LoginPage;
import com.adactin.pom.LogoutPage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.pom.SelectHotelPage;

public class PageObjectManager {
	public static WebDriver driver;

	private BookHotelPage bhp;
	private LoginPage lp;
	private LogoutPage lop;
	private SearchHotelPage shp;
	private SelectHotelPage sehp;

	public PageObjectManager(WebDriver ldriver) {
		this.driver = ldriver;

	}

	public BookHotelPage getBhp() {
		bhp = new BookHotelPage(driver);
		return bhp;
	}

	public LoginPage getLp() {
		lp = new LoginPage(driver);
		return lp;
	}

	public LogoutPage getLop() {
		lop = new LogoutPage(driver);
		return lop;
	}

	public SearchHotelPage getShp() {
		shp = new SearchHotelPage(driver);
		return shp;
	}

	public SelectHotelPage getSehp() {
		sehp = new SelectHotelPage(driver);
		return sehp;
	}

}
