import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import FavoritesContainer from '../FavoritesContainer';
import MovieIndex from '../../components/movieIndex';
import React from 'react';
import * as actions from '../../actions';
import thunk from 'redux-thunk';
import mockMovieData from '../../helpers/mockMovieData';
import movieDataCleaner from '../../helpers/movieDataCleaner';

describe('FavoritesContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore();
  const mockRetrieveMovies = jest.fn();
  const mockSendFavorite = jest.fn();
  const mockRetrieveFavorites = jest.fn();
  const initialState = {
    movieList: [],
    fetchDataError: false,
    user: {},
    favorites: []
  };
  const store = mockStore(initialState, middlewares);
  actions.fetchData = () => ({type: 'FETCH_DATA_SUCCESS'});
  actions.postFavorites = () => ({ type: 'ADD_FAVORITE' });
  actions.favoritesGetter = () => ({ type: 'GET_ALL_FAVORITES' });
  actions.removeFromFaves = () => ({ type: 'DELETE_FAVORITE'});
  const wrapper = mount(<FavoritesContainer
    store={store}
    movieList={initialState.movieList}
    fetchDataError={initialState.fetchDataError}
    user={initialState.user}
    favorites={initialState.favorites}
    retrieveMovies={mockRetrieveMovies}
    sendFavorite={mockSendFavorite}
    retrieveFavorites={mockRetrieveFavorites}
  />);

  it('should have default state', () => {

    expect(wrapper.instance().props.movieList).toEqual([]);
    expect(wrapper.instance().props.fetchDataError).toEqual(false);
    expect(wrapper.instance().props.user).toEqual({});
    expect(wrapper.instance().props.favorites).toEqual([]);
  });

  it('should fire actions', () => {
    const movieArray = movieDataCleaner(mockMovieData.results);
    const altWrapper = mount(<MovieIndex
      store={store}
      movieList={movieArray}
      fetchDataError={initialState.fetchDataError}
      user={{ name: 'Lola'}}
      favorites={initialState.favorites}
      retrieveMovies={mockRetrieveMovies}
      sendFavorite={mockSendFavorite}
      retrieveFavorites={mockRetrieveFavorites}
    />);

    const faveBtn = altWrapper.find('.fav-btn').first();

    faveBtn.simulate('click');
    expect(mockRetrieveMovies).toHaveBeenCalledTimes(1);
    expect(mockSendFavorite).toHaveBeenCalledTimes(1);
    expect(mockRetrieveFavorites).toHaveBeenCalledTimes(1);
  });
});
