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
formatter.embedding("image/png", "embedded0.png", null);
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
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FiltrarPrecos.feature");
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
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Fazer login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "realizar login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o usuario \"standard_user\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.euInformarOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"secret_sauce\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.informarASenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clicarNoBotaoLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a pagina de produtos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaExibeAPaginaDeProdutos()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/RemoverItemCarrinho.feature");
formatter.feature({
  "name": "Remover itens do carrinho antes de fazer checkout",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@removerItens"
    }
  ]
});
formatter.scenario({
  "name": "remover itens da pagina do menu",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@removerItens"
    },
    {
      "name": "@removerItensMenu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart",
  "keyword": "Quando "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.euClicarNoBotaoAddToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao remove",
  "keyword": "E "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.clicarNoBotaoRemove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retirar o item do meu carrinho direto do menu",
  "keyword": "Entao "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.oSistemaDeveRetirarOItemDoMeuCarrinhoDiretoDoMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "remover itens da pagina do carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@removerItens"
    },
    {
      "name": "@removerItensCarrinho"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao add to cart",
  "keyword": "Quando "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.euClicarNoBotaoAddToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao carrinho que leva o usuario ate a pagina que mostra os itens no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.clicarNoBotaoCarrinhoQueLevaOUsuarioAteAPaginaQueMostraOsItensNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao remove",
  "keyword": "E "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.clicarNoBotaoRemove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve retirar o item do meu carrinho na pagina do carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "RemoverItemCarrinhoSteps.oSistemaDeveRetirarOItemDoMeuCarrinhoNaPaginaDoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/VerificarPreenchimentoObrigatorio.feature");
formatter.feature({
  "name": "Verificar se cada um dos campos de preenchimento eh obrigatorio",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@verificarPreenchimentoObrigatorio"
    }
  ]
});
formatter.scenario({
  "name": "Verificar se o campo de preenchimento zip eh obrigatorio",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@verificarPreenchimentoObrigatorio"
    },
    {
      "name": "@verificarPreenchimentoObrigatorioZip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o first name \"Tadeu\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.euInformarOFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o last name \"Moraes\"",
  "keyword": "E "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.informarOLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.clicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve mostrar uma mensagem de erro pedindo o campo zip",
  "keyword": "Entao "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.oSistemaDeveMostrarUmaMensagemDeErroPedindoOCampoZip()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar se o campo de preenchimento first name eh obrigatorio",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@verificarPreenchimentoObrigatorio"
    },
    {
      "name": "@verificarPreenchimentoObrigatorioFirstName"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "informar o last name \"Moraes\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.informarOLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo zip \"7213090\"",
  "keyword": "E "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.informarOCampoZip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.clicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve mostrar uma mensagem de erro pedindo o campo first name",
  "keyword": "Entao "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.oSistemaDeveMostrarUmaMensagemDeErroPedindoOCampoFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verificar se o campo de preenchimento last name eh obrigatorio",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@verificarPreenchimentoObrigatorio"
    },
    {
      "name": "@verificarPreenchimentoObrigatorioLastName"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu informar o first name \"Moraes\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.euInformarOFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o campo zip \"7213090\"",
  "keyword": "E "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.informarOCampoZip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.clicarNoBotaoContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema deve mostrar uma mensagem de erro pedindo o campo last name",
  "keyword": "Entao "
});
formatter.match({
  "location": "VerificarPreenchimentoObrigatorioSteps.oSistemaDeveMostrarUmaMensagemDeErroPedindoOCampoLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
});