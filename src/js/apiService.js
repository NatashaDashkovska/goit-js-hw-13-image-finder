import axios from 'axios';

const token = '29058124-a322c4fcd8952bb4320420928';

axios.defaults.baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export function getImages(query, page) {
  return axios.get(`&q=${query}&page=${page}&per_page=12&key=${token}`);
}
