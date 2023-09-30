

import { US06Page } from "../../pages/us06Page";


const uS06PageObj = new US06Page();
describe('Kullanici alisveris yapabilir', () => {

    it('Kullanici istediği ürünü aratir', () => {
        cy.home()//anasayfaya gitme

        //login olma
        cy.fixture('loginData').as('kullaniciBilgileri')
        cy.get('@kullaniciBilgileri').then((data) => {
            cy.login(data.userName, data.password) 
        })

        cy.wait(3000)
        //kullanıcı istediği ürünü search box ta aratır
        uS06PageObj.aramaKutusu().type('pencil')
        uS06PageObj.aramaKutusu().type('{enter}');
        //kullanıcı aradığı ürünü sepete ekler
        uS06PageObj.arananUrun()
        uS06PageObj.addToCart().click()
        uS06PageObj.cartButonu()
        //sepete eklediği ürünü doğrular
        uS06PageObj.sepeteEkleneUrunTitle().should('include.text', 'pencil')
        //kullanıcı sepetine gider
        uS06PageObj.viewCartButonu().click()
        //kulanıcı sepetteki ürünü arirdığını görebilir
        cy.urununMiktriniArtirmaGorme()
        //Kullanıcı ürünü azaltıgını görebilir
        cy.urununMiktriniAzaldiginiGorme()

    });

});