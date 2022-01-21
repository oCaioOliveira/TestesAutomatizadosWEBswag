package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;

public class FiltrarSteps {

	@Quando("eu clicar no botao de opcoes de filtro")
	public void euClicarNoBotaoDeOpcoesDeFiltro() {
		Na(TelaInicialPage.class).acionarBotaoOpcoes();
	}

	@Quando("clicar no botao que representa a opcao de filtro do preco mais baixo para o mais alto")
	public void clicarNoBotaoQueRepresentaAOpcaoDeFiltroDoPrecoMaisBaixoParaOMaisAlto() {
		Na(TelaInicialPage.class).acionarBotaoLowToHigh();
	}

	@Entao("o sistema exibe a pagina de produtos filtrando por preco, do mais baixo para o mais alto")
	public void oSistemaExibeAPaginaDeProdutosFiltrandoPorPrecoDoMaisBaixoParaOMaisAlto() {
		assertTrue(Double.parseDouble(driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div/div/div[text()='7.99']")).getText()) 
				< Double.parseDouble(driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]/div/div/div[text()='49.99']")).getText()));
	}
	
}
