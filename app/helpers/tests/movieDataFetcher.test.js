import movieDataFetcher from '../movieDataFetcher';
import mockMovieData from '../mockMovieData';
import fetchMock from 'fetch-mock';
import apikey from '../../../apikey.js';



describe('movieDataFetcher', () => {
  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      }, 0);
    });
  };

  beforeEach( async () => {
    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US`, {
      status: 200,
      body: mockMovieData
    });
  });

  it('should return the array from the results key', async () => {
    const movieDataArray = movieDataFetcher();

    await pause();

    // expect(movieDataArray).toEqual()

    // expect(movieDataArray).toEqual(mockMovieData.results);
  });
});
