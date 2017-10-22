import movieDataCleaner from '../movieDataCleaner';
import mockMovieData from '../mockMovieData';

describe('movieDataCleaner', () => {
  const { results } = mockMovieData;
  const cleanData = movieDataCleaner(results);

  it('should maintain necessary info', () => {
    const firstDirtyObj = results[0];

    expect(firstDirtyObj.title).toEqual(cleanData[0].title);
    expect(firstDirtyObj.id).toEqual(cleanData[0].movie_id);
    expect(firstDirtyObj.release_date).toEqual(cleanData[0].release_date);
    expect(firstDirtyObj.overview).toEqual(cleanData[0].overview);
    expect(firstDirtyObj.vote_average).toEqual(cleanData[0].vote_average);
    expect(firstDirtyObj.poster_path).toEqual(cleanData[0].poster_path);
  });

  it('should return an array of the same length', () => {
    expect(cleanData.length).toEqual(results.length);
  });

  it('should get rid of unnecessary info', () => {
    results.forEach(movie => {
      expect(movie.popularity).toBeDefined();
      expect(movie.video).toBeDefined();
      expect(movie.adult).toBeDefined();
    });
    cleanData.forEach(movie => {
      expect(movie.popularity).toBeUndefined();
      expect(movie.video).toBeUndefined();
      expect(movie.adult).toBeUndefined();
    });
  });
});
