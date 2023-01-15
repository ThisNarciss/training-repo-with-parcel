import fetchCountries from './fetch-countries-api';
import createMurkUp from './create-murk-up';
import countsAllPages from './countsAllPages';

const listRef = document.querySelector('.js-pagination-box');

let globalCurrentPage = 0;
let childIndex = 0;

listRef.addEventListener('click', renderPaginationMurkUp);

/**
 * Create pagination
 * @param {Number} currentPage
 * @param {Number} allPages
 * @return {String}
 */
export default function pagination(currentPage, allPages) {
  let murkUp = '';
  let beforeTwoPage = currentPage - 2;
  let beforeOnePage = currentPage - 1;
  let afterTwoPage = currentPage + 2;
  let afterOnePage = currentPage + 1;
  globalCurrentPage = currentPage;

  if (currentPage > 1) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-left btn-rotate"></button></li>';
  } else if (currentPage === 1) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-rotate link-pag--hidden" ></button></li>';
  }

  if (currentPage > 1) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag" >1</button></li>';
  }
  if (currentPage > 4) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag" >...</button></li>';
  }
  if (currentPage > 3) {
    murkUp += `<li class="item-pag"><button type="button" class="link-pag" >${beforeTwoPage}</button></li>`;
  }
  if (currentPage > 2) {
    murkUp += `<li class="item-pag"><button type="button" class="link-pag" >${beforeOnePage}</button></li>`;
  }
  murkUp += `<li class="item-pag">
        <button type="button" class="link-pag" >${currentPage}</button>
      </li>`;
  if (allPages - 1 > currentPage) {
    murkUp += `<li class="item-pag"><button type="button" class="link-pag" >${afterOnePage}</button></li>`;
  }
  if (allPages - 2 > currentPage) {
    murkUp += `<li class="item-pag"><button type="button" class="link-pag" >${afterTwoPage}</button></li>`;
  }
  if (allPages - 3 > currentPage) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag" >...</button></li>';
  }
  if (allPages > currentPage) {
    murkUp += `<li class="item-pag">
        <button type="button" class="link-pag" >${allPages}</button>
      </li>`;
  }

  if (allPages > currentPage) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-right"></button></li>';
  } else if (allPages === currentPage) {
    murkUp +=
      '<li class="item-pag"><button type="button" class="link-pag link-pag--btn link-pag--hidden"></button></li>';
  }

  listRef.innerHTML = murkUp;

  createAccentCurrentPage(currentPage, allPages);
}

function createAccentCurrentPage(page, allPages) {
  if (page === allPages) {
    childIndex = 5;
  } else if (page <= 5) {
    childIndex = 0;
    childIndex += page;
  }
  const firstRef = listRef.children[childIndex].firstElementChild;
  firstRef.classList.add('current');
}

function renderPaginationMurkUp(evt) {
  if (Boolean(evt.target.closest('.btn-right'))) {
    globalCurrentPage += 1;
    fetchCountries(globalCurrentPage).then(data => {
      createMurkUp(data.hits);
      pagination(
        globalCurrentPage,
        countsAllPages(data.totalHits, data.hits.length)
      );
    });
    return;
  }
  if (Boolean(evt.target.closest('.btn-left'))) {
    globalCurrentPage -= 1;
    fetchCountries(globalCurrentPage).then(data => {
      createMurkUp(data.hits);
      pagination(
        globalCurrentPage,
        countsAllPages(data.totalHits, data.hits.length)
      );
    });
    return;
  }

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }

  const page = Number(evt.target.textContent);

  fetchCountries(page).then(data => {
    createMurkUp(data.hits);
    pagination(page, countsAllPages(data.totalHits, data.hits.length));
  });
}
