import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import ApiHelper from './ApiHelper';

describe('ApiHelper component', () => {
  describe('when the query is successful', () => {
    before(() => (
      fetchMock.get('https://api-adresse.data.gouv.fr/search/?q=paris', {
        features: [
          {
            properties: {
              label: 'Paris, 75017',
            },
            geometry: {
              coordinates: [1.2345678, 1.2345678],
            },
          },
        ],
      })
    ));

    after(fetchMock.reset);

    it('should return a response with coordinates', () => {
      const query = 'paris';

      return ApiHelper.fetchFromBAN(query)
        .then((response) => {
          expect(fetchMock.calls().matched).to.have.length(1);
          expect(response.result).to.deep.equal([{ label: 'Paris, 75017', coordinates: [1.2345678, 1.2345678] }]);
          expect(response.err).to.an('undefined');
        });
    });
  });

  describe('when the query is dead', () => {
    before(() => (
      fetchMock.get('https://api-adresse.data.gouv.fr/search/?q=error', { status: 404, throws: 'dead' })
    ));

    it('should response with error', () => {
      const query = 'error';

      return ApiHelper.fetchFromBAN(query)
        .then((response) => {
          expect(fetchMock.calls().matched).to.have.length(1);
          expect(response.err).to.deep.equal('dead');
          expect(response.result).to.an('undefined');
        });
    });
  });
});
