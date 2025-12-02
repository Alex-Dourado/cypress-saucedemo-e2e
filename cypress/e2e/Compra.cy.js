
// Importa a classe da página inicial (Page Object)
import TelaInicial from '../support/Pagina'

// Descreve o conjunto de testes da funcionalidade de compra
describe('Realizar Compra', () => {

  // Caso de teste: acessar a página inicial
  it('Pagina Inicial', () => {

    // Acessa o site principal
    cy.visit('https://www.saucedemo.com/')

     // Chama o método Acesso() da classe TelaInicial
    TelaInicial.Acesso()
    
  })

})

