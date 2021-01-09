import refs from './refs';
import showLightbox from './lightbox';
import galleryItemTemplate from '../templates/gallery-item.hbs';

function updateGalleryMarkup(images) {
  const galleryMarkup = galleryItemTemplate(images);
  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}

function startListeningOnGalleryClick() {
  refs.gallery.addEventListener('click', handleOnGalleryClick);
}

function stopListeningOnGalleryClick() {
  refs.gallery.removeEventListener('click', handleOnGalleryClick);
}

function handleOnGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const image = event.target;
  const imageURLForLightbox = image.dataset.src;

  showLightbox(imageURLForLightbox);
}

export {
  updateGalleryMarkup,
  startListeningOnGalleryClick,
  stopListeningOnGalleryClick,
};
