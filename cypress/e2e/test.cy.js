/// <reference types="cypress" />
const { login } = require('../actions/userActions');
const { adicionarProdutoAoCarrinho } = require('../actions/productActions');
const { preencherFormularioDeFaturamento, selecionarPagamentoBACS, verificarMensagemPedido } = require('../actions/checkoutActions');

describe('Teste de Checkout', () => {
    const usuario = { username: 'magica@gmail.com.br', password: 'GD*peToHNJ1#c$sgk08EaYJQ' };

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br');
        login(usuario.username, usuario.password);
    });

    it('Deve realizar a compra', () => {
        // Adiciona o produto ao carrinho
        adicionarProdutoAoCarrinho('XL', 'Yellow');

        // Vai para o checkout
        cy.get('.woocommerce-message > .button').click();
        cy.get('.checkout-button').click();

        // Verifica o título de detalhes de faturamento
        cy.get('.woocommerce-billing-fields > h3').should('be.visible').and('contain.text', 'Detalhes de faturamento');

        // Preenche o formulário de faturamento
        preencherFormularioDeFaturamento();

        // Seleciona o método de pagamento e finaliza a compra
        selecionarPagamentoBACS();

        // Verifica a mensagem de sucesso
        verificarMensagemPedido();
    });
});

