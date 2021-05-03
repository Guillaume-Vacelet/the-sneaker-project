import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../constants/authActionTypes'

export const signInUser = (username, email, jwt) => ({
	type: SIGN_IN,
	payload: {
		user: {
			username: username,
			email: email,
			token: jwt
		}
	},
})

export const signUpUser = (username, jwt) => ({
	type: SIGN_UP,
	payload: {
		user: {
			username: username,
			email: email,
			token: jwt
		}
	},
})

export const signOutUser = () => ({
	type: SIGN_OUT,
	payload: {},
})