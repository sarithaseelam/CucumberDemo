package com.basic.backgroundSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

		@RunWith(Cucumber.class)
		@CucumberOptions(
				
				monochrome=true,
				//dryRun=true,
				features={"src/test/resources/com/basic/BackgroundFF/"},
				glue= {"com/basic/backgroundSD/"},
				plugin= {"pretty",
						 "html:target/cucumber-htmlreport",
						 "json:target/cucumber-report.json",
						"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"
						
					}
				)


		public class RunMyBackgroundTest {

}
