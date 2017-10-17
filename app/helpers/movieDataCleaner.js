class movieDataCleaner {
  //constructor(url)
  constructor(movieData) {
    // this.movies = this.cleanData(this.fetchData(url))
    this.movies = this.cleanData(movieData);
  }

  //fetchData() {
  //do the fetching
// }

// the thing fetchData should return is the array from the results property

  cleanData(movieData) {
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
