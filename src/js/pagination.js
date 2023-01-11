import fetchCountries from './fetch-countries-api';
import createMurkUp from './create-murk-up';

const listRef = document.querySelector('.js-pagination-box');
const dataBox = document.querySelector('.js-fetch-box');

export default function pagination(currentPage, allPages) {
  let murkUp = '';
  let beforeTwoPage = currentPage - 2;
  let beforeOnePage = currentPage - 1;
  let afterTwoPage = currentPage + 2;
  let afterOnePage = currentPage + 1;

  if (currentPage > 1) {
    murkUp += '<li><a href="#">1</a></li>';
  }
  if (currentPage > 4) {
    murkUp += '<li><a href="#">...</a></li>';
  }
  if (currentPage > 3) {
    murkUp += `<li><a href="#">${beforeTwoPage}</a></li>`;
  }
  if (currentPage > 2) {
    murkUp += `<li><a href="#">${beforeOnePage}</a></li>`;
  }
  murkUp += `<li>
        <a href="#">${currentPage}</a>
      </li>`;
  if (allPages - 1 > currentPage) {
    murkUp += `<li><a href="#">${afterOnePage}</a></li>`;
  }
  if (allPages - 2 > currentPage) {
    murkUp += `<li><a href="#">${afterTwoPage}</a></li>`;
  }
  if (allPages - 3 > currentPage) {
    murkUp += '<li><a href="#">...</a></li>';
  }
  murkUp += `<li>
        <a href="#">${allPages}</a>
      </li>`;

  listRef.innerHTML = murkUp;
}

listRef.addEventListener('click', renderPaginationMurkUp);

function renderPaginationMurkUp(evt) {
  evt.preventDefault;
  if (evt.target.nodeName !== 'A') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  const page = evt.target.textContent;
  fetchCountries(page).then(data => {
    const allPages = Math.ceil(data.totalHits / data.hits.length);
    console.log(allPages);
    createMurkUp(data.hits, dataBox);
    pagination(page, allPages);
  });
}
