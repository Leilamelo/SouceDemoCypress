describe('Selecionar Produtos', () => {
  // Atributos

  beforeEach(() => {
    cy.visit('/')                       // abre o browser na url informada em cypress.config.js
    it('Selecionar Sauce Labs Backpack', () => {

      cy.title()    //
        .should('eq', 'Swag Labs')

      //Realizar login
      cy.get('input[data-test="username"]')
        .type('standard_user')          // preenche o login

      cy.get('#password'
        .type('secret_sauce')           // preenche a senha
      )

      cy.get('input[name="login-button"]'
        .click()                        //Clica no botão login
      )

      // carregar a pagina de inventário
      cy.get('span.title')
        .should('have.text', 'Products')   // verificar se tem o texto Produtos

      cy.get('img[alt="Sauce Labs Backpack"]')
        .click()                           // clica na imagem do produto mochila

      // carregar a pagina do item do inventário
      // apenas para demostranas como fariamos com xpath absoluto
      // verifica se o elemento via Xpath contem o texto back to products
      cy.xpath('/html/body/div/div/div/div[2]/div[2]/div/button')
        .should('have.text', 'Back to products')

      cy.get('div.inventory_details_name.large_size')
        .should('have.text', 'Sauce Labs Backpack')   // verificar titulo

      cy.get('div.inventory_details_price')
        .should('have.text', '$29,99')              // verificar preço

      cy.get('#add-to-cart')
        .click()  // clica no botão Adicionar no Carrinho

      cy.get('a.shopping_cart_link')
        .should('have.text', '1') // verifica se no carrinho exibe o nº 1
    })

  })// Fim do before
})//Fim do Describe