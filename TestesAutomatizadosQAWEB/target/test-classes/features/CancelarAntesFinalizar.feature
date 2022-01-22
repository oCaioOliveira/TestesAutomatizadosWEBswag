#language: pt
#encoding: UTF-8
@cancelarAntesFinalizarCheckout
Funcionalidade: Cancelar a compra antes de finalizar

  @cancelarAntesFinalizarYourInformation
  Cenario: cancelar a compra antes de finalizar na pagina de checkout your information
    Quando eu clicar no botao cancelar
    Entao o sistema deve me retornar para a pagina do meu carrinho 

  @cancelarAntesFinalizarOverview
  Cenario: cancelar a compra antes de finalizar na pagina de checkout overview
    Quando eu clicar no botao cancelar
    Entao o sistema deve me retornar para a pagina inicial onde encontramos os produtos
