import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//setting up Apollo Client
const apolloclient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloclient}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header> */}
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
