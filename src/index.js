import fetchCountries from './js/fetch-countries-api';
import pagination from './js/pagination';
import createMurkUp from './js/create-murk-up';
// import createModalMurkUp from './js/create-modal-murk-up';

// const backdrop = document.querySelector('.backdrop');

fetchCountries().then(data => {
  const allPages = Math.ceil(data.totalHits / data.hits.length);
  createMurkUp(data.hits);
  pagination(1, allPages);
  // const link = document.querySelectorAll('.large-image');

  // for (let i = 0; i < link.length; i += 1) {
  //   const element = link[i];
  //   element.addEventListener('click', evt => {
  //     console.log(evt.currentTarget.dataset.large);
  //     evt.preventDefault();
  //     createModalMurkUp(evt.currentTarget.dataset.large);
  //     backdrop.classList.remove('is-hidden');
  //   });
  // }
  // console.log(link);
  // console.log('dsa');
});

// backdrop.addEventListener('click', evt => {
//   if (!evt.target.classList.contains('backdrop')) {
//     return;
//   }
//   const isMenuOpen = backdrop.getAttribute('aria-expanded') === 'true' || false;
//   backdrop.setAttribute('aria-expanded', !isMenuOpen);
//   backdrop.classList.add('is-hidden');

//   const scrollLockMethod = !isMenuOpen
//     ? 'disableBodyScroll'
//     : 'enableBodyScroll';
//   bodyScrollLock[scrollLockMethod](document.body);
// });
