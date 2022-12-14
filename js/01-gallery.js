import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryPlace = document.querySelector('.gallery');

galleryPlace.addEventListener('click', getOriginalImgOnClick);

galleryPlace.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));

function makeGalleryMarkup(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`
    }).join('');
};

function getOriginalImgOnClick(e) {
  e.preventDefault();
  const currentImg = e.target.classList.contains('gallery__image');
  const originalImg = e.target.dataset.source;

  if(!currentImg) {
    return;
  }

  openModalWindowGallary(originalImg);
}

function openModalWindowGallary(source) {
  const instance = basicLightbox.create(`
    <div class="modal">
      <img  
        src="${source}"
        width="1280"
        height="800"
      />
    </div>
  `, {
    onShow: (instance) => {
      document.addEventListener('keydown', onEscapePress);
  
      function onEscapePress(evt) {
          const keyCode = evt.code;

          if (keyCode === 'Escape') {
              document.removeEventListener('keydown', onEscapePress)
              instance.close()
          };
      };
  }
});
instance.show();
};