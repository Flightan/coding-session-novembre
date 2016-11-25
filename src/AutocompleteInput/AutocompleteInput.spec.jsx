import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import AutocompleteInput, { renderResult } from './AutocompleteInput';

describe('AutocompleteInput component', () => {
  it('should contain input', () => {
    const wrapper = shallow(<AutocompleteInput />);

    expect(wrapper.containsMatchingElement(<input />)).to.equal(true);
  });

  describe('onChange', () => {
    it('should call ApiHelper and set state with result', () => {
      const expectedResult = [{ label: 'fakeResult' }];
      const wrapper = shallow(<AutocompleteInput />);
      const fakeEvent = { target: { value: 'toto' } };
      const fetcherStub = sinon.stub().returns(Promise.resolve({ result: expectedResult }));

      wrapper.instance().onChange(fakeEvent, fetcherStub)
        .then(() => {
          expect(fetcherStub.called).to.equal(true);
          expect(wrapper.update().state('result')).to.equal(expectedResult);
        });
    });
  });

  describe('renderResult', () => {
    describe('when there is an error', () => {
      it('should return a div with error message', () => {
        const result = renderResult(null, { message: 'fakeError' });
        const wrapper = shallow(result);

        expect(wrapper.contains(<div>fakeError</div>)).to.equal(true);
      });
    });

    describe('when there is a result', () => {
      it('should return a div with error message', () => {
        const result = renderResult([{ label: 'Paris' }, { label: 'Toulouse' }]);
        const wrapper = shallow(result);
        const expectedResult = <ul><li>Paris</li><li>Toulouse</li></ul>;

        expect(wrapper.contains(expectedResult)).to.equal(true);
      });
    });
  });
});
