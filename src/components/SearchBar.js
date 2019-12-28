import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui orange segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui center aligned header red huge">
              <label>MyTUBE</label>
            </div>
            <input
              placeholder="Search..."
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
