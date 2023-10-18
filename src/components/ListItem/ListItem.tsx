import './ListItem.scss';
import { DatabaseSavedItem } from '../../types/index';

export function ListItem({
  savedUrl,
  savedUsername,
  savedPassword,
  id,
  setSelectedItem,
  selectedItem,
  setShowPassword,
  showPassword,
}: DatabaseSavedItem & {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
}) {
  const formattedUrl = savedUrl.replace('http://', '').replace('https://', '');
  const isSelected = selectedItem === id;

  return (
    <li
      {...(!isSelected && { onClick: () => setSelectedItem(id) })}
      id={id}
      className={!isSelected ? 'list-item' : 'list-item list-item--selected'}
    >
      <span className="list-item__url-text">{formattedUrl}</span>
      <span className="list-item__eye-section">
        {isSelected && <img src="/assets/edit-item-icon.svg" alt="" />}
        <img
          className="icon-eye"
          src={`/assets/eye-${isSelected && showPassword ? 'open' : 'closed'}-icon.svg`}
          alt=""
          {...(isSelected && { onClick: () => setShowPassword((prev) => !prev) })}
        />
      </span>
    </li>
  );
}
