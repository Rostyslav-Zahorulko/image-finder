import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { notice, info, success, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'light';
defaults.styling = 'material';
defaults.icons = 'material';

function showNotice() {
  notice({
    title: 'Warning!',
    text: 'Unable to make a search query.\nPlease enter any text!',
    width: '400px',
    delay: 2000,
  });
}

function showInfo() {
  info({
    title: 'Sorry!',
    text: 'Your search did not match any images.\nPlease clarify the request!',
    width: '400px',
    delay: 2000,
  });
}

function showSuccessMessage() {
  success({
    title: 'Congratulations!',
    text: 'Images were found on your request.\nEnjoy watching!',
    width: '400px',
    delay: 2000,
  });
}

function showErrorMessage(err) {
  error({
    title: 'Error!',
    text: `${err}`,
    width: '400px',
    delay: 2000,
  });
}

export { showNotice, showInfo, showSuccessMessage, showErrorMessage };
