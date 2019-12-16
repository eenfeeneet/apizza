import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Admin from './Admin';
import Home from './Home';
import AppNavbar from './components/AppNavbar';

class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    // store.dispatch(loadUser());
  }

  render() {
    return (
      <div className='App'>
        <AppNavbar />
        {this.props.isAuthenticated ? <Admin /> : <Home />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
