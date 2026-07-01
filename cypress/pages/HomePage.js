class HomePage {

  elements = {

    logoutButton: '.wp-block-button__link'

  };

  messages = {

    successfulLogin: 'Logged In Successfully'

  };

  validateSuccessfulLogin() {

    cy.contains(this.messages.successfulLogin)
      .should('be.visible');

  }

  clickLogout() {

    cy.get(this.elements.logoutButton)
      .click();

  }

  validateLogout() {

    cy.url()
      .should('include', '/practice-test-login');

  }

}

export default new HomePage();