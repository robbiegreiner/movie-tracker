import React from "react";
import MovieCard from '../MovieCard';
import { shallow } from "enzyme";
import mockMovieData from '../../helpers/mockMovieData';

//will need a test for favorites button when we get done with iter 2

describe('MovieCard', () => {
  const movie = mockMovieData.results[0];
  const wrapper = shallow(<MovieCard
    movie={movie}
    addFavorites={() => { jest.fn(); }} />);

  it('should render a card', () => {
    const card = wrapper.find('.movie-card');

    expect(card.length).toEqual(1);
  });

  it('should render an img', () => {
    const img = wrapper.find('img');

    expect(img.length).toEqual(1);
    expect(img.html().includes(movie.poster_path)).toEqual(true);
  });

  it('should render a release date', () => {
    const release = wrapper.find('.release');

    expect(release.length).toEqual(1);
    expect(release.text()).toEqual(movie.release_date);
  });

  it('should render a score', () => {
    const score = wrapper.find('.score');

    expect(score.length).toEqual(1);
    expect(score.text()).toEqual(`${movie.vote_average}`);
  });

  it('should render an overview', () => {
    const overview = wrapper.find('p');

    expect(overview.length).toEqual(1);
    expect(overview.text()).toEqual(movie.overview);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
