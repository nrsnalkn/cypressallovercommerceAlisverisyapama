export class US06Page {
  aramaKutusu() {
    return cy.get('.elementor-widget-container > .search-wrapper > .input-wrapper > .form-control')
  }
  arananUrun() {
    return cy.get('main#main li:nth-child(1) > div > figure > a > img:nth-child(2)').click()
  }
  addToCart() {
    return cy.get('.single_add_to_cart_button')
  }
  cartButonu() {
    return cy.get('.elementor-widget-container > .dropdown > .cart-toggle > .w-icon-cart').click()
  }
  sepeteEkleneUrunTitle() {
    return cy.get('.cart-item-meta > a > span')
  }
  viewCartButonu() {
    return cy.get('.woocommerce-mini-cart__buttons > [href="https://allovercommerce.com/cart/"]')
  }
  sepettekiUrunuArtirma() {
    cy.get('.quantity-plus').click()
  }
  sepetUpdate() {
    cy.get('.wc-action-btn').click()

  }
  urunuMiktariArtiktanSonraFiyati() {
    cy.xpath('(//bdi)[4]')
  }
  urunuFiyati() {
    cy.xpath('(//bdi)[3]')
  }
  sepettekiUrunuAzaltma() {
    cy.get('.quantity-minus').click()
  }

}