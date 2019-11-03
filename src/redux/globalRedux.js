/* SELECTORS */


/* ACTIONS */

// action name creator
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_MULTIPLE_STATES = createActionName('SET_MULTIPLE_STATES');

// action creators
export const setMultipleStates = payload => ({ payload, type: SET_MULTIPLE_STATES });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_MULTIPLE_STATES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
