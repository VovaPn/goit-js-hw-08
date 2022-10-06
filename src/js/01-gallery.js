import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryImages = galleryItems
    .map((item) => `<div class="gallery__item"><a class="gallery__link" 
  href="${item.original}"><img class="gallery__image" src="${item.preview}" 
  data-source="${item.original}" alt="${item.description}"></a></div>`)
	.join("");
  
	gallery.insertAdjacentHTML('afterbegin',galleryImages);
// const items = [];
// galleryItems.forEach(element => {
// 	const galleryItem = document.createElement('div')
// 	galleryItem.className = 'gallery__item'
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
//     galleryImage.className = 'gallery__image'
//     galleryImage.src = element.preview;
//     galleryImage.setAttribute('data-source', element.original)
//     galleryImage.alt = element.description;

// 	galleryItem.append(galleryLink)
// 	galleryLink.append(galleryImage)
// 	items.push(galleryItem)
// })

// gallery.append(...items)

gallery.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') {
		return
	};

	const selectedImage = e.target.getAttribute('data-source');
	const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`);
	instance.show();
    
	gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
});

new SimpleLightbox('.gallery a', {
});
