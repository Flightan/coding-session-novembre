import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import ApiHelper from './ApiHelper';

describe('ApiHelper', () => {
  before(() => {
    fetchMock.get('http://api-adresse.data.gouv.fr/search/?q=paris', {
      features: [{ properties: { label: 'Paris' }, geometry: { coordinates: [0, 1] } }],
    });
  });

  it('should fetch from API', () => {
    const expected = { result: [{ label: 'Paris', coordinates: [0, 1] }] };
    return ApiHelper.fetchFromApi('paris')
      .then((response) => {
        expect(fetchMock.calls().matched).to.have.length(1);
        expect(response).to.deep.equal(expected);
      });
  });
});
