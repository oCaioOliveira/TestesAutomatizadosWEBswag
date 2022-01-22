package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjects.LoginPage;
import pageObjects.TelaInicialPage;
import pageObjects.TelaCarrinhoPage;
import pageObjects.TelaCheckoutPage;


public class Hooks {

	@Before(value = "@filtrarPrecos and @removerItens")
	public void SetUp() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
	}
	
	@Before(value = "@verificarPreenchimentoObrigatorio")
	public void funcionalidadeAdicionarItensCarrinho() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
		Na(TelaInicialPage.class).adicionarProdutoCarrinhoIrCarrinho();
		Na(TelaCarrinhoPage.class).acionarBotaoCheckout();
	}
	
	@Before(value = "@cancelarAntesFinalizarYourInformation")
	public void funcionalidadeCancelarAntesFinalizarInformation() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
		Na(TelaInicialPage.class).adicionarProdutoCarrinhoIrCarrinho();
		Na(TelaCarrinhoPage.class).acionarBotaoCheckout();
	}
	
	@Before(value = "@cancelarAntesFinalizarOverview")
	public void funcionalidadeCancelarAntesFinalizarOverview() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
		Na(TelaInicialPage.class).adicionarProdutoCarrinhoIrCarrinho();
		Na(TelaCarrinhoPage.class).acionarBotaoCheckout();
		Na(TelaCheckoutPage.class).realizarCheckout("Tadeu", "Moraes", "7213090");
	}
	
	@Before(value = "@login")
	public void funcionalidadeLogin() {
		acessarSistema();
	}
	
	@After()
	public void tearDown() throws Exception {
		driver.quit();
	}
	
}
