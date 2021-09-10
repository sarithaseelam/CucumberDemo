package com.basic.FirstFeatureFile;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class MyFirstStepDef {
	
    WebDriver driver;
   
    
	@Given("^User need to be on Facebook login page$")
	public void user_need_to_be_on_Facebook_login_page(){
		
		WebDriverManager.chromedriver().setup();
    	driver=new ChromeDriver();
		driver.get("https://www.facebook.com/");
	}
	
	@When("^User enters user first Name$")
	public void user_enters_user_first_name(){
		
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS); 
		driver.findElement(By.name("firstname")).sendKeys("David");
	}
	
	
	
	@Then("^User checks user first name is present$")
	public void user_checks_user_first_name_is_present(){
		
		String userNameActual=driver.findElement(By.name("firstname")).getAttribute("value");
		Assert.assertEquals("David", userNameActual);
		driver.quit();
		
	}

}
