import fetchCountries from './fetch-countries-api';
import createMurkUp from './create-murk-up';

const listRef = document.querySelector('.js-pagination-box');
const dataBox = document.querySelector('.js-fetch-box');
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

  if (currentPage > 1) {
    murkUp +=
      '<li class="item-pag"><a class="link-pag link-pag--btn " href=""><svg class="pag-icon pag-icon--reverse" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
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
      '<li class="item-pag"><a class="link-pag link-pag--btn " href=""><svg class="pag-icon" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
  } else if (allPages === currentPage) {
    murkUp +=
      '<li class="item-pag"><a class="link-pag link-pag--btn link-pag--hidden" href=""><svg class="pag-icon" width="30" height="30"><use href="/symbol-defs.a8b2e413.svg#icon-btn-arrow"></use></svg></a></li>';
  }

  listRef.innerHTML = murkUp;
  const firstRef = document.getElementById('first');
  firstRef.classList.add('current');
}

listRef.addEventListener('click', renderPaginationMurkUp);

function renderPaginationMurkUp(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'A') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  // if (evt.target)
  const page = Number(evt.target.textContent);
  fetchCountries(page).then(data => {
    const allPages = Math.ceil(data.totalHits / data.hits.length);
    console.log(allPages);
    createMurkUp(data.hits, dataBox);
    pagination(page, allPages);
    if (evt.target.textContent === page.toString()) {
      evt.target.classList.add('current');
      console.log(evt.target);
    }
  });
}
