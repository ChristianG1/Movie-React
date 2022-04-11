import placeholder from '../assets/img/placeholder.png';

export function getImage(path, width) {
  return path 
  ? `https://image.tmdb.org/t/p/w${width}${path}`
  : placeholder;
}