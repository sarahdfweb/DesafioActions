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
Cypress.Commands.add('preencherFormularioDeFaturamento', (dados) => {
    cy.get('#billing_first_name').clear().type(dados.firstName);
    cy.get('#billing_last_name').clear().type(dados.lastName);
    cy.get('#billing_company').clear().type(dados.company);
    cy.get('#select2-billing_country-container').click();
    cy.get('.select2-search__field').clear().type(`${dados.country}{enter}`);
    cy.get('#billing_address_1').clear().type(dados.address);
    cy.get('#billing_city').clear().type(dados.city);
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-search__field').clear().type(`${dados.state}{enter}`);
    cy.get('#billing_postcode').clear().type(dados.postcode);
    cy.get('#billing_phone').clear().type(dados.phone);
    cy.get('#billing_email').clear().type(dados.email); // Se necessário, adicione um email aqui.
    cy.get('#billing_address_2').clear().type(dados.address2);
});
