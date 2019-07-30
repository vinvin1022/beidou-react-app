

import './App.scss';
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



const WarReport = React.lazy(() => import('./pages/WarReport/WarReport'))
const PerformanceRanking = React.lazy(() => import('./pages/PerformanceRanking/PerformanceRanking'))
const LoginContainer = React.lazy(() => import('./pages/Login/LoginContainer'))
const MyPages = React.lazy(() => import('./pages/MyPages/MyPages'))


const customTheme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  selectedTabColor: 'rgb(33,100,184)',
  'c#265ba0': '#265ba0',
  'c#2d67af': '#2d67af'
};

function App(params) {

  const sysTheme = useTheme();
  const mergeTheme = { ...sysTheme, ...customTheme }

  return (
    <ThemeProvider theme={mergeTheme}>
      <div className="app">
        <Suspense fallback={<div className="suspenseLoading">loading</div>}>
          <Switch>
            <Route exact path="/" render={() => {
              return <Redirect to="/warReport" />
            }}></Route>
            <Route exact path="/login" component={LoginContainer}></Route>
            <PrivateRoute exact path="/warReport" component={WarReport}></PrivateRoute>
            <PrivateRoute exact path="/werformanceRanking" component={PerformanceRanking}></PrivateRoute>
            <Route path="/myPages" component={MyPages}></Route>
          </Switch>
        </Suspense>
      </div>
    </ThemeProvider>
  );

}
export default App;
