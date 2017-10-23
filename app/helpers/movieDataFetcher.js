import apikey from '../../apikey.js';

const movieDataFetcher = () => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US`);
};

export default movieDataFetcher;
