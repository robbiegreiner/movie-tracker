class movieDataCleaner {
  //constructor(url)
  constructor() {
    this.movies = this.cleanData([]);
  }

  fetchData = () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ae328e93030c86dea9c76285dbb0fafd&language=en-US`)
      .then(response => response.json())
      .then(responseJSON => responseJSON.results)
      .then(movieData => dispatch(fetchDataSuccess(movieData)));
  };

// we should probably import this into actions

  cleanData(movieData) {
    this.fetchData();
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
}


export default movieDataCleaner;
