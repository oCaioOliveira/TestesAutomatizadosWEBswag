package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaCarrinhoPage;
import pageObjects.TelaInicialPage;

public class RemoverItemCarrinhoSteps {

	@Quando("eu clicar no botao add to cart")
	public void euClicarNoBotaoAddToCart() throws InterruptedException {
		Na(TelaInicialPage.class).acionarBotaoAddToCart();
	}

	@Quando("clicar no botao remove")
	public void clicarNoBotaoRemove() throws InterruptedException {
		Na(TelaInicialPage.class).acionarBotaoRemove();
	}

	@Quando("clicar no botao carrinho que leva o usuario ate a pagina que mostra os itens no carrinho")
	public void clicarNoBotaoCarrinhoQueLevaOUsuarioAteAPaginaQueMostraOsItensNoCarrinho() {
		Na(TelaInicialPage.class).acionarBotaoCarrinho();
	}
    
	@Entao("o sistema deve retirar o item do meu carrinho direto do menu")
	public void oSistemaDeveRetirarOItemDoMeuCarrinhoDiretoDoMenu() {
		assertEquals("ADD TO CART", (driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).getText()));
	}
	
	@Entao("o sistema deve retirar o item do meu carrinho na pagina do carrinho")
	public void oSistemaDeveRetirarOItemDoMeuCarrinhoNaPaginaDoCarrinho() {
		Na(TelaCarrinhoPage.class).acionarBotaoContinueShopping();
		assertEquals("ADD TO CART", (driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).getText()));
//		assertTrue(driver.findElement(By.xpath("//*[@id=\"cart_contents_container\"]/div/div[1]/div[3]")).isDisplayed());
	}
}