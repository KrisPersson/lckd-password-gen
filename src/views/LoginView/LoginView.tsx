import { useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { apiSignUp, apiLogin } from '../../api/index';
import Input from '../../components/Input/Input';
import './LoginView.scss';
import logotype from '/assets/Logo.svg';

export function LoginView() {
  let usernameInput: string;
  let passwordInput: string;

  function onChangeInInputField(event: React.ChangeEvent<HTMLInputElement>) {
    event.currentTarget.id === 'login-user-field'
      ? (usernameInput = event.target.value)
      : (passwordInput = event.target.value);
  }

  async function clickLogin() {
    if (
      usernameInput.length < 4 ||
      usernameInput.length > 20 ||
      passwordInput.length < 6 ||
      passwordInput.length > 100
    ) {
      console.log('Username or password too short or too long.');
      return;
    }

    const result = await apiLogin({ username: usernameInput, password: passwordInput });
    console.log(result);

    console.log('Du är nu inloggad.');
  }

  async function clickSignUp() {
    const result = await apiSignUp({ username: usernameInput, password: passwordInput });
    console.log(result);

    console.log('Signup-knappen funkar!');
  }

  return (
    <div className="view">
      <Header isLoggedIn={false} onClick={clickSignUp} />
      <article className="login-main">
        <section className="login-logo-slogan">
          <img className="login-logo" src={logotype} alt="LCKD logotype"></img>
          <h1 className="login-h1">LCKD</h1>
          <h2 className="login-h2">KEEPING YOUR PASSWORDS SAFE</h2>
        </section>
        <section className="login-input-fields">
          <div id="user-wrapper">
            <Input
              label="USERNAME"
              htmlFor="login-user-field"
              fieldType="login"
              onChange={onChangeInInputField}
            />
          </div>
          <div id="pwd-wrapper">
            <Input
              label="PASSWORD"
              htmlFor="login-pwd-field"
              fieldType="pwd"
              onChange={onChangeInInputField}
            />
          </div>
        </section>
      </article>
      <Footer buttonText="LET ME IN" onClick={clickLogin} />
    </div>
  );
}
