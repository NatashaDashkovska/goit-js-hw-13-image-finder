import axios from 'axios';

import { refs } from './refs';

import imageTemplate from '../templates/image.hbs';

const token = '29058124-a322c4fcd8952bb4320420928';
const query = 'cat';
const page = 1;
const url =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${token}';

axios
  .get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${token}`
  )
  .then(function (response) {
    // console.log(response.data.hits);
    renderImageList(response.data.hits);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log('loader');
  });

function renderImageList(list) {
  console.log(list);
  // list.map(el => console.log(imageTemplate(el)));
  refs.galleryRef.insertAdjacentHTML('beforeend', imageTemplate(list));
}
