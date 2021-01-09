import './scss/main.scss';

// import axios from 'axios';

import refs from './js/refs';
import apiService from './js/api-service';
import {
  updateGalleryMarkup,
  startListeningOnGalleryClick,
  stopListeningOnGalleryClick,
} from './js/gallery';
import {
  showNotice,
  showSuccessMessage,
  showErrorMessage,
} from './js/notifications';
import scroll from './js/scroll';

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
refs.loadMoreButton.addEventListener('click', fetchImages);

function handleSearchFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  stopListeningOnGalleryClick();

  const form = event.currentTarget;

  apiService.query = form.elements.query.value;

  apiService.resetPage();

  fetchImages();

  startListeningOnGalleryClick();

  form.reset();
}

function fetchImages() {
  refs.loadMoreButton.classList.add('is-hidden');

  apiService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        showNotice();

        return;
      }

      showSuccessMessage();
      updateGalleryMarkup(images);
      refs.loadMoreButton.classList.remove('is-hidden');
      scroll();
    })
    .catch(({ message }) => showErrorMessage(message));
}
