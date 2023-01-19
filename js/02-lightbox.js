import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);


function createGalleryCardsMarkup(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join(''); 
}

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


// galleryContainer.addEventListener('click', onGalleryContainerClick);

// function onGalleryContainerClick(event) {
//     event.preventDefault();
//     if (!event.target.classList.contains('gallery__image')) {
//         return;
//     }     
// }

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: '250' });


