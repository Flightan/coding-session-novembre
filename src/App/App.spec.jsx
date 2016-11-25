import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';

describe('App component', () => {
  it('should contain AutocompleteInput', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<AutocompleteInput />)).to.equal(true);
  });
});
