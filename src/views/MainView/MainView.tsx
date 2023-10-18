import './MainView.scss';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { Footer } from '../../components/Footer/Footer';
import { useState } from 'react';

const fakeItemsFromDb = [
  {
    savedUrl: 'http://www.youtube.com/',
    savedUsername: 'my_username',
    savedPassword: 'mypassword',
    id: '1',
  },
  {
    savedUrl: 'http://www.facebook.com/',
    savedUsername: 'my_username',
    savedPassword: 'mypassword',
    id: '2',
  },
  {
    savedUrl: 'http://www.twitter.com/',
    savedUsername: 'my_username',
    savedPassword: 'mypassword',
    id: '3',
  },
  {
    savedUrl: 'http://www.illuminati.org/',
    savedUsername: 'my_username',
    savedPassword: 'mypassword',
    id: '4',
  },
  {
    savedUrl: 'http://www.folkuniversitetet.se/',
    savedUsername: 'my_username',
    savedPassword: 'mypassword',
    id: '5',
  },
];

export function MainView() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="view view--main">
      <Header isLoggedIn={true} />
      <section className="view-mid-section">
        <List
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          itemsFromDb={fakeItemsFromDb}
        />
      </section>
      <Footer />
    </div>
  );
}
