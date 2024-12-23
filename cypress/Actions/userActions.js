// cypress/actions/userActions.js

export const login = (username, password) => {
    cy.get('.icon-user-unfollow').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.woocommerce-form > .button').click();
    cy.url().should('include', '/minha-conta');  // Verifica se o login foi bem-sucedido
};

  
  //module.exports = new UserActions();
  