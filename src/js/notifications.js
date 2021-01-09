import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { notice, success } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.mode = 'light';
defaults.styling = 'material';
defaults.icons = 'material';

function showNotice() {
  return notice({
    title:
      'Зображень за Вашим запитом не знайдено. Будь ласка, уточніть Ваш запит!',
    delay: 2000,
  });
}

function showSuccessMessage() {
  return success({
    title: 'За Вашим запитом знайдено зображення. Насолоджуйтесь переглядом!',
    delay: 2000,
  });
}

export { showNotice, showSuccessMessage };
