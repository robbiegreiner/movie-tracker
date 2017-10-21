import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import LogInContainer from '../LogInContainer';
import LogIn from '../../components/LogIn';
import React from 'react';

describe('LogInContainer', () => {
  const mockStore = configureStore();
  const initialState = {
    userStatus: '',
    loginError: false
  };
  const mockRetrieveUser = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<LogInContainer
    store={store}
    userStatus={initialState.userStatus}
    loginError={initialState.loginError}
    retrieveUser={mockRetrieveUser}/>);

  it('should have default state', () => {
    expect(wrapper.instance().props.userStatus).toEqual('');
    expect(wrapper.instance().props.loginError).toEqual(false);
  });

  it('should fire an action', () => {
    const altWrapper = mount(<LogIn
      store={store}
      userStatus={initialState.userStatus}
      loginError={initialState.loginError}
      retrieveUser={mockRetrieveUser}/>);

    const button = altWrapper.find('input').last();

    button.simulate('click');
    expect(mockRetrieveUser).toHaveBeenCalledTimes(1);
  });
});
