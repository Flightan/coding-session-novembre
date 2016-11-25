import React, { Component } from 'react';
import ApiHelper from '../ApiHelper/ApiHelper';

function renderItem(item, idx) {
  return <li key={idx}>{ item.label }</li>;
}

export function renderResult(result, err) {
  if (err) {
    return <div>{ err.message }</div>;
  }

  return <ul>{ result.map(renderItem) }</ul>;
}

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);

    this.state = { result: [], err: '' };
  }

  onChange(event, fetcher) {
    const query = event.target.value;

    return fetcher(query)
      .then(response => this.setState(response));
  }

  render() {
    return (
      <div>
        <input
          onChange={(e, fetcher = ApiHelper.fetchFromBAN) => this.onChange(e, fetcher)}
        />
        { renderResult(this.state.result, this.state.err) }
      </div>
    );
  }
}

export default AutocompleteInput;
