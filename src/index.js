import './scss/main.scss';

import 'material-design-icons/iconfont/material-icons.css';

// import axios from 'axios';

import refs from './js/refs';
import apiServise from './js/api-servise';
import updateGalleryMarkup from './js/gallery-markup';
import scroll from './js/scroll';

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
refs.loadMoreButton.addEventListener('click', fetchImages);

function handleSearchFormSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  const form = event.currentTarget;

  apiServise.query = form.elements.query.value;

  apiServise.resetPage();

  fetchImages();

  form.reset();
}

function fetchImages() {
  refs.loadMoreButton.classList.add('is-hidden');

  apiServise
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        return;
      }

      updateGalleryMarkup(images);
      refs.loadMoreButton.classList.remove('is-hidden');
      scroll();
    })
    .catch(console.log);
}
