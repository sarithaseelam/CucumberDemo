package com.basic.MultiSD;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;

import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.util.concurrent.TimeUnit;


public class GoogleStepDef {
	
    WebDriver driver;
   
    
	@Given("^User need to be on google page$")
	public void user_need_to_be_on_google_page(){
		
		WebDriverManager.chromedriver().setup();
    	driver=new ChromeDriver();
		driver.get("https://www.google.com/");
	}
	
	@When("^User enters user \\\"([^\\\"]*)\\\" Search String$")
	public void user_enters_user_Search_String(String username) throws InterruptedException{
		
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS); 
		driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input")).sendKeys(username);
		Thread.sleep(1000);
	}
	
	//@Then("^close browser$")
	//public void close_browser() {
		
		//driver.quit();
		//driver=null;
	//}
	

}
