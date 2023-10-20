import { DatabaseSavedItem as Item } from '../types/index';
import { v4 as uuidv4 } from 'uuid';

const htmlEl = {
  www: document.getElementById('WWW') as HTMLInputElement,
  username: document.getElementById('USERNAME') as HTMLInputElement,
  password: document.getElementById('SECURE PASSWORD') as HTMLInputElement,
};

function getDataFromInputsAndSave() {
  if (!htmlEl.www.value || !htmlEl.username.value || !htmlEl.password.value) {
    return console.log('error');
  } else {
    const id = uuidv4();
    const itemToSaveToDatabase: Item = {
      savedUrl: htmlEl.www.value,
      savedUsername: htmlEl.username.value,
      savedPassword: htmlEl.password.value,
      id: id,
    };
    writeToDatabase(itemToSaveToDatabase);
  }
}
async function fillInputsFromDb(itemId: string) {
  // Hämta data från databasen med hjälp av itemId
  // Skriv ut data i inputs
  htmlEl.www.value = '';
  htmlEl.username.value = '';
  htmlEl.password.value = '';
}
function getDataFromInputsAndUpdate(itemId: string) {
  if (htmlEl.www.value.length < 8 || !htmlEl.username.value || !htmlEl.password.value) {
    return console.log('error');
  } else {
    const itemToUpdateInDb: Item = {
      savedUrl: htmlEl.www.value,
      savedUsername: htmlEl.username.value,
      savedPassword: htmlEl.password.value,
      id: itemId,
    };
    updateDatabase(itemToUpdateInDb);
  }
}
function updateDatabase(itemToUpdateInDb: Item) {
  // skicka till api endpoint
  return console.log(itemToUpdateInDb);
}
function writeToDatabase(itemToWriteToDb: Item) {
  // skicka till api endpoint
  return console.log(itemToWriteToDb);
}

export { getDataFromInputsAndSave, getDataFromInputsAndUpdate, fillInputsFromDb };
