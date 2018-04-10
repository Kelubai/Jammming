import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  //updates SearchBar's state with search terms
  search() {
    this.props.onSearch(this.state.search);
  }

  //handles input event in the search bar
  handleTermChange(event) {
    this.setState({ search: event.target.value });
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
