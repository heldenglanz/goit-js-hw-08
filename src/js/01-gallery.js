// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
let instance = '';
const photoSet = createPhotoMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", photoSet);
galleryContainer.addEventListener('click', clickOnTheImg);
console.log(createPhotoMarcup(galleryItems));

function createPhotoMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`<div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
            <img 
        class="gallery__image"
        src = "${preview}"
        data-source="${original}"
        alt = "${description}"
            /></a></div>`;
    }).join('');
};

// function clickOnTheImg(e) {
//     e.preventDefault();
//     if (e.target.nodeName !== 'IMG') {
//         return
//     }

// const large = e.target.dataset.source;
//     openedModal(large);
// }

// function openedModal(large) {
//     instance = simplelightbox.create(
//         `<img 
//         src="${large}"
//     />
// `);
//     instance.show();
//     window.addEventListener('keydown', pressedKey);
// }


function pressedKey(e) {
    if (e.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', pressedKey);
        console.log("Escape");
}
}
// Change code below this line

// console.log(galleryItems);
