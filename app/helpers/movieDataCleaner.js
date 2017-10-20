const movieDataCleaner = (movieData) => {
  return movieData.map(movie => {
    return Object.assign({}, {
      movie_id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      overview: movie.overview,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path
    });
  });
};


export default movieDataCleaner;
