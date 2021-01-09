import 'basicLightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function showLightbox(value) {
  const instance = basicLightbox.create(`<img src="${value}">`);
  instance.show();
}

export default showLightbox;
