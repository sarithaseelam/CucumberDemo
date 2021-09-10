package com.basic.MultiSD;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.util.concurrent.TimeUnit;


public class DemoStepDef {
	
    WebDriver driver;
   
    
	@Given("^User need to be on Demo Site$")
	public void user_need_to_be_on_Demo_Site_page(){
		
		WebDriverManager.chromedriver().setup();
    	driver=new ChromeDriver();
		driver.get("http://demo.automationtesting.in/Register.html");
	}
	
	@When("^User enters user \\\"([^\\\"]*)\\\" initial Name$")
	public void user_enters_user_first_Name(String username) throws InterruptedException{
		
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS); 
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[1]/div[1]/input")).sendKeys(username);
		Thread.sleep(1000);
	}
	
	@When("^User enters user \\\"([^\\\"]*)\\\" surname$")
	public void user_enters_user_last_Name(String surName) throws InterruptedException{
		
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS); 
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[1]/div[2]/input")).sendKeys(surName);
		Thread.sleep(1000);
	}
	//@Then("^close browser$")
	//public void close_browser() {
		
		//driver.quit();
		//driver=null;
	//}
	

}
