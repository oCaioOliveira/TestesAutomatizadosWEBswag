$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CancelarAntesFinalizar.feature");
formatter.feature({
  "name": "Cancelar a compra antes de finalizar",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cancelarAntesFinalizarCheckout"
    }
  ]
});
formatter.scenario({
  "name": "cancelar a compra antes de finalizar na pagina de checkout your information",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cancelarAntesFinalizarCheckout"
    },
    {
      "name": "@cancelarAntesFinalizarYourInformation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao cancelar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CanelarAntesFinalizar.euClicarNoBotaoCancelar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve me retornar para a pagina do meu carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "CanelarAntesFinalizar.oSistemaDeveMeRetornarParaAPaginaDoMeuCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "cancelar a compra antes de finalizar na pagina de checkout overview",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cancelarAntesFinalizarCheckout"
    },
    {
      "name": "@cancelarAntesFinalizarOverview"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao cancelar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CanelarAntesFinalizar.euClicarNoBotaoCancelar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve me retornar para a pagina inicial onde encontramos os produtos",
  "keyword": "Entao "
});
formatter.match({
  "location": "CanelarAntesFinalizar.oSistemaDeveMeRetornarParaAPaginaInicialOndeEncontramosOsProdutos()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});