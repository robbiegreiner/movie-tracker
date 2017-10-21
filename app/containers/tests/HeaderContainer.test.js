import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import HeaderContainer from '../HeaderContainer';
import Header from '../../components/Header';
import React from 'react';
import * as actions from '../../actions';
import { withRouter } from 'react-router';
import { MemoryRouter as Router, Link} from 'react-router-dom';
import createRouterContext from 'react-router-test-context';
import renderer from 'react-test-renderer';

//this test is not passing and comes up with several errors
//related to router. I'm tried various combos of the router imports


describe('HeaderContainer', () => {
  const mockStore = configureStore();
  const initialState = {
    user: {},
    userStatus: ''
  };
  const mockHandleSignOut = jest.fn();
  const store = mockStore(initialState);
  const WrappedContainer = withRouter(<Header
    store={store}
    user={initialState.user}
    userStatus={initialState.userStatus}
    handleSignOut={mockHandleSignOut}/>);
  // const wrapper = mount(<Router><WrappedContainer /></Router>);
  const context = createRouterContext();
  const wrapper = renderer.create(<Router><WrappedContainer /></Router>, { context });
  // const wrapper = mount(<HeaderContainer
  //   store={store}
  //   user={initialState.user}
  //   userStatus={initialState.userStatus}
  //   handleSignOut={mockHandleSignOut}/>);


  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
  });
});
