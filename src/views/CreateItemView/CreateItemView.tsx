import './CreateItemView.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import { getDataFromInputsAndSave } from '../../utils/helpers';

export function CreateItemView() {
  return (
    <div className="view">
      <Header isLoggedIn={true} />
      <div className="create-item-view__content">
        <h1 className="create-item-view__header">NEW SECURE CREDENTIALS</h1>
        <div className="create-item-view__inputs">
          <Input label="WWW" htmlFor="WWW" />
          <Input label="USERNAME" htmlFor="USERNAME" />
          <Input label="SECURE PASSWORD" htmlFor="SECURE PASSWORD" fieldType="genPwd" />
        </div>
      </div>
      <Footer buttonText="CREATE LCKD" onClick={getDataFromInputsAndSave} />
    </div>
  );
}
