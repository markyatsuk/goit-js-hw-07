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
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
    
};

//функция обработки при клике
function onGalleryClick(event){
    event.preventDefault();
    const isImgEl = event.target.classList.contains("gallery__image");

    if(!isImgEl){
        return;
    }

    openModalSimpleLightbox(event);
};

//функция с библиотекой-слайдером
function openModalSimpleLightbox(){
    let simpleLightbox = new SimpleLightbox('.gallery a',
        {
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            animationSpeed: 150,
            captionPosition: 'bottom',
            captionDelay: 250,
            enableKeyboard: true,  
        });
        simpleLightbox.open();
};
