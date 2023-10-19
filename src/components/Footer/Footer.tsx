import './Footer.scss';
import Button from '../Button/Button';
interface Props {
  buttonText: string;
  onClick: () => void;
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <Button {...props}>{props.buttonText}</Button>
    </div>
  );
}
