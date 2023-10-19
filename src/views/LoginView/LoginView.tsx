import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import './LoginView.scss';
import logotype from '../../../public/assets/Logo.svg'

function clickSignUp() {
  console.log('Det fungerar!');
}

function clickLogin() {
  console.log('Det fungerar!');
}

export function LoginView() {
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
            <Input label="USERNAME" htmlFor="login-user-field" fieldType="login" />
          </div>
          <div id="pwd-wrapper">
            <Input label="PASSWORD" htmlFor="login-pwd-field" fieldType="pwd" />
          </div>
        </section>
      </article>
      <Footer buttonText="LET ME IN" onClick={clickLogin} />
    </div>
  );
}
