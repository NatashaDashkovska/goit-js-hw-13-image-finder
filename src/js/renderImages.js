import { refs } from './refs';
import imageTemplate from '../templates/image.hbs';

export function renderImageList(list) {
  refs.galleryRef.insertAdjacentHTML('beforeend', imageTemplate(list));
}
