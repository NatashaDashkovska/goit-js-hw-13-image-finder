import { refs } from './refs';
import { renderImageList } from './renderImages';
import { getNextPage } from './renderImages';
refs.btnRef.addEventListener('click', () => {
  getNextPage();
});
