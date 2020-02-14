import React, { Component } from 'react';
import { getUsers } from '../services/userService';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import FlagCard from './FlagCard';
import UserDetail from './UserDetail';
import '../styles/style.scss';

class App extends Component {
  state = {
    users: getUsers(),
    result: {},
    isLoading: false,
    isSearched: false
  };
  onSearchUser(email) {
    if (!email) return;
    this.setState({ isLoading: true });
    setTimeout(() => {
      const result = this.state.users.find(user => user.email === email) || {};
      this.setState({ result, isSearched: true, isLoading: false });
    }, 500);
  }
  renderResult() {
    const { isSearched, result } = this.state;
    if (isSearched && !result.email) {
      return <div className='no-result'>No Results!</div>;
    }
    if (result.email) {
      return (
        <FlagCard detail={result}>
          <UserDetail detail={result} />
        </FlagCard>
      );
    }
    return null;
  }
  render() {
    console.log(this.state.users);
    const { isLoading } = this.state;
    return (
      <div className='ui container padding-top-10'>
        <div>{isLoading && <Spinner />}</div>
        <div>
          <SearchBar
            onSubmit={searchString => this.onSearchUser(searchString)}
          />
        </div>
        <div className='result'>{this.renderResult()}</div>
      </div>
    );
  }
}

export default App;
