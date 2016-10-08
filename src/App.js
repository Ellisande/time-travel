import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import Content from './content';
import createStore from './store';

const store = createStore({notifications: 0});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Content />
      </Provider>
    );
  }
}
