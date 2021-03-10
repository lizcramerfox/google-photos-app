import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import GoogleAuth from './Components/GoogleAuth'
import AlbumIndex from './Components/AlbumIndex'
import AlbumShow from './Components/AlbumShow'
import './App.css'
// import { render } from '@testing-library/react'

class App extends Component {
  constructor() {
    super()

    this.state = {
     token: null,
    }
  }

  setToken = (token) => this.setState({ token })
  clearToken = () => this.setState({ token: null })

  render() {    
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>Google Photos App</h2>
            <nav>
              <Route path="/" className="nav-element" render={() => (
                <GoogleAuth setToken={this.setToken} clearToken={this.clearToken} token={this.state.token} /> 
              )}/>
              <Link to="/index" className="nav-element">Index</Link>
            </nav>
          </header>
          <main className="App-body">
            <Switch>
              <Route exact path="/index" render={() => (
                <AlbumIndex token={this.state.token} /> 
              )} />
              <Route exact path="/albums/:id" render={(data) => (
                <AlbumShow token={this.state.token} id={data.match.params.id} />
              )} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
  
export default App