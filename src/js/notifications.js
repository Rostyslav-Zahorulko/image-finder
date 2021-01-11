import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { notice, info, success, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'light';
defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 2000;
defaults.width = '350px';

function showNotice() {
  notice({
    title: 'Warning!',
    text: 'Unable to make a search query. Please enter any text!',
  });
}

function showInfo() {
  info({
    title: 'Sorry!',
    text: 'Your search did not match any images. Please clarify the request!',
  });
}

function showSuccessMessage() {
  success({
    title: 'Congratulations!',
    text: 'Images were found on your request. Enjoy watching!',
  });
}

function showErrorMessage(err) {
  error({
    title: 'Error!',
    text: `${err}`,
  });
}

export { showNotice, showInfo, showSuccessMessage, showErrorMessage };
