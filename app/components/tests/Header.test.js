import React from "react";
import Header from '../Header';
import { shallow } from "enzyme";

describe('Header component', () => {
  let wrapper = shallow(<Header user={{ name: 'Lola' }}/>);

  it('should render user-box is user signed in', () => {
    const userBox = wrapper.find('.user-box');

    expect(userBox.length).toEqual(1);
  });

  it('should render user name when user is signed in', () => {
    const name = wrapper.find('p');

    expect(name.text()).toEqual('Welcome, Lola!');
  });

  it('should render a link to view favorites', () => {
    const link = wrapper.find('Link');

    expect(link.length).toEqual(2);
  });

  it('should render a button to sign out', () => {
    const button = wrapper.find('.signout');

    expect(button.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  let altWrapper = shallow(<Header user={{}}/>);

  it('should render no-user-box if no user is signed in', () => {
    const noUserBox = altWrapper.find('.no-user-box');

    expect(noUserBox.length).toEqual(1);
  });

  it('should render 2 links', () => {
    const links = altWrapper.find('Link');

    expect(links.length).toEqual(2);
  });

  it('should match snapshot', () => {
    expect(altWrapper).toMatchSnapshot();
  });
});
