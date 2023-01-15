const dataBox = document.querySelector('.js-fetch-box');

export default function createMurkUp(data) {
  const murkUp = data
    .map(img => {
      return `<div class="box"><a class="large-image" href="#" data-large="${img.largeImageURL}"><img class="box-img" src="${img.webformatURL}" alt="${img.tags}" width="400px" ></a><p>${img.tags}</p></div>`;
    })
    .join('');

  dataBox.innerHTML = murkUp;
}
