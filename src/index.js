import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

//redux 和react-redux（关联react和redux）
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//reducers 状态树state和逻辑操作
import rootRedux from './store/index'

//生成状态树对象
const store = createStore(rootRedux);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <CssBaseline>
                <App />
            </CssBaseline>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
