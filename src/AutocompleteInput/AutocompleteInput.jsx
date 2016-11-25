import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import ApiHelper from '../ApiHelper/ApiHelper';

export function renderSuggestion(suggestion) {
  return <span>{ suggestion.label }</span>;
}

export function getSuggestionValue(suggestion) {
  return suggestion.label;
}

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);

    this.state = { result: [], err: '', value: '' };
  }

  onSuggestionsFetchRequested({ value }, fetcher) {
    return fetcher(value)
      .then(({ result, err }) => this.setState({ result, err }));
  }

  render() {
    const { value, result } = this.state;

    const inputProps = {
      placeholder: 'Rechercher une adresse',
      value,
      onChange: (event, { newValue }) => {
        this.setState({ value: newValue });
      },
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={result}
        onSuggestionsFetchRequested={inputValue =>
          this.onSuggestionsFetchRequested(inputValue, ApiHelper.fetchFromBAN)
        }
        onSuggestionsClearRequested={() => this.setState({ result: [] })}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutocompleteInput;
