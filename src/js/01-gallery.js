// Add imports above this line

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems }  from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);
galleryContainer.addEventListener('click', clickOnTheImg);

console.log(createPhotoMarcup(galleryItems));

function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
    
};

function clickOnTheImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
}

let gallery = new SimpleLightbox('.gallery a', {
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
});