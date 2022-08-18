// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const linkGallery = document.querySelector('.gallery');

function makeGalleryItem(galleryItem) {
  const { preview, original, description } = galleryItem;
  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const makeGalleryItems = galleryItems.map(makeGalleryItem).join('');

linkGallery.insertAdjacentHTML('beforeend', makeGalleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
