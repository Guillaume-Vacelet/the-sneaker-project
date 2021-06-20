import { USER_SIGN_IN, USER_SIGN_OUT, USER_UPDATE } from '../constants/userActionTypes'

export const userSignIn = (user, /*jwt*/) => ({
	type: USER_SIGN_IN,
	payload: {
		data: user,
		// token: jwt
	},
})

export const userSignOut = () => ({
	type: USER_SIGN_OUT,
	payload: {},
})

export const userUpdate = (username, email) => ({
	type: USER_UPDATE,
	payload: {
		username: username,
		email: email
	},
})