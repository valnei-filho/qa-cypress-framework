import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Login Page', () => {

  let loginData;

  beforeEach(() => {

    cy.fixture('data/login')
      .then((data) => {

        loginData = data;

      });

  });

  it('Should login successfully', () => {

    cy.login(

      loginData.validUser.username,
      loginData.validUser.password

    );

    HomePage.validateSuccessfulLogin();

  });

  it('Should display an error message for an invalid password', () => {

    cy.login(

      loginData.invalidPassword.username,
      loginData.invalidPassword.password

    );

    LoginPage.validateInvalidPasswordMessage();

  });

  it('Should logout successfully', () => {

    cy.login(

      loginData.validUser.username,
      loginData.validUser.password

    );

    HomePage.validateSuccessfulLogin();

    HomePage.clickLogout();

    HomePage.validateLogout();

  });

});