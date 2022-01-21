#language: pt
#encoding: UTF-8

@login
Funcionalidade: Fazer login

	@loginSucesso
	Cenario: realizar login
    Quando eu informar o usuario "standard_user"
    E informar a senha "secret_sauce"
    E clicar no botao login
    Entao o sistema exibe a pagina de produtos
    
    