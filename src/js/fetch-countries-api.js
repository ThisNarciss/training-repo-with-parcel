export default function fetchCountriesApi(page = 1) {
  return fetch(
    `https://pixabay.com/api/?key=32144711-033503d2fc66376fdc1e9e47c&q=beautiful+girl&image_type=photo&orientation=horizontal&page=${page}&per_page=20`
  ).then(resp => resp.json());
}
