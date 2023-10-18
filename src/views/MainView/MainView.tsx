import './MainView.scss';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { Footer } from '../../components/Footer/Footer';
import PasswordDisplay from '../../components/PasswordDisplay/PasswordDisplay';
import { useState, useEffect } from 'react';
import { DatabaseSavedItem } from '../../types/index';

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
    savedPassword: 'yourpassword',
    id: '2',
  },
  {
    savedUrl: 'http://www.twitter.com/',
    savedUsername: 'my_username',
    savedPassword: 'jannes_password',
    id: '3',
  },
  {
    savedUrl: 'http://www.illuminati.org/',
    savedUsername: 'my_username',
    savedPassword: 'sveneriks_password',
    id: '4',
  },
  {
    savedUrl: 'http://www.folkuniversitetet.se/',
    savedUsername: 'my_username',
    savedPassword: 'johnnys_password',
    id: '5',
  },
];

export function MainView() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [itemsFromDb, setItemsFromDb] = useState<DatabaseSavedItem[]>([]);
  const passwordToBeDisplayed =
    itemsFromDb.length > 0 && selectedItem
      ? itemsFromDb.find((item) => item.id === selectedItem)?.savedPassword
      : '';

  useEffect(() => {
    setItemsFromDb(fakeItemsFromDb);
  }, []);

  return (
    <div className="view view--main">
      <Header isLoggedIn={true} />
      <section className="view-mid-section">
        <List
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          itemsFromDb={fakeItemsFromDb}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <PasswordDisplay showPassword={showPassword} password={passwordToBeDisplayed} />
      </section>
      <Footer />
    </div>
  );
}
