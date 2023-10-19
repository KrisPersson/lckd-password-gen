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
  handleEditItem,
}: {
  itemsFromDb: DatabaseSavedItem[];
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  handleEditItem: (id: string) => void;
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
        handleEditItem={handleEditItem}
      />
    );
  });

  return (
    <ul className="list">
      <div className="input-sign">
        <label className="input-sign-text">STORED PASSWORDS</label>
      </div>
      {itemsFromDb.length > 0 ? (
        renderedListItems
      ) : (
        <p className="no-saved-passwords">You have no saved passwords</p>
      )}
    </ul>
  );
}
