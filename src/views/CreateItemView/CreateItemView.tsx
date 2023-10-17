import './CreateItemView.scss';
import { Header } from '../../components/Header/Header';

export function CreateItemView() {
  return (
    <div className="view">
      <Header isLoggedIn={true} />
    </div>
  );
}
