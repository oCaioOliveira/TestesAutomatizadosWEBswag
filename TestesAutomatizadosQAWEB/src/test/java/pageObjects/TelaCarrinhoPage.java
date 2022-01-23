package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaCarrinhoPage {

	@FindBy(name = "remove-sauce-labs-backpack")
	private WebElement botaoRemove;

	@FindBy(name = "continue-shopping")
	private WebElement botaoContinueShopping;

	@FindBy(name = "checkout")
	private WebElement botaoCheckout;

	public void acionarBotaoRemove() throws InterruptedException {
		botaoRemove.click();
		Thread.sleep(1000);
	}

	public void acionarBotaoContinueShopping() {
		botaoContinueShopping.click();
	}

	public void acionarBotaoCheckout() {
		botaoCheckout.click();
	}
}
