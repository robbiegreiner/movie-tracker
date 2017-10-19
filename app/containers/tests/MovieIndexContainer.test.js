import configureStore from 'redux-mock-store';
import { shallow, mount, configure } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from '../MovieIndexContainer';
import MovieIndexContainer from '../MovieIndexContainer';
import MovieIndex from '../../components/movieIndex';
import React from 'react';
import * as actions from '../../actions';
import thunk from 'redux-thunk';

describe('MovieIndexContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureStore();
  const mockFn = jest.fn();
  const initialState = { movieList: [] };
  const store = mockStore(initialState, middlewares);
  actions.fetchData = () => ({type: 'FETCH_DATA_SUCCESS'});
  const wrapper = mount(<MovieIndexContainer
    store={store}
    movieList={initialState}
    retrieveMovies={mockFn}
  />);

  it('should have default state', () => {
    // console.log(wrapper.instance().props.movieList);

    expect(wrapper.instance().props.movieList).toEqual({ movieList: [] });
  });
});
