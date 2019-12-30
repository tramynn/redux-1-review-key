import { createStore } from "redux";

// initialState
const initialState = {
  username: ""
};

// const variable and export
export const UPDATE_USERNAME = "UPDATE_USERNAME";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);
