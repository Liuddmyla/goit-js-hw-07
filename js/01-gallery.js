import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);


function createGalleryCardsMarkup(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    }).join('');
 
}

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    // console.log(event.target.dataset.source);

    const bigPicture = event.target.dataset.source;
    return bigPicture;
    
}