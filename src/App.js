import React, { Component } from 'react';
import './App.css';
import Auth from './components/authform/Auth';
import Main from './components/layout/Main';
import {AuthContext} from './components/authform/AuthContext';
import {
  BrowserRouter as Router,
  // Route, 
  // Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.setToken = (token) => {
      localStorage.setItem('token', token);
      this.setState({ sessionToken: token });
    }
    this.state = {
      sessionToken: '',
      setToken: this.setToken,
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token })
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if 
    // (true){
    (this.state.sessionToken === localStorage.getItem('token') && this.state.sessionToken !== 'undefined') {
        return <Main logout={this.logout} />
    } else {
        return <Auth />  
    }
  }

  render() {
    return (
      <Router>  
        <AuthContext.Provider value={this.state}>
          <div className="App">
            {this.protectedViews()}
          </div>
        </AuthContext.Provider>    
      </Router>

    );
  }
}

export default App;
