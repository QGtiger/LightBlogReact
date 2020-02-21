import React from 'react';
import LoadableComponent from '../../utils/LoadableComponent';
import { withRouter, Switch, Redirect, Route, HashRouter as Router } from 'react-router-dom';
import PrivateRoute from '../privateRoute/index';

const ButtonView  = LoadableComponent(()=>import('../../router/BackStage/ui/button/ButtonView'))

const IconView = LoadableComponent(()=>import('../../router/BackStage/ui/icon/icon'))

class ContentMain extends React.Component{
    constructor(){
        super(...arguments);
        console.log(123)
    }

    render() {
        return (
            <div>
                    <Switch>
                        <PrivateRoute exact path="/ui/button" component={ButtonView}/>
                        <PrivateRoute exact path="/ui/icon" component={IconView}/>
                        <Redirect exact from='/' to='/ui/button'/>
                    </Switch>
            </div>
        )
    }
}

export default withRouter(ContentMain);