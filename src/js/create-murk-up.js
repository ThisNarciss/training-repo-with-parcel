export default function createMurkUp(data, murkUpBox) {
  const murkUp = data
    .map(img => {
      return `<div class="box"><img src="${img.webformatURL}" alt="${img.tags}" ><p>${img.tags}</p></div>`;
    })
    .join('');

  murkUpBox.innerHTML = murkUp;
}
