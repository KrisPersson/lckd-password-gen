import './ListItem.scss';
import { DatabaseSavedItem } from '../../types/index';

export function ListItem({
  savedUrl,
  savedUsername,
  savedPassword,
  id,
  setSelectedItem,
  selectedItem,
}: DatabaseSavedItem & {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}) {
  const formattedUrl = savedUrl.replace('http://', '').replace('https://', '');
  const isSelected = selectedItem === id;
  return (
    <li
      {...(isSelected && { onClick: () => setSelectedItem(id) })}
      id={id}
      className={!isSelected ? 'list-item' : 'list-item list-item--selected'}
    >
      <span className="list-item__url-text">{formattedUrl}</span>
      <span className="list-item__eye-section">
        <img src="/assets/eye-closed-icon.svg" alt="" />
      </span>
    </li>
  );
}
