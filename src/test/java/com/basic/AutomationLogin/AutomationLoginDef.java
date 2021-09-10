package com.basic.AutomationLogin;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class AutomationLoginDef {
	
    static WebDriver driver;
   
    
	@Given("^User need to be on Facebook login page$")
	public void user_need_to_be_on_Facebook_login_page(){
		
		WebDriverManager.chromedriver().setup();
    	driver=new ChromeDriver();
		driver.get("https://www.facebook.com/");
	}
	
	@When("^User enters user \"([^\"]*)\" first Name$")
	public void user_enters_user_first_name(String username){
		
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS); 
		driver.findElement(By.name("firstname")).sendKeys(username);
	}
	
	
	
	@Then("^User checks user \"([^\"]*)\" first name is present$")
	public void user_checks_user_first_name_is_present(String username) throws InterruptedException{
		
		String userNameActual=driver.findElement(By.name("firstname")).getAttribute("value");
		Assert.assertEquals(username, userNameActual);
		Thread.sleep(1000);
		
	}
	
	@And("^User enters user \"([^\"]*)\" last Name$")
	public void user_checks_user_last_name_is_present(String surname) throws InterruptedException{
		
		driver.findElement(By.name("lastname")).sendKeys(surname);
		Thread.sleep(1000);
		
	}
	
	@But("^User Mobile Field should be Blank$")
	public void user_mobile_field_is_blank() throws InterruptedException{
		
		String mobileActual=driver.findElement(By.name("reg_email__")).getAttribute("value");
		Assert.assertEquals("", mobileActual);
		Thread.sleep(1000);
		
	}
	
	@Then ("User Enter Name$")
	
	public void user_enter_name() throws InterruptedException{
		
		driver.findElement(By.name("email")).sendKeys("");
		
		
		Thread.sleep(1000);
	}
	
	@Then ("^check user name is entered or not$")
	
	public void user_enter_name_is_entered() throws InterruptedException{
		
		String abc=driver.findElement(By.name("email")).getAttribute("value");
		if(abc.isEmpty()) {
			
			System.out.println("Enter valid value");
		}
		
		
		
		Thread.sleep(1000);
	}
	
	
	@Then("^User checks password$")
	
	public void user_checks_password() throws InterruptedException{
		
		driver.findElement(By.name("pass")).sendKeys("pass");
		Thread.sleep(1000);
		
	}
	
	//@Then("^User is able to login successfully$")
	
	//public static boolean user_is_able_to_login() throws InterruptedException{
		
		//if(driver.findElement(By.name("login")).isDisplayed())
		//{
		//return(true);
		
		//}
		//else return(false);
		
		//}
		
		
		
	
	
	@Then("^close browser$")
	public void close_browser() {
		
		driver.quit();
		driver=null;
	}
	
	

}
