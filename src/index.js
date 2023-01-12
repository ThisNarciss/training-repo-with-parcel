import fetchCountries from './js/fetch-countries-api';
import pagination from './js/pagination';
import createMurkUp from './js/create-murk-up';

const dataBox = document.querySelector('.js-fetch-box');

fetchCountries().then(data => {
  console.log(data);
  const allPages = Math.ceil(data.totalHits / data.hits.length);

  console.log(allPages);
  createMurkUp(data.hits, dataBox);

  pagination(1, allPages);
});
