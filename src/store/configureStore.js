/**
 * Created by zhouzhen on 2017/1/18.
 */
import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from '../reducers/reducers';

export default function configureStore(initialState) {

  return createStore(rootReducer, initialState)

}
