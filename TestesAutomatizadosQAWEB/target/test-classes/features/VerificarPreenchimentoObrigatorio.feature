#language: pt
#encoding: UTF-8
@verificarPreenchimentoObrigatorio
Funcionalidade: Verificar se cada um dos campos de preenchimento eh obrigatorio

  @verificarPreenchimentoObrigatorioZip
  Cenario: Verificar se o campo de preenchimento zip eh obrigatorio
    Quando eu informar o first name "Tadeu"
    E informar o last name "Moraes"
    E clicar no botao continue
    Entao o sistema deve mostrar uma mensagem de erro pedindo o campo zip

  @verificarPreenchimentoObrigatorioFirstName
  Cenario: Verificar se o campo de preenchimento first name eh obrigatorio
    Quando informar o last name "Moraes"
    E informar o campo zip "7213090"
    E clicar no botao continue
    Entao o sistema deve mostrar uma mensagem de erro pedindo o campo first name

  @verificarPreenchimentoObrigatorioLastName
  Cenario: Verificar se o campo de preenchimento last name eh obrigatorio
    Quando eu informar o first name "Moraes"
    E informar o campo zip "7213090"
    E clicar no botao continue
    Entao o sistema deve mostrar uma mensagem de erro pedindo o campo last name
