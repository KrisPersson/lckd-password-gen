import './Header.scss';
import logo from '/assets/Logo.svg';
import { Button } from '../Button/Button';
interface Props {
  isLoggedIn: boolean;
}

export function Header(props: Props) {
  return (
    <>
      {props.isLoggedIn ? (
        <div className="header">
          <img src={logo} alt="Logo" className="header__logo" />
          <h1 className="logo__title">LCKD</h1>
        </div>
      ) : (
        <div className="header login">
          <Button
            width="8.6rem"
            height="3.8rem"
            radius="0.3rem"
            border="solid 0.1rem #ff4910"
            backgroundColor="transparent"
            color="#ff4910"
          >
            Sign up
          </Button>
        </div>
      )}
    </>
  );
}
