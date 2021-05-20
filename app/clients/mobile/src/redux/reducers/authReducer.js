import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../constants/authActionTypes';

const initialState = {
  loggedIn: true,
  user: {
    username: '',
    email: '',
    token: null,
  }
};

export default function(state = initialState, action) {
	switch (action.type) {
    case SIGN_IN: {
			return {
        ...state,
        loggedIn: true,
        user: action.payload.user
			};
		}
    case SIGN_UP: {
			return {
        ...state,
        loggedIn: true,
        user: action.payload.user
			};
		}
    case SIGN_OUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          username: '',
          email: '',
          token: null,
        }
      }
    }
		default:
			return state
	}
}
