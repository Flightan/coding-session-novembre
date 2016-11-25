import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AutocompleteInput from './AutocompleteInput';

describe('AutocompleteInput component', () => {
  it('should contain input', () => {
    const wrapper = shallow(<AutocompleteInput />);

    expect(wrapper.contains(<input />)).to.equal(true);
  });
});
