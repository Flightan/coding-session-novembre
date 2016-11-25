import React from 'react';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import LeafletMap from '../LeafletMap/LeafletMap';

const App = () => (
  <div>
    <AutocompleteInput />
    <LeafletMap lat={0} long={0} zoom={3} />
  </div>
);

export default App;
