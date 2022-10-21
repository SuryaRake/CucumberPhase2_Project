package stepDef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomePageTestDef {

	WebDriver driver = Hooks.driver;

	@Given("I entered valid username and password")
	public void i_entered_valid_username_and_password() {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.xpath("//input[@id='user-name']"));
		WebElement Password = driver.findElement(By.xpath("//input[@id='password']"));
		UserName.sendKeys("standard_user");
		Password.sendKeys("secret_sauce");
	}

	@When("I click on Add to Cart of the {string}")
	public void i_click_on_Add_to_Cart_of_the(String product) {
		// Write code here that turns the phrase above into concrete actions
		WebElement selectedProduct = driver.findElement(By.xpath("//div[text()='" + product + "']"));
		selectedProduct.click();

		WebElement addToCart = driver.findElement(By.xpath("//button[text()='Add to cart']"));
		addToCart.click();
	}

	@Then("{string} should be added to the cart")
	public void should_be_added_to_the_cart(String product) {
		// Write code here that turns the phrase above into concrete actions
		WebElement shpngCart = driver.findElement(By.xpath("//a[@class=\"shopping_cart_link\"]"));
		shpngCart.click();

		WebElement CartQty = driver.findElement(By.xpath("//div[@class=\"cart_quantity\"]"));
		System.out.println(CartQty.getText());

		WebElement addedPrdt = driver.findElement(By.xpath("//div[@class=\"inventory_item_name\"]"));
		System.out.println(addedPrdt.getText());
		String actualProd = addedPrdt.getText();
		Assert.assertEquals(product, actualProd);

	}

}
