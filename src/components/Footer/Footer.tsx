import './Footer.scss';
import Button from '../Button/Button';
interface Props {
  buttonText: string;
  gatherData: () => void;
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <Button onClick={props.gatherData}>{props.buttonText}</Button>
    </div>
  );
}
