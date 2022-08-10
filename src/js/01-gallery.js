// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);

console.log(createPhotoMarcup(galleryItems));

function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
    
};



let gallery = new SimpleLightbox('.gallery a',{
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
    docClose: true,
});

