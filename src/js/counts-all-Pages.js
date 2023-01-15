export default function countsAllPages(totalHits, hitsLength) {
  return (allPages = Math.ceil(totalHits / hitsLength));
}
