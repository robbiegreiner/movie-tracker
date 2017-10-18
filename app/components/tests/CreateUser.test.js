import React from "react";
import CreateUser from '../CreateUser';
import { shallow } from "enzyme";

describe('CreateUser page', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<CreateUser userStatus=''
    createNewUser={mockFn}/>);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have an empty default state', () => {
    expect(wrapper.state().name).toEqual('');
    expect(wrapper.state().email).toEqual('');
    expect(wrapper.state().password).toEqual('');
  });

  it('should render four inputs', () => {
    const inputs = wrapper.find('input');

    expect(inputs.length).toEqual(4);
  });

  it('should change state on input', () => {
    const nameInput = wrapper.find('.name-input');
    const emailInput = wrapper.find('.email-input');
    const passwordInput = wrapper.find('.password-input');

    nameInput.simulate('change', { target: { value: 'Lola' } });
    emailInput.simulate('change', { target: { value: 'lolabrenner@gmail.com' } });
    passwordInput.simulate('change', { target: { value: 'complete' } });
    expect(wrapper.state().name).toEqual('Lola');
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
});
