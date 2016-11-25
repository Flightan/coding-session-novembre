import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import LeafletMap from '../LeafletMap/LeafletMap';

describe('App component', () => {
  it('should contain AutocompleteInput and LeafletMap', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsMatchingElement(<AutocompleteInput />)).to.equal(true);
    expect(wrapper.containsMatchingElement(<LeafletMap />)).to.equal(true);
  });

  describe('centerOn', () => {
    it('should set longitude and latitude', () => {
      const wrapper = shallow(<App />);

      wrapper.instance().centerOn([1, 2]);

      expect(wrapper.state('long')).to.equal(1);
      expect(wrapper.state('lat')).to.equal(2);
    });
  });
});
