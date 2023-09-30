// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//anasayfaya gitme
Cypress.Commands.add('home', () => {


    cy.visit('https://allovercommerce.com/')

    cy.get('.login > .w-icon-account').click()
    cy.get('.login > span').should('be.visible')
})

//login olma
Cypress.Commands.add('login', (username, password) => {

    cy.get('#username').type(username)

    cy.get('#password').type(password)
    cy.get('#signin > .woocommerce-form > .woocommerce-button').click()
})

//Ürün artırma
Cypress.Commands.add('urununMiktriniArtirmaGorme', () => {
    //ürünün fiyatı
    cy.xpath('(//bdi)[3]').invoke('text').then((urununFiyati) => {
        cy.wait(3000)
        cy.get('.quantity-plus').click()
        cy.get('.wc-action-btn').click()
        cy.wait(3000)
        //artan miktar sonrası ürünün fiyat değişimi
        cy.xpath('(//bdi)[4]').invoke('text').should('not.eq', urununFiyati)
    })
})
//ürün azaltma
Cypress.Commands.add('urununMiktriniAzaldiginiGorme', () => {
    //ürünün fiyatı
    cy.xpath('(//bdi)[4]').invoke('text').then((artirilanÜrünFiyati) => {
        cy.wait(3000)
        cy.get('.quantity-minus').click()
        cy.get('.wc-action-btn').click()
        cy.wait(3000)
        //azaltılan miktar sonrası ürünün fiyat değişimi
        cy.xpath('(//bdi)[4]').invoke('text').should('not.eq', artirilanÜrünFiyati)
    })

})