import React from 'react';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import { mount } from 'enzyme';
import HeaderContainer from '../HeaderContainer';
import Header from '../../components/Header';

describe('HeaderContainer', () => {
  const mockStore = configureStore();
  const initialState = {
    user: {},
    userStatus: ''
  };
  const mockHandleSignOut = jest.fn();
  const store = mockStore(initialState);
  const context = createRouterContext();

  HeaderContainer.contextTypes = {
    router: PropTypes.object
  };

  const wrapper = mount(<HeaderContainer
    store={store}
    user={initialState.user}
    userStatus={initialState.userStatus}
    handleSignOut={mockHandleSignOut}/>, { context });


  it('should have a default state', () => {
    expect(wrapper.instance().props.user).toEqual({});
    expect(wrapper.instance().props.userStatus).toEqual('');
  });

  it('should fire actions', () => {
    Header.contextTypes = {
      router: PropTypes.object
    };
    const altWrapper = mount(<Header
      store={store}
      user={{ name: 'Lola' }}
      userStatus={initialState.userStatus}
      handleSignOut={mockHandleSignOut}/>, { context });
    const signOut = altWrapper.find('.signout').first();

    signOut.simulate('click');
    expect(mockHandleSignOut).toHaveBeenCalledTimes(1);
  });
});
