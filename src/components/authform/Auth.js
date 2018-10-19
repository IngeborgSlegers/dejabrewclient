import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { AuthContext } from './AuthContext';

class Auth extends React.Component {
    constructor() {
        super()
        this.state = {
            isUser: false
        }
    }

    changeUserStatus = () => this.setState({isUser: !this.state.isUser})

    authViewShow = () => {
        if(this.state.isUser) {
            return (
                <Signup toggleForm={this.changeUserStatus} />
            )
        } else {
            return (
                <Login toggleForm={this.changeUserStatus} />
            )
        }
    }


    render() {
        return(
            <div>
                { this.authViewShow() }
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Auth {...props} auth={auth} />}
    </AuthContext.Consumer>
);