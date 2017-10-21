import React from "react";
import MovieCard from '../MovieCard';
import { shallow } from "enzyme";
import mockMovieData from '../../helpers/mockMovieData';

describe('MovieCard', () => {
  const movie = mockMovieData.results[0];
  const wrapper = shallow(<MovieCard
    title={movie.title}
    movie_id={movie.id}
    releaseDate={movie.release_date}
    overview={movie.overview}
    vote_average={movie.vote_average}
    poster_path={movie.poster_path}
    addFavorites={() => { jest.fn(); }} />);

  it('should render a card', () => {
    const card = wrapper.find('.movie-card');

    expect(card.length).toEqual(1);
  });

  it('should render an img', () => {
    const img = wrapper.find('img');

    expect(img.length).toEqual(1);
  });
});
