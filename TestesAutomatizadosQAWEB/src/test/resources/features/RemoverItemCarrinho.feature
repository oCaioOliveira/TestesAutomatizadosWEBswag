#language: pt
#encoding: UTF-8
@removerItens
Funcionalidade: Remover itens do carrinho antes de fazer checkout

  @removerItensMenu
  Cenario: remover itens da pagina do menu
    Quando eu clicar no botao add to cart
    E clicar no botao remove
    Entao o sistema deve retirar o item do meu carrinho direto do menu

  @removerItensCarrinho
  Cenario: remover itens da pagina do carrinho
    Quando eu clicar no botao add to cart
    E clicar no botao carrinho que leva o usuario ate a pagina que mostra os itens no carrinho
    E clicar no botao remove
    Entao o sistema deve retirar o item do meu carrinho na pagina do carrinho
