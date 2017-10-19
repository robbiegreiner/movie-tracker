import * as actions from './index.js';
import mockMovieData from '../helpers/mockMovieData';

describe('actions', () => {
  it('should create an action to detect if data fetch succeeded', () => {
    const expectedAction = {
      type: 'FETCH_DATA_SUCCESS',
      movies: mockMovieData.results
    };

    expect(actions.fetchDataSuccess(mockMovieData.results)).toEqual(expectedAction);
  });

  it('should create an action to detect if user fetch succeeded', () => {
    const mockUser = { name: 'Lola' };
    const expectedAction = {
      type: 'FETCH_USER_SUCCESS',
      user: mockUser
    };

    expect(actions.fetchUserSuccess(mockUser)).toEqual(expectedAction);
  });

  it('should create an action to sign user out', () => {
    const expectedAction = {
      type: 'SIGN_OUT_USER'
    };

    expect(actions.signOutUser()).toEqual(expectedAction);
  });

  it('should create an action for login error', () => {
    const expectedAction = {
      type: 'LOGIN_ERROR',
      hasErrored: true
    };

    expect(actions.loginError(true)).toEqual(expectedAction);
  });
});
