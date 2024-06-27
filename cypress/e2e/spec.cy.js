describe('Ana Sayfa Testleri', () => {
  it('Acıktım butonunu bulmalı ve /order sayfasına yönlendirmeli', () => {
    cy.visit('/');
    cy.get('[data-cy="aciktim-button"]').should('exist');
    cy.get('[data-cy="aciktim-button"]').click();
    cy.url().should('include', '/order');
  });
});

describe('Sipariş Sayfası Testleri', () => {
  beforeEach(() => {
    cy.visit('/order');
  });

  it('Sipariş Ver butonu başlangıçta devre dışı olmalı', () => {
    cy.get('[data-cy="submit-button"]').should('be.disabled');
  });

  it('Hamur seçiminden sonra uyarı kalkmalı ama submit devre dışı olmalı', () => {
    cy.get('[data-cy="size-radio"][value="Orta"]').check();
    cy.get('[data-cy="dough-select"]').select('klasik');
    cy.get('[data-cy="size-warn"]').should('not.exist');
    cy.get('[data-cy="dough-warn"]').should('not.exist');
    cy.get('[data-cy="submit-button"]').should('be.disabled');
  });

  it('Dört malzeme seçtikten sonra uyarı kalkmalı', () => {
    cy.get('[data-cy="ingredient-checkbox"][value="Pepperoni"]').check();
    cy.get('[data-cy="ingredient-checkbox"][value="Tavuk Izgara"]').check();
    cy.get('[data-cy="ingredient-checkbox"][value="Mısır"]').check();
    cy.get('[data-cy="ingredient-checkbox"][value="Sarımsak"]').check();
    cy.get('[data-cy="ingredient-warn"]').should('not.exist');
    cy.get('[data-cy="submit-button"]').should('be.disabled');
  });

  it('İsim 3 karakterden az ise uyarı göstermeli', () => {
    cy.get('input[name="isim"]').type('Al');
    cy.get('[data-cy="name-warn"]').should('exist');
  });

  it('İsim en az 3 karakter olduğunda uyarı kalkmalı', () => {
    cy.get('input[name="isim"]').type('Al');
    cy.get('[data-cy="name-warn"]').should('exist');
    cy.get('input[name="isim"]').type('i');
    cy.get('[data-cy="name-warn"]').should('not.exist');
  });

  it('Tüm gerekli alanlar doldurulduktan sonra submit butonu etkin olmalı', () => {
    siparisFormunuDoldur();
    cy.get('[data-cy="submit-button"]').should('not.be.disabled');
    cy.get('[data-cy="submit-button"]').click();
    cy.url().should('include', '/success');
  });

  it('Tüm gerekli alanlar doldurulduktan sonra submit butonu etkin olmalı ve success sayfasına yönlendirmeli', () => {
    siparisFormunuDoldur();
    cy.get('[data-cy="artir"]').click().click();
    cy.get('[data-cy="ekFiyat"]').invoke('text').as('orderEkFiyat');
    cy.get('[data-cy="toplamFiyat"]').invoke('text').as('orderToplamFiyat');
    cy.get('[data-cy="submit-button"]').should('not.be.disabled');
    cy.get('[data-cy="submit-button"]').click();
    cy.url().should('include', '/success');
    cy.get('[data-cy="ekFiyat"]').invoke('text').as('successEkFiyat');
    cy.get('[data-cy="toplamFiyat"]').invoke('text').as('successToplamFiyat');
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
  cy.get('[data-cy="size-radio"][value="Orta"]').check();
  cy.get('[data-cy="dough-select"]').select('klasik');
  cy.get('[data-cy="ingredient-checkbox"][value="Pepperoni"]').check();
  cy.get('[data-cy="ingredient-checkbox"][value="Tavuk Izgara"]').check();
  cy.get('[data-cy="ingredient-checkbox"][value="Mısır"]').check();
  cy.get('[data-cy="ingredient-checkbox"][value="Sarımsak"]').check();
  cy.get('textarea[name="not"]').type('Lütfen hızlı teslim edin.');
}
