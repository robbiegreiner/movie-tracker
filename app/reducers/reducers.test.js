import movieList from './movielist';
import user from './user';
import userStatus from './userStatus';
import mockMovieData from '../helpers/mockMovieData';
import createUserError from './createUserError';
import favorites from './favorites';
import loginError from './loginError';

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

describe('createUserError reducer', () => {
  it('should have a default state', () => {
    expect(createUserError(undefined, {})).toEqual(false);
  });

  it('should return true if there was an error', () => {
    const action = { type: 'CREATE_USER_ERROR', createUserError: true };

    expect(createUserError(undefined, action)).toEqual(true);
  });

  it('should return false if create user success', () => {
    const action = { type: 'FETCH_USER_SUCCESS', user: mockUser };

    expect(createUserError(undefined, action)).toEqual(false);
  });
});

describe('favorites reducer', () => {
  it('should have a default state', () => {
    expect(favorites(undefined, {})).toEqual([]);
  });

  it('should return updated favorites array when a fave is added', () => {
    const action = { type: 'ADD_FAVORITE', favorite: { title: 'IT' } };
    const expected = [{ title: 'IT' }];

    expect(favorites(undefined, action)).toEqual(expected);
  });
});

describe('loginError reducer', () => {
  it('should have a default state', () => {
    expect(loginError(undefined, {})).toEqual(false);
  });

  it('should return true if there was an error', () => {
    const action = { type: 'LOGIN_ERROR', hasErrored: true };

    expect(loginError(undefined, action)).toEqual(true);
  });
});
