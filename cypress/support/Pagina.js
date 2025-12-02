
// Classe que representa a página inicial (Page Object)
class TelaInicial {

      // Método que executa todo o fluxo da página
    Acesso() {

      //Login e Senha//
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")

    // Clica no botão de login
    cy.get('[data-test="login-button"]').click()

    // -------- ADICIONANDO UM PRODUTO --------
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click

    // Localiza o item pelo título "Bike" usando contains
    // Depois clica no link do item
    cy.contains('bike')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]')
    .click()  

    // Valida se o logo da página está correto
    cy.get('.app_logo').should('have.text','Swag Labs')

    // Valida se o botão agora mostra "Remove"
    cy.get('[data-test="remove"]').should('have.text','Remove')
    }
}
// Exporta uma instância da classe para ser usada nos testes
export default new TelaInicial();