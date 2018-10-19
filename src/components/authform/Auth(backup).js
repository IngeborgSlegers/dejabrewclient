import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
// import AuthForm from './AuthForm';
import { AuthContext } from './AuthContext';
import {
    // Switch,
    Route,
} from 'react-router-dom';

class Auth extends React.Component {
    constructor() {
        super()
        this.state = {
            isUser: false
        }
    }

    changeUserStatus = () => this.setState({isUser: !this.state.isUser})

    // authViewShow = () => {
    //     if(this.state.isUser) {
    //         return (
    //             <Signup toggleForm={this.changeUserStatus} />
    //         )
    //     } else {
    //         return (
    //             <Login toggleForm={this.changeUserStatus} />
    //         )
    //     }
    // }

    // protectedViews = () => {
    //     if 
    //     // (true){
    //     (this.props.auth.sessionToken === localStorage.getItem('token')) {
    //         return (
    //             // <Switch>
    //                 <Route exact path='/tea'>
    //                     {/* <h1>This is my splash page</h1> */}
    //                     <Splash />
    //                 </Route>
    //             // </Switch>
    //         )
    //     } else {
    //         return (
    //             <Route exact path="/auth" >
    //                 {this.authViewShow() }
    //             </Route>
    //         )
    //     }
    // }

    render() {
        return(
            <div>
                {/* { this.authViewShow() } */}
                { this.protectedViews() }
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Auth {...props} auth={auth} />}
    </AuthContext.Consumer>
);