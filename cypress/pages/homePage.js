export class Homepage{
    navigate(){
        cy.visit('https://allovercommerce.com/')
        return this;
    }
    singInButonu(){
        cy.get('.login > .w-icon-account').click()

    }
    
}