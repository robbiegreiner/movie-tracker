import movieList from './movielist';
import user from './user';
import userStatus from './userStatus';
import mockMovieData from '../helpers/mockMovieData';

describe('movieList reducer', () => {
  it('should have a default state', () => {
    expect(movieList(undefined, {})).toEqual([]);
  });
});
