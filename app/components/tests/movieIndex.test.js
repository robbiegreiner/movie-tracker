import React from "react";
import MovieIndex from '../movieIndex';
import { shallow } from "enzyme";
import mockMovieData from '../../helpers/mockMovieData';

describe('MovieIndex', () => {
  const mockFn = jest.fn();
  const emptyWrapper = shallow(<MovieIndex movieList={[]}
    retrieveMovies={mockFn}/>);

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
    retrieveMovies={mockFn}/>);

  it('should render same amount of movies as passed', () => {
    const cards = wrapper.find('MovieCard');

    expect(cards.length).toEqual(mockMovieData.results.length);
  });

  it('should call function when mounted', () => {
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should render an error if passed one', () => {
  //   const altWrapper = shallow(<MovieIndex userStatus=''
  //     retrieveMovies={mockFn}
  //     fetchDataError={true}/>);
  //   const error = altWrapper.find('div');
  //
  //   expect(error.text()).toEqual(console.log('fetch data error'));
  //   expect(altWrapper).toMatchSnapshot();
  // });
});
