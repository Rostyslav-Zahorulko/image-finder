import refs from './refs';
import apiService from './api-service';
import {
  deleteGalleryMarkup,
  listenOnGalleryClick,
  doNotListenOnGalleryClick,
} from './gallery';
import { showNotice } from './notifications';
import fetchImages from './fetch-images';

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.elements.query;

  if (input.value === '') {
    showNotice();
    return;
  }

  deleteGalleryMarkup();

  doNotListenOnGalleryClick();

  apiService.query = input.value;

  apiService.resetPage();

  fetchImages();

  listenOnGalleryClick();

  form.reset();
}

function listenSearchFormSubmit() {
  refs.searchForm.addEventListener('submit', handleSearchFormSubmit);
}

export default listenSearchFormSubmit;
