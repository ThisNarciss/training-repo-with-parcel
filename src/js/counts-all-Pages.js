export default function countsAllPages(totalHits, hitsLength) {
  return Math.ceil(totalHits / hitsLength);
}
