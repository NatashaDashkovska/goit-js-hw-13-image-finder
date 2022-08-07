import { refs } from './refs';
import imageTemplate from '../templates/image.hbs';
import { getImages } from './apiService';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';

export function renderImageList(list) {
  if (list.length === 0) {
    error({
      text: 'Try something else!',
      modules: new Map([...defaultModules, [PNotifyDesktop, {}]]),
    });
    refs.btnRef.classList.add('hidden');
    refs.upBtnRef.classList.add('hidden');
    return;
  } else {
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
