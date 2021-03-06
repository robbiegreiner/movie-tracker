import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import LogInContainer from '../LogInContainer';
import LogIn from '../../components/LogIn';
import React from 'react';
import * as actions from '../../actions';

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
    const emailInput = altWrapper.find('.email-input');
    const passwordInput = altWrapper.find('.password-input');

    emailInput.simulate('change', { target: { value: 'lola@aol.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });
    button.simulate('click');
    expect(mockRetrieveUser).toHaveBeenCalledTimes(1);
  });
});
