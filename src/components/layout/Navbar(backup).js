import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap'
import {AuthContext} from '../authform/AuthContext';
import Account from './Account(backup)';

class Navbar extends React.Component{
    buttonView = () => {
        if(this.props.auth.sessionToken === localStorage.getItem("token")){
            return (
                <div className='navbar'>
                    <nav>
                        <ul className='nav-ul'>
                            <li className="nav-li"><Button onClick={() => this.props.clickLogout()}>Logout</Button></li>
                            <li className="nav-li-account"><Button>Account info</Button></li>
                        </ul>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className='navbar'>
                    <nav>
                        <ul className='nav-ul'>
                            <li className="nav-li-home"><Link to='/'>Déjà Brew</Link></li>
                            <Button>Login / Sign up</Button>
                        </ul>
                    </nav>
                </div>
            )
        }
    }
    render() {
        return (
            <div className='navbar'>
                <nav>
                        {this.buttonView()}
                        <Account />
                </nav>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Navbar {...props} auth={auth} />}
    </AuthContext.Consumer>
);


