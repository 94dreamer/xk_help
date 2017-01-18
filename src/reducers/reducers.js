/**
 * Created by zhouzhen on 2017/1/18.
 */
import {combineReducers} from 'redux';

function page(state=0,action) {
  switch (action.type){
    case "CHANGE_PAGE":
      return action.page;
    default:
      return state;
  }
}

const rootReducer=combineReducers({
  page
});

export default rootReducer;