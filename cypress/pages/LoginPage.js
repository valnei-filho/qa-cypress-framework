class LoginPage {

  elements = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: '#submit',
    successMessage: 'Logged In Successfully',
    invalidPasswordMessage: 'Your password is invalid!'
  };

  visit() {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  }

  fillUsername(username) {
    cy.get(this.elements.usernameInput).type(username);
  }

  fillPassword(password) {
    cy.get(this.elements.passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(this.elements.loginButton).click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton();
  }

  validateSuccessfulLogin() {
    cy.contains(this.elements.successMessage)
      .should('be.visible');
  }

  validateInvalidPasswordMessage() {
    cy.contains(this.elements.invalidPasswordMessage)
      .should('be.visible');
  }

  loginSuccessfully(username, password) {
    this.login(username, password);
    this.validateSuccessfulLogin();
  }

}

export default new LoginPage();