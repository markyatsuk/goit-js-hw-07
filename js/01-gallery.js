import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
//создание разметки галереи
const cardsMarkup = createImgCardsMarkup(galleryItems);
//обработка события при клике
galleryEl.addEventListener("click", onGalleryClick);
//вставка галереи на страницу
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

let lightbox;

function openModalLightbox(event) {
    lightbox = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`);
    lightbox.show();
};


function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        lightbox.close();
        window.removeEventListener('keydown', onEscKeyPress);
    };
};