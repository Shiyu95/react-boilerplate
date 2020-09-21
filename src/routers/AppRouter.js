
import React from 'react';
import {Router, Route, Switch,Link, NavLink} from 'react-router-dom';
import DashBoardPage from '../components/DashBoardPage';

import NotFoundPage from "../components/NotFoundPage";
//import Header from "../components/Header";
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
  

export const history = createHistory();


  const AppRouter = () => (
    <Router history = {history}>
    <div>
     <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path = "/dashboard"  component={DashBoardPage}/>

      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  
  </Router>
  );
  
  export default AppRouter;