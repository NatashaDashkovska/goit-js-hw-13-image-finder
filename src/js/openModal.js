import * as basicLightbox from 'basiclightbox';
import { refs } from './refs';

refs.galleryRef.addEventListener('click', openModal);

function openModal(event) {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  const image = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${image}" >
`);

  instance.show();
}
