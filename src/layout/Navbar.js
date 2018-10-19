import React from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import {AuthContext} from '../authform/AuthContext';

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    

    render() {
        return (
            <nav>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                    Menu
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem><Link to='/'>Home</Link></DropdownItem>
                    <DropdownItem><Link to='/home'>Teas</Link></DropdownItem>
                    <DropdownItem><Link to='/account'>Account</Link></DropdownItem>
                    <DropdownItem><Button className="logout" onClick={this.props.logout}>Logout</Button></DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <h4>Deja Brew</h4>
            </nav>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Navbar {...props} auth={auth} />}
    </AuthContext.Consumer>
);


