// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "../../node_modules/simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);



const galleryDiv = document.querySelector('.gallery');

const galleryImages = galleryItems.map((item) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('');

galleryDiv.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', { 
    animationSpeed: 500,
    enableKeyboard: true,
    captionsData: 'alt',
    captionDelay: 250
    
 });

