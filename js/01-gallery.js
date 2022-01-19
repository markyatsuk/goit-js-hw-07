import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryEl.addEventListener("click", onGalleryClick);
galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);


function onGalleryClick(event){
    // event.preventDefault();
    const isImgEl = event.target.classList.contains("gallery__image");

    if(!isImgEl){
        return;
    }

    const urlOriginal = event.target.dataset.source;
    console.log(urlOriginal);
    const getAttribute = event.target.getAttribute("src");
    const isBigImg = getAttribute == urlOriginal ? true : false;
    console.log(isBigImg)
}




// console.log(galleryItems);
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
}