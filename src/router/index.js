import React from 'react';
import { Link, Route, HashRouter as Router, Switch } from 'react-router-dom';
import App from '../App';
import LoginView from '../views/login/login'

export default ()=>(
    <Router>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/login" component={LoginView}></Route>
        </Switch>
    </Router>
)