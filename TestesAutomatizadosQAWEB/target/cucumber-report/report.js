$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FiltrarPrecos.feature");
formatter.feature({
  "name": "Realizar o filtro de produtos por preco",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@filtrarPrecos"
    }
  ]
});
formatter.scenario({
  "name": "realizar o filtro de produtos por preco, do mais baixo para o mais alto",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@filtrarPrecos"
    },
    {
      "name": "@filtrarPrecoMenorParaMaior"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao de opcoes de filtro",
  "keyword": "Quando "
});
formatter.match({
  "location": "FiltrarSteps.euClicarNoBotaoDeOpcoesDeFiltro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao que representa a opcao de filtro do preco mais baixo para o mais alto",
  "keyword": "E "
});
formatter.match({
  "location": "FiltrarSteps.clicarNoBotaoQueRepresentaAOpcaoDeFiltroDoPrecoMaisBaixoParaOMaisAlto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina de produtos filtrando por preco, do mais baixo para o mais alto",
  "keyword": "Entao "
});
formatter.match({
  "location": "FiltrarSteps.oSistemaExibeAPaginaDeProdutosFiltrandoPorPrecoDoMaisBaixoParaOMaisAlto()"
});
formatter.result({
  "error_message": "java.lang.NumberFormatException: For input string: \"$7.99\"\r\n\tat sun.misc.FloatingDecimal.readJavaFormatString(Unknown Source)\r\n\tat sun.misc.FloatingDecimal.parseDouble(Unknown Source)\r\n\tat java.lang.Double.parseDouble(Unknown Source)\r\n\tat stepsDefinitions.FiltrarSteps.oSistemaExibeAPaginaDeProdutosFiltrandoPorPrecoDoMaisBaixoParaOMaisAlto(FiltrarSteps.java:28)\r\n\tat ✽.o sistema exibe a pagina de produtos filtrando por preco, do mais baixo para o mais alto(file:src/test/resources/features/FiltrarPrecos.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});