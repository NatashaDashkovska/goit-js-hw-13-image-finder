import { refs } from './refs';
import imageTemplate from '../templates/image.hbs';
import { getImages } from './apiService';

export function renderImageList(list) {
  refs.galleryRef.insertAdjacentHTML('beforeend', imageTemplate(list));

  const timer = setTimeout(() => {
    refs.btnRef.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
    refs.btnRef.classList.remove('hidden');
    refs.upBtnRef.classList.remove('hidden');
  }, 600);
}

let queryPage = 1;
let queryWord = '';

export function render(query, page) {
  return getImages(query, page)
    .then(res => {
      renderImageList(res.data.hits);
      // console.log(res.data.hits);
      queryWord = query;
      queryPage = page;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function getNextPage() {
  queryPage += 1;
  render(queryWord, queryPage);
}
