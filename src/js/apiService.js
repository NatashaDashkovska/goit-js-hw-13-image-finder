import axios from 'axios';
import { renderImageList } from './renderImages';

const token = '29058124-a322c4fcd8952bb4320420928';
axios.defaults.baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export async function getImages(query, page = 1) {
  return await axios
    .get(`&q=${query}&page=${page}&per_page=12&key=${token}`)
    .then(res => renderImageList(res.data.hits))
    .catch(function (error) {
      console.log(error);
    });
}
