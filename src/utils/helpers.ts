import { DatabaseSavedItem as Item } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

function getDataFromInputsAndSave() {
  const www = document.getElementById('WWW') as HTMLInputElement;
  const username = document.getElementById('USERNAME') as HTMLInputElement;
  const password = document.getElementById('SECURE PASSWORD') as HTMLInputElement;
  if (www.value.length < 8 || !username.value || !password.value) {
    return console.log('error');
  } else {
    const id = uuidv4();
    const itemToSaveToDatabase: Item = {
      savedUrl: www.value,
      savedUsername: username.value,
      savedPassword: password.value,
      id: id,
    };
    writeToDatabase(itemToSaveToDatabase);
  }
}

function writeToDatabase(itemToWriteToDb: Item) {
  // skicka till api endpoint
  return console.log(itemToWriteToDb);
}

export { getDataFromInputsAndSave };
