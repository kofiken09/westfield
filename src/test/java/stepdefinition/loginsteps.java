package stepdefinition;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class loginsteps {

    public static WebDriver driver;

    @Given("^I am on angemoi website$")
    public void i_am_on_angemoi_website() throws Throwable {
        System.setProperty("webdriver.gecko.driver","C:\\Users\\chloe\\IdeaProjects\\covid\\drivers\\geckodriver.exe");

        driver = new FirefoxDriver();
        driver.get("https://www.angemoi.com/");
    }

    @When("^I click on \"([^\"]*)\" select my \"([^\"]*)\"$")
    public void i_click_on_select_my(String arg1, String arg2) throws Throwable {
        driver.findElement(By.cssSelector("div.medium-down--one-half:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > span:nth-child(2)")).click();
        driver.findElement(By.cssSelector(".d-swatch > label:nth-child(1)")).click();
    }

    @When("^my \"([^\"]*)\" and click \"([^\"]*)\"$")
    public void my_and_click(String arg1, String arg2) throws Throwable {
        driver.findElement(By.cssSelector("#product_form_5406275797146 > div:nth-child(4) > div:nth-child(2) > div:nth-child(5) > label:nth-child(2)")).click();
        driver.findElement(By.cssSelector("#product_form_5406275797146 > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)")).click();
    }

    @Then("^I was able to click on \"([^\"]*)\" to pay$")
    public void i_was_able_to_click_on_to_pay(String arg1) throws Throwable {
        driver.findElement(By.id("paypal-animation-container")).click();
    }


}
