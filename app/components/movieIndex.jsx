import React, { Component } from 'react';
import fetchData from '../actions/index.js';
import key from '../../apikey.js';

export default class MovieIndex extends Component {

  componentDidMount() {
    console.log('getting movies')
    this.props.retrieveMovies();
  }



  // componentDidMount() {
  //   fetchData(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`
  //   );
  // }

  render() {
    console.log(this.props)
    return (
      <div>
      MOVIES
      </div>
    );
  }
}
