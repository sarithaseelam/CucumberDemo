package com.basic.tagsSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

		@RunWith(Cucumber.class)
		@CucumberOptions(
				
				monochrome=true,
				//dryRun=true,
				
				//tags= {"@Important"},//All Scenarios executed in feature file
				tags= {"@Smoke"},//Only tags with smoke
				//tags= {"@Smoke","@Regression"},//AND condition
				//tags= {"@Smoke,@Regression"},//OR condition
				features={"src/test/resources/com/basic/TagsFF/"},
				glue= {"com/basic/tagsSD/"},
				plugin= {"pretty",
						 "html:target/cucumber-htmlreport",
						 "json:target/cucumber-report.json",
						
					}
				)


		public class RunTagsTest {

}
