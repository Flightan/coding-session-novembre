import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AutocompleteInput from './AutocompleteInput';

describe('AutocompleteInput', () => {
  it('should contain an input', () => {
    const wrapper = shallow(<AutocompleteInput />);
    expect(wrapper.containsMatchingElement(<input />)).to.equal(true);
  });

  it('should display one result', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.setState({ results: ['toto'] });

    expect(wrapper.contains(<ul><li>toto</li></ul>)).to.equal(true);
  });

  it('should display every results', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.setState({ results: ['toto', 'tata'] });

    expect(wrapper.contains(<ul><li>toto</li><li>tata</li></ul>)).to.equal(true);
  });

  it('should not display the list when there are no results', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.setState({ results: [] });

    expect(wrapper.contains(<span>Pas de résultats</span>)).to.equal(true);
  });

  it('should save the input text in the state', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.instance().inputChange('changeValue');
    expect(wrapper.state('value')).to.equal('changeValue');
  });
});
