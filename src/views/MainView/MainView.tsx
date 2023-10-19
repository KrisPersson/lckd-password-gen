import './MainView.scss';
import { Header } from '../../components/Header/Header';
import { List } from '../../components/List/List';
import { Footer } from '../../components/Footer/Footer';
import PasswordDisplay from '../../components/PasswordDisplay/PasswordDisplay';
import { useState, useEffect } from 'react';
import { DatabaseSavedItem } from '../../types/index';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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

  function handleEditItem(id: string) {
    const itemToBeEdited = itemsFromDb.find((item) => item.id === id);
    navigate('/edit', { state: { ...itemToBeEdited } });
  }
  function handleCreateItem() {
    navigate('/new');
  }

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
          handleEditItem={handleEditItem}
        />
        <PasswordDisplay showPassword={showPassword} password={passwordToBeDisplayed || ''} />
      </section>
      <Footer
        buttonText="NEW LCKD"
        width="31.1rem"
        height="6.2rem"
        radius="0.8rem"
        border="none"
        backgroundColor="white"
        color="rgba(21, 8, 95, 1)"
        onClick={handleCreateItem}
      />
    </div>
  );
}
