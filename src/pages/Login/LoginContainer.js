import { connect } from 'react-redux';
import Login from './Login'




//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
	console.log(state);
	return {
		isLogin: state.loginState.isLogin
	}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {
		login: function (isLogin) {
			dispatch({ type: "LOGIN", isLogin })
		}
	};
}

//封装传递state和dispatch
var LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer