import React from "react";
import LogIn from '../LogIn';
import { shallow } from "enzyme";

describe('Login page', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LogIn userStatus=''
      retrieveUser={mockFn}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have an empty default state', () => {
    expect(wrapper.state().email).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should render three inputs', () => {
    const inputs = wrapper.find('input');

    expect(inputs.length).toEqual(3);
  });

  it('should change state on input', () => {
    const emailInput = wrapper.find('.email-input');
    const passwordInput = wrapper.find('.password-input');

    emailInput.simulate('change', { target: { value: 'lolabrenner@gmail.com' } });
    passwordInput.simulate('change', { target: { value: 'complete' } });
    expect(wrapper.state().email).toEqual('lolabrenner@gmail.com');
    expect(wrapper.state().password).toEqual('complete');
  });

  it('should run function on submit', () => {
    const button = wrapper.find('input').last();

    button.simulate('click', { preventDefault() {} });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an error if passed one', () => {
    const altWrapper = shallow(<LogIn userStatus=''
      retrieveUser={mockFn}
      loginError={true}/>);
    const error = altWrapper.find('h4');

    expect(error.text()).toEqual('Email and Password do not match');
    expect(altWrapper).toMatchSnapshot();
  });
});
