import React from 'react';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import AutocompleteInput from './AutocompleteInput';

chai.use(sinonChai);

describe('AutocompleteInput', () => {
  const results = [
    { label: 'Paris', coordinates: [0, 1] },
    { label: 'Londres', coordinates: [1, 2] },
  ];
  const stubApiHelper = { fetchFromApi: sinon.stub().returns(Promise.resolve({ results })) };

  it('should contain an input', () => {
    const wrapper = shallow(<AutocompleteInput />);
    expect(wrapper.containsMatchingElement(<input />)).to.equal(true);
  });

  it('should display one result', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.setState({ results: [{ label: 'toto' }] });

    expect(wrapper.contains(<ul><li>toto</li></ul>)).to.equal(true);
  });

  it('should display every results', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.setState({ results: [{ label: 'toto' }, { label: 'tata' }] });

    expect(wrapper.contains(<ul><li>toto</li><li>tata</li></ul>)).to.equal(true);
  });

  it('should not display the list when there are no results', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.setState({ results: [] });

    expect(wrapper.contains(<span>Pas de résultats</span>)).to.equal(true);
  });

  it('should save the input text in the state', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.instance().inputChange('changeValue', stubApiHelper);
    expect(wrapper.state('value')).to.equal('changeValue');
  });

  it('should call ApiHelper', () => {
    const wrapper = shallow(<AutocompleteInput />);
    wrapper.instance().inputChange('InputFromUser', stubApiHelper);
    expect(stubApiHelper.fetchFromApi).to.have.been.calledWith('InputFromUser');
  });

  it('should save the result in the state', () => {
    const wrapper = shallow(<AutocompleteInput />);
    return wrapper.instance().inputChange('InputFromUser', stubApiHelper).then(() => {
      expect(wrapper.state('results')).to.deep.equal(results);
    });
  });
});
