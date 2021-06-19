import { USER_SIGN_IN, USER_SIGN_OUT, USER_UPDATE } from '../constants/userActionTypes';

const initialState = {
  loggedIn: false,
  data: {
    userid: '',
    username: '',
    email: '',
    products: [],
  },
  token: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
    case USER_SIGN_IN: {
			return {
        ...state,
        loggedIn: true,
        data: action.payload.data,
        token: action.payload.token
			};
		}
    case USER_SIGN_OUT: {
      return {
        ...state,
        loggedIn: false,
        data: {},
        token: null,
      }
    }
    case USER_UPDATE: {
      return {
        ...state,
        data: {
          ...state.data,
          username: action.payload.username,
          email: action.payload.email,
        }
      }
    }
		default:
			return state
	}
}
