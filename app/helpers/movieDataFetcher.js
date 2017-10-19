import apikey from '../../apikey.js';
import MovieDataCleaner from './movieDataCleaner';


const movieDataFetcher = () => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US`)
    .then(response => response.json())
    // .then(response => console.log(response))
    // .then(responseJSON => responseJSON.results)
    // .then(moviesArray => MovieDataCleaner(moviesArray));
};

export default movieDataFetcher;
