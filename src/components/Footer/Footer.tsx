import './Footer.scss';
import Button from '../Button/Button';
interface Props {
  isLoggedIn: boolean;
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <Button {...props}>NEW LCKD</Button>
    </div>
  );
}
