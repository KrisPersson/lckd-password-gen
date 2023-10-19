import './Header.scss';
import logo from '/assets/Logo.svg';
import Button from '../Button/Button';
interface Props {
  isLoggedIn: boolean;
  onClick: () => void;
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
            width="fit-content"
            height="fit-content"
            radius="0.3rem"
            border="solid 0.1rem #ff4910"
            backgroundColor="transparent"
            color="#ff4910"
            fontFamily="Open Sans"
            fontWeight="400"
            padding="0.3rem 0.6rem 0.3rem 0.6rem"
            onClick={props.onClick}
          >
            Sign up
          </Button>
        </div>
      )}
    </>
  );
}
