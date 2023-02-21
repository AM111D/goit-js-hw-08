import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClickImages);

const imagesListItems = creatListImages(galleryItems);

function creatListImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>
        `;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('afterbegin', imagesListItems);

function onClickImages(event) {
  event.preventDefault();

  const isImageEl = event.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return;
  }

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {});
}
