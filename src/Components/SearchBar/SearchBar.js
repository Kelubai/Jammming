import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search.bind(this);
    this.handleTermChange.bind(this);
  }

  //updates SearchBar's state with search terms
  search(searchTerm) {
    this.props.onSearch(searchTerm);
  }

  //handles input event in the search bar
  handleTermChange(input) {
    this.SearchBar.state = input;
  }

  render() {
    return (
    <div onChange={this.handleTermChange} className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <a>SEARCH</a>
    </div>
    );
  }
}

export default SearchBar;
