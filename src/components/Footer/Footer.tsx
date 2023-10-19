import './Footer.scss';
import Button from '../Button/Button';
interface Props {
  isLoggedIn: boolean;
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <Button
        width="31.1rem"
        height="6.2rem"
        radius="0.8rem"
        border="none"
        backgroundColor="white"
        color="rgba(21, 8, 95, 1)"
        onClick={() => console.log('Navigate to CreateItemView')}
      >
        NEW LCKD
      </Button>
    </div>
  );
}
