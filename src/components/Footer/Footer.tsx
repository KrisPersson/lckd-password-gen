import './Footer.scss';
import Button from '../Button/Button';
interface Props {
  buttonText: string;
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <Button {...props}>{props.buttonText}</Button>
    </div>
  );
}
