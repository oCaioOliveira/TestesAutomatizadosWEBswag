package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjects.LoginPage;
import pageObjects.TelaInicialPage;
import pageObjects.TelaCarrinhoPage;
import pageObjects.TelaCheckoutPage;


public class Hooks {

	@Before(value = "@removerItens")
	public void FuncionalidadeLogin() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
	}
	
	@Before(value = "@filtrarPrecos")
	public void FuncionalidadeLogin2() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
	}
	
	@Before(value = "@verificarPreenchimentoObrigatorio")
	public void funcionalidadeAdicionarItensCarrinho() throws InterruptedException {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
		Na(TelaInicialPage.class).adicionarProdutoCarrinhoIrCarrinho();
		Na(TelaCarrinhoPage.class).acionarBotaoCheckout();
	}
	
	@Before(value = "@cancelarAntesFinalizarYourInformation")
	public void funcionalidadeCancelarAntesFinalizarInformation() throws InterruptedException {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
		Na(TelaInicialPage.class).adicionarProdutoCarrinhoIrCarrinho();
		Na(TelaCarrinhoPage.class).acionarBotaoCheckout();
	}
	
	@Before(value = "@cancelarAntesFinalizarOverview")
	public void funcionalidadeCancelarAntesFinalizarOverview() throws InterruptedException {
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
	public void tearDown(Scenario scenario) throws Exception {
		capturarTela(scenario);
		driver.quit();
	}
	
}
