import './EditItemView.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { getDataFromInputsAndUpdate, fillInputsFromDb } from '../../utils/helpers';
import Input from '../../components/Input/Input';

export function EditItemView() {
  const itemId: string = '1'; //temporärt
  fillInputsFromDb(itemId);
  return (
    <div className="view">
      <Header isLoggedIn={true} />
      <div className="edit-item-view__content">
        <h1 className="edit-item-view__header">EDIT YOUR CREDENTIALS</h1>
        <div className="edit-item-view__inputs">
          <Input label="WWW" htmlFor="WWW" />
          <Input label="USERNAME" htmlFor="USERNAME" />
          <Input label="SECURE PASSWORD" htmlFor="SECURE PASSWORD" fieldType="genPwd" />
        </div>
      </div>
      <Footer buttonText="UPDATE LCKD" onClick={() => getDataFromInputsAndUpdate(itemId)} />
    </div>
  );
}
