//reducer

var loadingState = { loading: false };

function loadingReduer(state = loadingState, action) {
	switch (action.type) {
		case "SET_LOADING":
			return { loading: action.loading }
		default:
			return state
	}
}


export default loadingReduer