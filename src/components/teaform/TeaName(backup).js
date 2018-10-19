import React from 'react';
import {AuthContext} from '../authform/AuthContext';

class TeaName extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            teaName: ''
        }
    }

    componentWillMount = () => this.showtea()

    showtea = () => {
        fetch(`http://localhost:3000/tea/${this.props.teaId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.teaName)
            this.setState({teaName: data.teaName})
        })
    }

    render(){
        return(
            <p>{this.state.teaName}</p>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <TeaName {...props} auth={auth} />}
    </AuthContext.Consumer>
);