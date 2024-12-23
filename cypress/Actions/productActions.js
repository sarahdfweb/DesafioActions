// cypress/actions/productActions.js

export const adicionarProdutoAoCarrinho = (tamanho, cor) => {
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click();
    cy.get(`.button-variable-item-${tamanho}`).click(); 
    cy.get(`.button-variable-item-${cor}`).click();      
    cy.get('.single_add_to_cart_button').click();

    //cy.get('.woocommerce-message').should('be.visible').and('include.text', `"Aero Daily Fitness Tee" foi adicionado no seu carrinho.`);
    //.should('be.visible')
    //.and('contain.text', '"Aero Daily Fitness Tee" foi adicionado no seu carrinho.');


        
};
