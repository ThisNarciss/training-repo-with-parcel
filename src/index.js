import fetchCountries from './js/fetch-countries-api';
import pagination from './js/pagination';
import createMurkUp from './js/create-murk-up';

const dataBox = document.querySelector('.js-fetch-box');

fetchCountries().then(data => {
  const allPages = Math.ceil(data.totalHits / data.hits.length);

  createMurkUp(data.hits, dataBox);
  pagination(1, allPages);
});
