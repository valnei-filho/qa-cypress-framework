class LoginPage {

  elements = {

    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: '#submit'

  };

  messages = {

    invalidPassword: 'Your password is invalid!'

  };

  visit() {
    cy.visit('/practice-test-login/');
  }

  fillUsername(username) {

    cy.get(this.elements.usernameInput)
      .type(username);

  }

  fillPassword(password) {

    cy.get(this.elements.passwordInput)
      .type(password);

  }

  clickLoginButton() {

    cy.get(this.elements.loginButton)
      .click();

  }

  login(username, password) {

    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton();

  }

  validateInvalidPasswordMessage() {

    cy.contains(this.messages.invalidPassword)
      .should('be.visible');

  }

}

export default new LoginPage();