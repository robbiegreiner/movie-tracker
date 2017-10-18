const movieDataCleaner = (movieData) => {
    return movieData.map(movie => {
      return Object.assign({}, {
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        summary: movie.overview,
        score: movie.vote_average,
        img: movie.poster_path
      });
    });
  }


export default movieDataCleaner;
