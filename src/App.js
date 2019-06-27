import React, {Component} from 'react';

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './App.css';


const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjxexlkpd3doi01e9sbzu3wj9/master'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h2>Wellcome to GraphQL Apollo App</h2>
        </div>
      </ApolloProvider>
    );
    }

}

export default App;
