import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchString: ''
  };
  onInputChange(event) {
    const { value } = event.target;
    this.setState({ searchString: value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchString);
  }
  render() {
    const { searchString } = this.state;
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={e => this.onFormSubmit(e)}>
          <div className='ui field'>
            <label>Search by Email</label>
            <input
              type='text'
              name='search'
              value={searchString}
              placeholder='Email to search...'
              onChange={e => this.onInputChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
