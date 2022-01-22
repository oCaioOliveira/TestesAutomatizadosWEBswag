#language: pt
#encoding: UTF-8
@filtrarPrecos
Funcionalidade: Realizar o filtro de produtos por preco

  @filtrarPrecoMenorParaMaior
  Cenario: realizar o filtro de produtos por preco, do mais baixo para o mais alto
    Quando eu clicar no botao de opcoes de filtro
    E clicar no botao que representa a opcao de filtro do preco mais baixo para o mais alto
    Entao o sistema exibe a pagina de produtos filtrando por preco, do mais baixo para o mais alto
