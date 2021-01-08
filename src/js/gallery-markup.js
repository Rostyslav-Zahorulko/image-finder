import refs from './refs';
import galleryItemTemplate from '../templates/gallery-item.hbs';

function updateGalleryMarkup(images) {
  const galleryMarkup = galleryItemTemplate(images);
  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}

export default updateGalleryMarkup;
