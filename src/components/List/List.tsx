import './List.scss';
import { ListItem } from '../ListItem/ListItem';
import { DatabaseSavedItem } from '../../types/index';
import { useState } from 'react';

export function List({
  itemsFromDb,
  setShowPassword,
  showPassword,
  selectedItem,
  setSelectedItem,
}: {
  itemsFromDb: DatabaseSavedItem[];
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}) {
  const renderedListItems = itemsFromDb.map((item) => {
    const { savedUrl, savedUsername, savedPassword, id } = item;
    return (
      <ListItem
        key={id}
        id={id}
        savedUrl={savedUrl}
        savedUsername={savedUsername}
        savedPassword={savedPassword}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
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
