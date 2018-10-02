import { createStore } from "redux";
import ActionNames from "../actions/actionNameConstants";

function reducer(state = {}, action) {
  switch (action.type) {
    // Respond to the SET_USER action and update
    // the state accordingly
    case ActionNames.SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}

export const defaultState = {
  user: {},
  token: "test-token"
};

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
