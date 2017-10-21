import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import CreateUserContainer from '../CreateUserContainer';
import CreateUser from '../../components/CreateUser';
import React from 'react';

describe('CreateUser Container', () => {
  const mockStore = configureStore();
  const initialState = {
    userStatus: '',
    createUserError: false
  };
  const mockCreateNewUser = jest.fn();
  const store = mockStore(initialState);
  const wrapper = mount(<CreateUserContainer
    store={store}
    userStatus={initialState.userStatus}
    createUserError={initialState.createUserError}
    createNewUser={mockCreateNewUser}/>);

  it('should have a default state', () => {
    expect(wrapper.instance().props.userStatus).toEqual('');
    expect(wrapper.instance().props.createUserError).toEqual(false);
  });

  it('should fire actions', () => {
    const altWrapper = mount(<CreateUser
      store={store}
      userStatus={initialState.userStatus}
      createUserError={initialState.createUserError}
      createNewUser={mockCreateNewUser}/>);
    const button = altWrapper.find('.form-button');

    button.simulate('click');
    expect(mockCreateNewUser).toHaveBeenCalledTimes(1);
  });



});
