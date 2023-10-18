import './LoginView.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export default function LoginView() {
  return (
    <div className="view">
      <Header isLoggedIn={false} />
      <Footer />
    </div>
  );
}
