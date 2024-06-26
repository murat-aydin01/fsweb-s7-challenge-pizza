describe('Ana Sayfa Testleri', () => {
  it('Acıktım butonunu bulmalı ve /order sayfasına yönlendirmeli', () => {
    cy.visit('/');
    cy.get('.test-aciktim-button').should('exist');
    cy.get('.test-aciktim-button').click();
    cy.url().should('include', '/order');
  });
});

describe('Sipariş Sayfası Testleri', () => {
  beforeEach(() => {
    cy.visit('/order');
  });

  it('Sipariş Ver butonu başlangıçta devre dışı olmalı', () => {
    cy.get('.test-submit-button').should('be.disabled');
  });

  it('Hamur seçiminden sonra uyarı kalkmalı ama submit devre dışı olmalı', () => {
    cy.get('.test-size-radio[value="Orta"]').check();
    cy.get('.test-dough-select').select('klasik');
    cy.get('.test-size-warn').should('not.exist');
    cy.get('.test-dough-warn').should('not.exist');
    cy.get('.test-submit-button').should('be.disabled');
  });

  it('Dört malzeme seçtikten sonra uyarı kalkmalı', () => {
    cy.get('.test-ingredient-checkbox[value="Pepperoni"]').check();
    cy.get('.test-ingredient-checkbox[value="Tavuk Izgara"]').check();
    cy.get('.test-ingredient-checkbox[value="Mısır"]').check();
    cy.get('.test-ingredient-checkbox[value="Sarımsak"]').check();
    cy.get('.test-ingredient-warn').should('not.exist');
    cy.get('.test-submit-button').should('be.disabled');
  });

  it('İsim 3 karakterden az ise uyarı göstermeli', () => {
    cy.get('input[name="isim"]').type('Al');
    cy.get('.test-name-warn').should('exist');
  });

  it('İsim en az 3 karakter olduğunda uyarı kalkmalı', () => {
    cy.get('input[name="isim"]').type('Al');
    cy.get('.test-name-warn').should('exist');
    cy.get('input[name="isim"]').type('i');
    cy.get('.test-name-warn').should('not.exist');
  });

  it('Tüm gerekli alanlar doldurulduktan sonra submit butonu etkin olmalı', () => {
    siparisFormunuDoldur();
    cy.get('.test-submit-button').should('not.be.disabled');
    cy.get('.test-submit-button').click();
    cy.url().should('include', '/success');
  });

  it('Tüm gerekli alanlar doldurulduktan sonra submit butonu etkin olmalı ve success sayfasına yönlendirmeli', () => {
    siparisFormunuDoldur();
    cy.get('.test-artir').click().click();
    cy.get('.test-ekFiyat').invoke('text').as('orderEkFiyat');
    cy.get('.test-toplamFiyat').invoke('text').as('orderToplamFiyat');
    cy.get('.test-submit-button').should('not.be.disabled');
    cy.get('.test-submit-button').click();
    cy.url().should('include', '/success');
    cy.get('.test-ekFiyat').invoke('text').as('successEkFiyat');
    cy.get('.test-toplamFiyat').invoke('text').as('successToplamFiyat');
    cy.get('@orderEkFiyat').then(orderEkFiyat => {
      cy.get('@successEkFiyat').should(successEkFiyat => {
        expect(successEkFiyat.trim()).to.equal(orderEkFiyat.trim());
      });
    });
    cy.get('@orderToplamFiyat').then(orderToplamFiyat => {
      cy.get('@successToplamFiyat').should(successToplamFiyat => {
        expect(successToplamFiyat.trim()).to.equal(orderToplamFiyat.trim());
      });
    });
  });
});

function siparisFormunuDoldur() {
  cy.get('input[name="isim"]').type('Ali');
  cy.get('.test-size-radio[value="Orta"]').check();
  cy.get('.test-dough-select').select('klasik');
  cy.get('.test-ingredient-checkbox[value="Pepperoni"]').check();
  cy.get('.test-ingredient-checkbox[value="Tavuk Izgara"]').check();
  cy.get('.test-ingredient-checkbox[value="Mısır"]').check();
  cy.get('.test-ingredient-checkbox[value="Sarımsak"]').check();
  cy.get('textarea[name="not"]').type('Lütfen hızlı teslim edin.');
}
