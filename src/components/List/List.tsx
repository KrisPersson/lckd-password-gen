import './List.scss';
import { ListItem } from '../ListItem/ListItem';
import { DatabaseSavedItem } from '../../types/index';
import { useState } from 'react';

export function List({ itemsFromDb }: { itemsFromDb: DatabaseSavedItem[] }) {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const renderedListItems = itemsFromDb.map((item) => {
    const { savedUrl, savedUsername, savedPassword } = item;
    return (
      <ListItem
        savedUrl={savedUrl}
        savedUsername={savedUsername}
        savedPassword={savedPassword}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    );
  });

  return (
    <ul className="list">
      {itemsFromDb.length > 0 ? (
        renderedListItems
      ) : (
        <p className="no-saved-passwords">You have no saved passwords</p>
      )}
    </ul>
  );
}
