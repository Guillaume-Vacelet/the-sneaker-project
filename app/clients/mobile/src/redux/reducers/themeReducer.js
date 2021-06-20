import { SWITCH_THEME } from '../constants/themeActionTypes'

const initialState = {
  darkMode: true,
  primary: '#1FFFAA',
  secondary: 'whitesmoke',
  background: '#282629',
  // background: '#161a1d',
  // primary: '#67e0c4',
}

export default function(state = initialState, action) {
	switch (action.type) {
    case SWITCH_THEME:
      return {
				...state,
        darkMode: !state.darkMode,
        background: state.darkMode ? '#161a1d' : 'whitesmoke',
        secondary: state.darkMode ? 'whitesmoke' : '#161a1d'
			};
    default:
      return state;
  }
}