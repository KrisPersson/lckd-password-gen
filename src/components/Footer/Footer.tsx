import './Footer.scss';
import Button from '../Button/Button';

export function Footer() {
  return (
    <div className="footer">
      <Button onClick={() => console.log('Login')}>LET ME IN</Button>
    </div>
  );
}
