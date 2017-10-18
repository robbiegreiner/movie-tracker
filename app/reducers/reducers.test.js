import movieList from './movielist';
import user from './user';
import userStatus from './userStatus';
import mockMovieData from '../helpers/mockMovieData';

const mockUser = { name: 'Lola' };

describe('movieList reducer', () => {
  it('should have a default state', () => {
    expect(movieList(undefined, {})).toEqual([]);
  });

  it('should give an array of movies when passed info', () => {
    const action = { type: 'FETCH_DATA_SUCCESS', movies: mockMovieData.results };

    expect(movieList(undefined, action)).toEqual(mockMovieData.results);
  });
});

describe('user reducer', () => {
  it('should have a default state', () => {
    expect(user(undefined, {})).toEqual({});
  });

  it('should return a user when passed info', () => {
    const action = { type: 'FETCH_USER_SUCCESS', user: mockUser };

    expect(user(undefined, action)).toEqual(mockUser);
  });
});

describe('userStatus reducer', () => {
  it('should have a default state', () => {
    expect(userStatus(undefined, {})).toEqual('');
  });

  it('should return true if fetch user success', () => {
    const action = { type: 'FETCH_USER_SUCCESS', user: mockUser };

    expect(userStatus(undefined, action)).toEqual(true);
  });
});
