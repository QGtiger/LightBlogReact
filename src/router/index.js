import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginView from '../views/login/login';
import ButtonView from '../views/button/button';
import BackStageLayout from './BackStage/Index/index';
import PrivateRoute from '../components/privateRoute/index'

export default ()=>(
    <Switch>
        <Route exact path="/login" component={LoginView}></Route>
        {/* <Route exact path="/ui/button" component={ButtonView}></Route> */}
        <PrivateRoute path="/" component={BackStageLayout}></PrivateRoute>
    </Switch>
)