/**
 * Created by zhouzhen on 2017/1/18.
 */
require("./css/index.scss");

import React,{PropTypes} from 'react';
import {render} from 'react-dom';

import configureStore from './store/configureStore'

import Root from './container/Root';

const state={
  page:11
};

const store=configureStore(state);

render(
  <Root store={store} />,
  document.getElementById('APP')
);