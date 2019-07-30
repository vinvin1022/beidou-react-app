//reducer

var loginState = { isLogin: 0 };

function loginReduer(state = loginState, action) {
	switch (action.type) {
		case "LOGIN":
			return { isLogin: action.isLogin }
		default:
			return state
	}
}

export default loginReduer