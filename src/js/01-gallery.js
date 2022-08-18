// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const linkGallery = document.querySelector('.gallery');
console.log(linkGallery);
const galleryMarkup = makeGalleryMarkup(galleryItems);

linkGallery.insertAdjacentHTML('beforeend', galleryMarkup);
//linkGallery.addEventListener('click', makeClickImg);

//разметка галереи
function makeGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
             </a>
           </div>`;
    })
    .join('');
}
