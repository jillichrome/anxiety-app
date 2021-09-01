import {  GET_TECHNIQUES, ADD_TECHNIQUES, DELETE_TECHNIQUES } from './actions.js';

const initialState = {
  techniques: []
};

function techniqueReducer(state = initialState, action) {
  switch(action.type) {
    case GET_TECHNIQUES:
    return {
      ...state
    };
    case ADD_TECHNIQUES:
    return {
      ...state
    };
    case DELETE_TECHNIQUES:
    return {
      ...state
    }
  }
};

export default techniqueReducer;
