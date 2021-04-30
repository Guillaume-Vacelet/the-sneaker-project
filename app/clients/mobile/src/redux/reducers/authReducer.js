import { SIGN_IN, SIGN_OUT } from '../constants/authActionTypes';

const initialState = {
  loggedIn: false,
  user: {
    username: '',
    password: '',
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
    case SIGN_OUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          username: '',
          password: '',
          token: null,
        }
      }
    }
		default:
			return state
	}
}
