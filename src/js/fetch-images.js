import apiService from './api-service';
import { updateGalleryMarkup } from './gallery';
import { showLoadMoreButton, hideLoadMoreButton } from './load-more-button';
import {
  showNotice,
  showSuccessMessage,
  showErrorMessage,
} from './notifications';
import scroll from './scroll';

function fetchImages() {
  hideLoadMoreButton();

  apiService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        showNotice();
        return;
      }

      showSuccessMessage();
      updateGalleryMarkup(images);
      showLoadMoreButton();
      scroll();
    })
    .catch(({ message }) => showErrorMessage(message));
}

export default fetchImages;
