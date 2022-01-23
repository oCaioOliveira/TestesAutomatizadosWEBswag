package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaCheckoutPage;

public class VerificarPreenchimentoObrigatorioSteps {

	@Quando("eu informar o first name {string}")
	public void euInformarOFirstName(String string) {
		Na(TelaCheckoutPage.class).informarCampoFirstName(string);
	}

	@Quando("informar o last name {string}")
	public void informarOLastName(String string) {
		Na(TelaCheckoutPage.class).informarCampoLastName(string);
	}

	@Quando("informar o campo zip {string}")
	public void informarOCampoZip(String string) {
		Na(TelaCheckoutPage.class).informarCampoZip(string);
	}

	@Quando("clicar no botao continue")
	public void clicarNoBotaoContinue() {
		Na(TelaCheckoutPage.class).acionarBotaoContinue();
	}

	@Entao("o sistema deve mostrar uma mensagem de erro pedindo o campo zip")
	public void oSistemaDeveMostrarUmaMensagemDeErroPedindoOCampoZip() {
		assertEquals("Error: Postal Code is required", (driver
				.findElement(By.xpath("//div/h3[text()='Error: Postal Code is required']")).getText()));
	}

	@Entao("o sistema deve mostrar uma mensagem de erro pedindo o campo first name")
	public void oSistemaDeveMostrarUmaMensagemDeErroPedindoOCampoFirstName() {
		assertEquals("Error: First Name is required", (driver
				.findElement(By.xpath("//div/h3[text()='Error: First Name is required']")).getText()));
	}

	@Entao("o sistema deve mostrar uma mensagem de erro pedindo o campo last name")
	public void oSistemaDeveMostrarUmaMensagemDeErroPedindoOCampoLastName() {
		assertEquals("Error: Last Name is required", (driver
				.findElement(By.xpath("//div/h3[text()='Error: Last Name is required']")).getText()));
	}
}