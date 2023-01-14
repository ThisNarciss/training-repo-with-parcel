import fetchCountries from './fetch-countries-api';
import createMurkUp from './create-murk-up';

const listRef = document.querySelector('.js-pagination-box');
const dataBox = document.querySelector('.js-fetch-box');
let globalCurrentPage = 0;
let childIndex = 0;

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
      '<li class="item-pag"><a class="link-pag link-pag--btn btn-left" href=""><svg class="pag-icon pag-icon--reverse" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
  } else if (currentPage === 1) {
    murkUp +=
      '<li class="item-pag"><a class="link-pag link-pag--btn link-pag--hidden" href=""><svg class="pag-icon pag-icon--reverse" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
  }

  if (currentPage > 1) {
    murkUp +=
      '<li class="item-pag"><a id="first" class="link-pag" href="">1</a></li>';
  }
  if (currentPage > 4) {
    murkUp +=
      '<li class="item-pag"><a id="first" class="link-pag" href="">...</a></li>';
  }
  if (currentPage > 3) {
    murkUp += `<li class="item-pag"><a id="first" class="link-pag" href="">${beforeTwoPage}</a></li>`;
  }
  if (currentPage > 2) {
    murkUp += `<li class="item-pag"><a id="first" class="link-pag" href="">${beforeOnePage}</a></li>`;
  }
  murkUp += `<li class="item-pag">
        <a id="first" class="link-pag" href="">${currentPage}</a>
      </li>`;
  if (allPages - 1 > currentPage) {
    murkUp += `<li class="item-pag"><a id="first" class="link-pag" href="">${afterOnePage}</a></li>`;
  }
  if (allPages - 2 > currentPage) {
    murkUp += `<li class="item-pag"><a id="first" class="link-pag" href="">${afterTwoPage}</a></li>`;
  }
  if (allPages - 3 > currentPage) {
    murkUp +=
      '<li class="item-pag"><a id="first" class="link-pag" href="">...</a></li>';
  }
  if (allPages > currentPage) {
    murkUp += `<li class="item-pag">
        <a id="first" class="link-pag" href="">${allPages}</a>
      </li>`;
  }

  if (allPages > currentPage) {
    murkUp +=
      '<li class="item-pag"><a class="link-pag link-pag--btn btn-right" href=""><svg class="pag-icon" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
  } else if (allPages === currentPage) {
    murkUp +=
      '<li class="item-pag"><a class="link-pag link-pag--btn link-pag--hidden" href=""><svg class="pag-icon" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
  }

  listRef.innerHTML = murkUp;

  createAccentCurrentPage(currentPage);
}

function createAccentCurrentPage(val) {
  if (currentPage === allPages) {
    childIndex = 5;
  } else if (currentPage <= 5) {
    childIndex = 0;
    childIndex += currentPage;
  }

  const firstRef = listRef.children[childIndex].firstElementChild;
  firstRef.classList.add('current');
}

listRef.addEventListener('click', renderPaginationMurkUp);

function renderPaginationMurkUp(evt) {
  evt.preventDefault();

  if (evt.target.closest('.btn-right')) {
    if (evt.target.closest('.btn-right').classList.contains('btn-right')) {
      globalCurrentPage += 1;
      fetchCountries(globalCurrentPage).then(data => {
        const allPages = Math.ceil(data.totalHits / data.hits.length);

        createMurkUp(data.hits, dataBox);
        pagination(globalCurrentPage, allPages);
      });
      return;
    }
  }
  if (evt.target.closest('.btn-left')) {
    if (evt.target.closest('.btn-left').classList.contains('btn-left')) {
      globalCurrentPage -= 1;
      fetchCountries(globalCurrentPage).then(data => {
        const allPages = Math.ceil(data.totalHits / data.hits.length);

        createMurkUp(data.hits, dataBox);
        pagination(globalCurrentPage, allPages);
      });
      return;
    }
  }

  if (evt.target.nodeName !== 'A') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }

  const page = Number(evt.target.textContent);

  fetchCountries(page).then(data => {
    const allPages = Math.ceil(data.totalHits / data.hits.length);
    createMurkUp(data.hits, dataBox);
    pagination(page, allPages);
  });
}
