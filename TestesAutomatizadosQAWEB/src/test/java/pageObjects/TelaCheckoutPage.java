package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaCheckoutPage {

	@FindBy(name = "firstName")
	private WebElement campoFirstName;

	@FindBy(name = "lastName")
	private WebElement campoLastName;

	@FindBy(name = "postalCode")
	private WebElement campoZip;

	@FindBy(name = "continue")
	private WebElement botaoContinue;
	
	@FindBy(name = "cancel")
	private WebElement botaoCancel;

	public void informarCampoFirstName(String nome) {
		campoFirstName.sendKeys(nome);
	}

	public void informarCampoLastName(String nome) {
		campoLastName.sendKeys(nome);
	}

	public void informarCampoZip(String zip) {
		campoZip.sendKeys(zip);
	}

	public void acionarBotaoContinue() {
		botaoContinue.click();
	}
	
	public void acionarBotaoCancel() {
		botaoCancel.click();
	}
	
	public void realizarCheckout(String firstName, String lastName, String zip) {
		informarCampoFirstName(firstName);
		informarCampoLastName(lastName);
		informarCampoZip(zip);
		acionarBotaoContinue();
	}
}
