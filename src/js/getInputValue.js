import { getImages } from './apiService';
import { refs } from './refs';
import { render } from './renderImages';

let query = '';

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  if (query != '' && query != refs.inputRef.value) {
    refs.galleryRef.textContent = '';
  }
  render(refs.inputRef.value, 1);
  query = refs.inputRef.value;
  refs.inputRef.value = '';
});
