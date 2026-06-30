import LoginPage from '../pages/LoginPage';

describe('Login Page', () => {

  it('Should login successfully', () => {

    LoginPage.loginSuccessfully(
      'student',
      'Password123'
    );

  });

  it('Should display an error message for an invalid password', () => {

    LoginPage.login(
      'student',
      'WrongPassword'
    );

    LoginPage.validateInvalidPasswordMessage();

  });

});