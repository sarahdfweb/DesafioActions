// cypress/actions/checkoutActions.js

export const preencherFormularioDeFaturamento = () => {
    cy.get('#billing_first_name').clear().type('Sarah');
    cy.get('#billing_last_name').clear().type('Lima');
    cy.get('#billing_company').clear().type('Silva');
    cy.get('#select2-billing_country-container').click();
    cy.get('.select2-search__field').clear().type('Brasil{enter}');
    cy.get('#billing_address_1').clear().type('Rua Botocudos Quadra 30');
    cy.get('#billing_city').clear().type('Jardim Americana');
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-search__field').clear().type('São Paulo{enter}');
    cy.get('#billing_postcode').clear().type('01001-000');
    cy.get('#billing_phone').clear().type('61998305542');
    cy.get('#billing_email'); // Se necessário, adicione um email aqui.
    cy.get('#billing_address_2').clear().type('Próximo ao colégio Militar');
};

export const selecionarPagamentoBACS = () => {
    cy.get('#payment_method_bacs').click();
    cy.get('#terms').click();  // Aceita os termos
    cy.get('#place_order').click();  // Finaliza o pedido
};

export const verificarMensagemPedido = () => {
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
};
