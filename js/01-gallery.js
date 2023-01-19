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

    if (!event.target.nodeName === 'img') {
        return;
    }

    const bigPicture = event.target.dataset.source;    

    const instance = basicLightbox.create(`
    <img src="${bigPicture}" width="1280">
`);

    instance.show();   


    // document.addEventListener("keydown", (e) => {
    //     if (e.key === 'Escape') {
    //         instance.close();
    //     }
    // }); 
}


const option = {
		onShow: (instance) => console.log('onShow', instance),
		onClose: (instance) => console.log('onClose', instance)
	};
const instance = basicLightbox.create(html, option);




