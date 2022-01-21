package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjects.LoginPage;

public class Hooks {

	@Before(value = "not @login")
	public void SetUp() {
		acessarSistema();
		Na(LoginPage.class).realizarLogin("standard_user", "secret_sauce");
	}
	
	@Before(value = "@login")
	public void funcionalidadeLogin() {
		acessarSistema();
	}
	
	@After()
	public void tearDown() throws Exception {
//		driver.quit();
	}
	
}
