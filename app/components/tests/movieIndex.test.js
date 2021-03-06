import React from "react";
import MovieIndex from '../movieIndex';
import { shallow } from "enzyme";
import mockMovieData from '../../helpers/mockMovieData';

describe('MovieIndex', () => {
  const mockFn = jest.fn();
  const emptyWrapper = shallow(<MovieIndex movieList={[]}
    retrieveMovies={mockFn}
    retrieveFavorites={mockFn}
    user={{ id: 4 }}
    favorites={[]}/>);

  it('should exist but have no movies', () => {
    const div = emptyWrapper.find('.movie-list');
    const cards = emptyWrapper.find('MovieCard');

    expect(div.length).toEqual(1);
    expect(cards.length).toEqual(0);
  });

  it('should match snapshot', () => {
    expect(emptyWrapper).toMatchSnapshot();
  });

  const wrapper = shallow(<MovieIndex
    movieList={mockMovieData.results}
    retrieveMovies={mockFn}
    retrieveFavorites={mockFn}
    user={{ id: 4 }}
    favorites={[]}/>);

  it('should render same amount of movies as passed', () => {
    const cards = wrapper.find('MovieCard');

    expect(cards.length).toEqual(mockMovieData.results.length);
  });

  it('should call function when mounted', () => {
    expect(mockFn).toHaveBeenCalledTimes(4);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
