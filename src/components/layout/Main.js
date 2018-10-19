import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Account from './Account'
import TeaBox from '../teaform/TeaBox';
import Navbar from './Navbar';
import Landing from './Landing';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    

    render() {
        return(
            <div>
                <Navbar logout={this.props.logout} />
                <Switch>
                    <Route exact path='/'><Landing/></Route>
                    <Route exact path='/home'><TeaBox /></Route>
                    <Route exact path='/account'><Account logout={this.props.logout} /></Route> 
                </Switch>  
            </div>
        )
    }
}

