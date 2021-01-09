import './scss/main.scss';
// import 'material-design-icons/iconfont/material-icons.css';

// import axios from 'axios';

import refs from './js/refs';
import apiService from './js/api-service';
import updateGalleryMarkup from './js/gallery-markup';
import scroll from './js/scroll';
import { showNotice, showSuccessMessage } from './js/notifications';

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
refs.loadMoreButton.addEventListener('click', fetchImages);

function handleSearchFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  const form = event.currentTarget;

  apiService.query = form.elements.query.value;

  apiService.resetPage();

  fetchImages();

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
    .catch(console.log);
}
