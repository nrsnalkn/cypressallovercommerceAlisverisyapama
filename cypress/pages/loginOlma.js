export class LoginOlma {
    validUserName() {
      return cy.get('#username')
         
    }
    validPassword() {
     return  cy.get('#password')
        
    }
    loginButon() {
       return  cy.get('#signin > .woocommerce-form > .woocommerce-button')
    }
    siteyeGirisDogrulama(){
      cy.get('.login > span').should('be.visible')
  }
} 