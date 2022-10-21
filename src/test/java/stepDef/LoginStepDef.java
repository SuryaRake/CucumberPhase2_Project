package stepDef;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {
	WebDriver driver = Hooks.driver;

	@Given("I have already launched the application")
	public void i_have_already_launched_the_application() {
		// Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/"); // using the object and get function calling the url
		driver.manage().window().maximize();

		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);

	}

	/*
	 * @When("I enter correct username and password") public void
	 * i_enter_correct_username_and_password() { // Write code here that turns the
	 * phrase above into concrete actions WebElement UserName =
	 * driver.findElement(By.xpath("//input[@id='user-name']")); WebElement Password
	 * = driver.findElement(By.xpath("//input[@id='password']"));
	 * 
	 * 
	 * UserName.sendKeys("standard_user");
	 * 
	 * Password.sendKeys("secret_sauce");
	 * 
	 * 
	 * }
	 */

	@When("I enter the username as {string} and password as {string}")
	public void i_enter_username_as_and_password_as(String usrnam, String pswd) {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.xpath("//input[@id='user-name']"));
		WebElement Password = driver.findElement(By.xpath("//input[@id='password']"));

		UserName.sendKeys(usrnam);

		Password.sendKeys(pswd);

	}

	@When("I click on LoginButton")
	public void i_click_on_LoginButton() {
		// Write code here that turns the phrase above into concrete actions
		WebElement Login = driver.findElement(By.xpath("//input[@id='login-button']"));
		Login.click();
	}

	@Then("I  should land on the home page")
	public void i_should_land_on_the_home_page() {
		// Write code here that turns the phrase above into concrete actions

		WebElement title = driver.findElement(By.xpath("//span[@class=\"title\"]"));
		String Actual = title.getText();
		String expected = "PRODUCTS";

		// String Actualurl = driver.getCurrentUrl();
		// String ExpectedUrl = "https://www.saucedem.com/inventory.html";//wrong
		// expectedurl gave inorder to fail the test case so that screenshot will be
		// captured.
		Assert.assertEquals(Actual, expected);
		System.out.println("Executed test1");

	}

	@When("I enter incorrect username and password")
	public void i_enter_incorrect_username_and_password() {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.xpath("//input[@id='user-name']"));
		WebElement Password = driver.findElement(By.xpath("//input[@id='password']"));

		UserName.sendKeys("QWERTFV");

		Password.sendKeys("qwerty#123f");

	}

	@Then("I  should get the error message {string}")
	public void i_should_get_the_error_message(String error) {
		// Write code here that turns the phrase above into concrete actions
//String exptError = "Epic sadface: Username and password do not match any user in this service";

	WebElement errormsg = driver.findElement(By.xpath("//h3[@data-test=\"error\"]"));
	String ActualError = errormsg.getText();
	Assert.assertEquals(ActualError, error);
	System.out.println("Executed test2");
			

	}
}