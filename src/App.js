import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Home from './screens/Home.js';

import './App.css';

class App extends Component {
componentWillMount(){
}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
