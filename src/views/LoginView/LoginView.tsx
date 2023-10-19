import './LoginView.scss';
import { Header } from '../../components/Header/Header';

export function LoginView() {
  return (
    <div className="view">
      <Header isLoggedIn={false} />
    </div>
  );
}
