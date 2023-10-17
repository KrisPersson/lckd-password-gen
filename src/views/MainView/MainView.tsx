import './MainView.scss';
import { Header } from '../../components/Header/Header';
export function MainView() {
  return (
    <div className="view">
      <Header isLoggedIn={true} />
    </div>
  );
}
