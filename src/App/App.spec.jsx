import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App component', () => {
  it('should display Hello world', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).to.contain('Hello world');
  });
});
