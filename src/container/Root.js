/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const {store}=this.props;
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
