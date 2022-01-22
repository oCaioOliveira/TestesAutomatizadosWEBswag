package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaCheckoutPage;

public class CanelarAntesFinalizar {

	@Quando("eu clicar no botao cancelar")
	public void euClicarNoBotaoCancelar() {
		Na(TelaCheckoutPage.class).acionarBotaoCancel();
	}

	@Entao("o sistema deve me retornar para a pagina do meu carrinho")
	public void oSistemaDeveMeRetornarParaAPaginaDoMeuCarrinho() {
		assertEquals("YOUR CART", driver.findElement(By.xpath("//div/span[text()='Your Cart']")).getText());
	}

	@Entao("o sistema deve me retornar para a pagina inicial onde encontramos os produtos")
	public void oSistemaDeveMeRetornarParaAPaginaInicialOndeEncontramosOsProdutos() {
		assertEquals("PRODUCTS", driver.findElement(By.xpath("//span[text()='Products']")).getText());
	}

	
}
