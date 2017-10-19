import movieDataFetcher from '../movieDataFetcher';
import mockMovieData from '../mockMovieData';
import fetchMock from 'fetch-mock';
import apikey from '../../../apikey.js';
import movieDataCleaner from '../movieDataCleaner';




describe('movieDataFetcher', () => {
  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  };

  const delay = () => new Promise((res, rej) => setTimeout(res, 3000));

  beforeEach( async () => {
    fetchMock.mock(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US`, {
      status: 200,
      body: mockMovieData
    });
  });

  it('should return the array from the results key', async () => {

    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US`, delay().then(() => ({
      status: 200,
      body: mockMovieData
    })));
    await pause();
    const movieDataArray = movieDataFetcher();

    await pause();

    console.log(movieDataArray);
    // console.log(mockMovieData);

    // expect(movieDataArray).toEqual()

    expect(movieDataArray).toEqual(mockMovieData);
  });
});
