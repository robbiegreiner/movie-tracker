import React, { Component } from 'react';
import fetchData from '../actions/index.js';
import key from '../../apikey.js';

export default class MovieIndex extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetchData(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`
    );
  }

  render() {
    return (
      <div>
      MOVIES
      </div>
    );
  }
}
