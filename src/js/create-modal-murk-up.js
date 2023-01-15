const backdrop = document.querySelector('.backdrop');

export default function createModalMurkUp(href) {
  const murkUp = `<div class="modal"><img class="modal-img box-img" src="${href}" alt=""></div>`;
  backdrop.innerHTML = murkUp;
}
