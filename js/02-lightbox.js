import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryPlace = document.querySelector('.gallery');

galleryPlace.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'alt',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function makeGalleryMarkup(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
              <a class="gallery__item" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
              </a>
            `
    }).join('');
};