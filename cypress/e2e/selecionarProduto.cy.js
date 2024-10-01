import 'cypress-xpath'

describe('Selecionar Produtos', () => {
  // Atributos
  const massa = require('../fixtures/massa')
  beforeEach(() => {
    cy.visit('/')                       // abre o browser na url informada em cypress.config.js
  })// Fim do before

  it('Selecionar Sauce Labs Backpack', () => {

    cy.title()    //
      .should('eq', 'Swag Labs')

    //Realizar login
    cy.get('input[data-test="username"]')
      .type('standard_user')          // preenche o login

    cy.get('#password')
      .type('secret_sauce')           // preenche a senha

    cy.get('input[name="login-button"]')
      .click()                        //Clica no botão login

    // carregar a pagina de inventário
    cy.get('span.title')
      .should('have.text', 'Products')   // verificar se tem o texto Produtos

    cy.get('img[alt="Sauce Labs Backpack"]')
      .click()                           // clica na imagem do produto mochila

    // carregar a pagina do item do inventário
    // apenas para demostranas como fariamos com xpath absoluto
    // verifica se o elemento via Xpath contem o texto back to products
    cy.xpath('/html/body/div/div/div/div[1]/div[2]/div/button')
      .should('have.text', 'Back to products')

    cy.get('div.inventory_details_name.large_size')
      .should('have.text', 'Sauce Labs Backpack')   // verificar titulo

    cy.get('div.inventory_details_price')
      .should('have.text', '$29.99')              // verificar preço

    cy.get('#add-to-cart')
      .click()  // clica no botão Adicionar no Carrinho

    cy.get('a.shopping_cart_link')
      .should('have.text', '1') // verifica se no carrinho exibe o nº 1
      .click()                  // Clicar no carrinho

    cy.get('span.title')
      .should('have.text', 'Your Cart')      // verifica o titulo da seção

    cy.get('div.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack')  // verifica o titulo do produto

    cy.get('div.inventory_item_price')
      .should('have.text', '$29.99')               // verifica o preço do produto

    cy.get('div.cart_quantity')
      .should('have.text', '1')                    // verifica a quantidade
  }) // Fim do it


  /// 2 it
  massa.array.forEach(({ username, productName, productPrice }) => {
    it(`Selecionar ${productName} - Usuario: ${username}`, () => {

      cy.title()          // verifica se o título da página é Swag Labs
        .should('eq', 'Swag Labs')

      //Realizar login
      cy.get('input[data-test="username"]')
        .type(username)        // preenche o login

      cy.get('#password')
        .type('secret_sauce')           // preenche a senha

      cy.get('input[name="login-button"]')
        .click()                        //Clica no botão login

      // carregar a pagina de inventário
      cy.get('span.title')
        .should('have.text', 'Products')   // verificar se tem o texto Produtos

      cy.get(`img[alt="${productName}"]`)
        .click()                           // clica na imagem do produto mochila

      // carregar a pagina do item do inventário
      // apenas para demostranas como fariamos com xpath absoluto
      // verifica se o elemento via Xpath contem o texto back to products
      cy.xpath('/html/body/div/div/div/div[1]/div[2]/div/button')
        .should('have.text', 'Back to products')


      cy.get('div.inventory_details_name.large_size') // Verifica titulo
        .should('have.text', productName)

      cy.get('div.inventory_details_price') // Verifica preço
        .should('have.text', productPrice)

      cy.get('#add-to-cart')
        .click()  // clica no botão Adicionar no Carrinho

      cy.get('a.shopping_cart_link')
        .should('have.text', '1')                    // verifica se no carrinho exibe o nº 1
        .click()                                    // Clicar no carrinho

      cy.get('span.title')
        .should('have.text', 'Your Cart')          // verifica o titulo da seção

      cy.get('div.inventory_item_name')
        .should('have.text', productName)  // verifica o titulo do produto

      cy.get('div.inventory_item_price')
        .should('have.text', productPrice)               // verifica o preço do produto

      cy.get('div.cart_quantity')
        .should('have.text', '1')                    // verifica a quantidade
    }) // fim do forEach
  }) // Fim do it

  /*  afterEach(() => {
      cy.get('#remove-sauce-labs-backpack')   // remove o produto do carrinho
        .click()
  
      cy.get('#react-burger-menu-btn')
        .click()                            // clica no icone 3 traços
  
      cy.get('#logout_sidebar_link', { timeout: 10000 })
        .should('be.visible')   // esperar até que o elemento seja visivel
        //  .should('not.be.disabled') // esperar até que ele seja clicável
        .click()                            // clica na opção logout
  
      cy.get('#login-button')          // quando usa a # é ID
        .should('be.visible')   // verificar se está novamente na tela de login
    }) // termina o afterEach
  */

})//Fim do Describe