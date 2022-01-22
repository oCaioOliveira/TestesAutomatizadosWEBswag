package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage {

	@FindBy(xpath = "//*[@id=\"header_container\"]/div[2]/div[2]/span/select")
	private WebElement botaoOpcoes;
	
	@FindBy(xpath = "/html/body/div/div/div/div[1]/div[2]/div[2]/span/select/option[3]")
	private WebElement botaoLowToHigh;
	
	@FindBy(name = "add-to-cart-sauce-labs-backpack")
	private WebElement botaoAddToCart;

	@FindBy(name = "remove-sauce-labs-backpack")
	private WebElement botaoRemove;

	@FindBy(xpath = "/html/body/div/div/div/div[1]/div[1]/div[3]/a")
	private WebElement botaoCarrinho;

	public void acionarBotaoOpcoes() {
		botaoOpcoes.click();
	}
	
	public void acionarBotaoLowToHigh() {
		botaoLowToHigh.click();
	}

	public void acionarBotaoAddToCart() {
		botaoAddToCart.click();
	}

	public void acionarBotaoCarrinho() {
		botaoCarrinho.click();
	}

	public void acionarBotaoRemove() {
		botaoRemove.click();
	}

	public void adicionarProdutoCarrinhoIrCarrinho() {
		acionarBotaoAddToCart();
		acionarBotaoCarrinho();
	}
}
