import { SIGN_IN, SIGN_OUT } from '../constants/authActionTypes'

export const signInUser = (username, password, jwt) => ({
	type: SIGN_IN,
	payload: {
		user: {
			username: username,
			password: password,
			token: jwt
		}
	},
})

export const signOutUser = () => ({
	type: SIGN_OUT,
	payload: {},
})