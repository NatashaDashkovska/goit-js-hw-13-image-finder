import { getImages } from './apiService';
import { refs } from './refs';

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  getImages(refs.inputRef.value);
});
