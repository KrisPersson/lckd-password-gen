import { useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { apiSignUp, apiLogin } from '../../api/index';
import Input from '../../components/Input/Input';
import './LoginView.scss';
import logotype from '/assets/Logo.svg';

function clickSignUp() {
  console.log('Signup-knappen funkar!');
}

function clickLogin() {
  // apiLogin({
  //   username: user,
  //   password: pwd,
  // });

  console.log('Footer-knappen funkar!');
}

function getFieldValues(values: { username: string; password: string }) {
  console.log(values);
}

export function LoginView() {
  // let userRef =
  // <input onChange={(event) => setUsernameInput(event.currentTarget.value)}       type='text' />
  // <input onChange={(event) => setPasswordInput(event.currentTarget.value)}         type='password' />

  // async function handleClick() {
  //   await apiLogin({username: usernameInput, password: passwordInput})
  // }
  function onChangeInInputField(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
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
