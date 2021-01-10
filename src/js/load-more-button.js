import refs from './refs';
import fetchImages from './fetch-images';

function listenOnLoadMoreButtonClick() {
  refs.loadMoreButton.addEventListener('click', fetchImages);
}

function showLoadMoreButton() {
  refs.loadMoreButton.classList.remove('is-hidden');
}

function hideLoadMoreButton() {
  refs.loadMoreButton.classList.add('is-hidden');
}

export { listenOnLoadMoreButtonClick, showLoadMoreButton, hideLoadMoreButton };
