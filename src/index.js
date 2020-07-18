import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://sls-sandbox.zizoo.com/graphql',
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <App />
          </Route>
          <Redirect from="*" to="/search" />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
