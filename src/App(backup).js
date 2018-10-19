import React, { Component } from 'react';
import './App.css';
import Footer from './components/layout/Footer(backup)';
import Navbar from './components/layout/Navbar(backup)';
import Login from './components/authform/Login(backup)';
import Signup from './components/authform/Signup(backup)';
import Auth from './components/authform/Auth(backup)';
import Main from './components/layout/Main(backup)';
import {AuthContext} from './components/authform/AuthContext(backup)';
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
      isUser: false
    }
  }

  componentDidMount() {
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

  changeUserStatus = () => this.setState({isUser: !this.state.isUser})

  authViewShow = () => {
    if(this.state.isUser) {
        return (
            <Signup toggleForm={this.changeUserStatus} />
        )
    } else {
        return (
            <Login toggleForm={this.changeUserStatus} />
        )
    }
  }

  protectedViews = () => {
    if 
    // (true){
    (this.state.sessionToken === localStorage.getItem('token')) {
        return (
          <Main />
        )
    } else {
        return (
        <div>
          {this.authViewShow()}
        </div>
        )  
    }
  }

  render() {
    return (
      <Router>  
        <AuthContext.Provider value={this.state}>
          <div className="App">
            <Navbar clickLogout={this.logout} />
            {this.protectedViews()}
            {/* <Footer /> */}
          </div>
        </AuthContext.Provider>    
      </Router>

    );
  }
}

export default App;
