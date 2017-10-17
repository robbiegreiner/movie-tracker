import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import MovieIndexContainer from '../containers/MovieIndexContainer';
import LogInContainer from '../containers/LogInContainer';
import CreateUserContainer from '../containers/CreateUserContainer';
import FavoritesContainer from '../containers/FavoritesContainer';




export default class App extends Component {

  render() {
    return (
      <div>
        Works!
        {/* <Route path="/" component={ HeaderContainer }/>
        <Route exact path="/" component={ MovieIndexContainer }/>
        <Route path="/login" component={ LogInContainer }/>
        <Route path="/createuser" component={ CreateUserContainer }/>
        <Route path="/favorites" component={ FavoritesContainer }/> */}
      </div>
    );
  }
}

//components- header/nav, movie index, movie card, login page, create user page
