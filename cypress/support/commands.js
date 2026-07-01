import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (username, password) => {

  LoginPage.login(username, password);

});