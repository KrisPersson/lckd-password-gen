import './Footer.scss';
import Button from '../Button/Button';
interface Props {
  isLoggedIn: boolean;
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <Button
        width="8.6rem"
        height="3.8rem"
        radius="0.3rem"
        border="solid 0.1rem #ff4910"
        backgroundColor="transparent"
        color="#ff4910"
        onClick={() => console.log('Login')}
      >
        Sign up
      </Button>
    </div>
  );
}
