/**
 * Created by zhouzhen on 2017/1/18.
 */
import {combineReducers} from 'redux';

function guid_id(state=0,action) {
  switch (action.type){
    case "CHANGE_PAGE":
      return action.guid_id;
    default:
      return state;
  }
}

const rootReducer=combineReducers({
  guid_id
});

export default rootReducer;