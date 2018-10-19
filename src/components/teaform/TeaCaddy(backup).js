import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default class TeaCaddy extends React.Component {

    render() {
        return(
                <Switch>
                    <Route exact path='/auth'><Auth /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/tea'><Splash /></Route>
                </Switch>    
        )
    }
}