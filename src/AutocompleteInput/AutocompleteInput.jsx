import React from 'react';
import ApiHelper from '../ApiHelper/ApiHelper';

class AutocompleteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: '',
    };
  }

  inputChange(value, apiHelper = ApiHelper) {
    this.setState({ value });
    return apiHelper.fetchFromApi(value)
      .then((response) => {
        this.setState({ results: response.results });
      });
  }

  renderResults() {
    const { onResultClick } = this.props;
    const resultList = this.state.results
    .map(result => (
      <li>{result.label} <button onClick={() => onResultClick(result)}>Go</button></li>
    ));
    const noResults = <span>Pas de résultats</span>;
    return this.state.results.length === 0 ? noResults : <ul>{resultList}</ul>;
  }

  render() {
    return (
      <div>
        <input onChange={event => this.inputChange(event.target.value)} />
        {this.renderResults()}
      </div>);
  }
}

AutocompleteInput.propTypes = {
  onResultClick: React.PropTypes.func,
};

export default AutocompleteInput;
