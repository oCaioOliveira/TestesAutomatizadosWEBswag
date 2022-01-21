package pageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage {

	@FindBy(xpath = "//*[@id=\"header_container\"]/div[2]/div[2]/span/select")
	private WebElement botaoOpcoes;
	
	@FindBy(xpath = "/html/body/div/div/div/div[1]/div[2]/div[2]/span/select/option[3]")
	private WebElement botaoLowToHigh;
	
	public void acionarBotaoOpcoes() {
		botaoOpcoes.click();
	}
	
	public void acionarBotaoLowToHigh() {
		botaoLowToHigh.click();
	}
	
}
