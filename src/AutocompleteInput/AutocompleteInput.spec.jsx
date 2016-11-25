import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import AutocompleteInput, { renderSuggestion, getSuggestionValue } from './AutocompleteInput';

describe('AutocompleteInput component', () => {
  describe('onSuggestionsFetchRequested', () => {
    it('should call ApiHelper and set state with result', () => {
      const expectedResult = [{ label: 'fakeResult' }];
      const wrapper = shallow(<AutocompleteInput />);
      const fakeValue = { value: 'toto' };
      const fetcherStub = sinon.stub().returns(Promise.resolve({ result: expectedResult }));

      wrapper.instance().onSuggestionsFetchRequested(fakeValue, fetcherStub)
        .then(() => {
          expect(fetcherStub.called).to.equal(true);
          expect(wrapper.update().state('result')).to.equal(expectedResult);
        });
    });
  });

  describe('renderSuggestion', () => {
    it('should return a div with error message', () => {
      const result = renderSuggestion({ label: 'fakeLabel' });
      const wrapper = shallow(result);

      expect(wrapper.contains(<span>fakeLabel</span>)).to.equal(true);
    });
  });

  describe('getSuggestionValue', () => {
    it('should return label from the parameter object', () => {
      const result = getSuggestionValue({ label: 'fakeLabel' });

      expect(result).to.equal('fakeLabel');
    });
  });
});
