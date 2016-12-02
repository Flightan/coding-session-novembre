import React from 'react';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import LeafletMap from '../LeafletMap/LeafletMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [0.0, 0.0],
    };
  }

  setCoordinates(result) {
    this.setState({ coordinates: result.coordinates });
  }

  render() {
    return (
      <div>
        <AutocompleteInput onResultClick={result => this.setCoordinates(result)} />
        <LeafletMap coordinates={this.state.coordinates} />
      </div>
    );
  }
}

export default App;
