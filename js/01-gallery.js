import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryEl.addEventListener("click", onGalleryClick);
galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createImgCardsMarkup(galleryItems){
    
    return galleryItems.map(({preview, original, description}) => {
        return   `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>
        `;
    }).join('');
};

//делегирование
function onGalleryClick(event){
    event.preventDefault();
    const isImgEl = event.target.classList.contains("gallery__image");

    if(!isImgEl){
        return;
    }

    openModalLightbox(event);
    window.addEventListener('keydown', onEscKeyPress);
};

let instance;

function openModalLightbox(event) {
    instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`);
    instance.show();
};


function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onEscKeyPress);
    };
};