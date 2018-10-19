import React from 'react';
import { AuthContext } from '../authform/AuthContext';
import TeaName from './TeaName';
import APIURL from '../helpers/environment';
import { Button, Card, CardText, CardBody, CardTitle, Container, Row, Col, CardSubtitle } from 'reactstrap';


class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teaId: this.props.teaId.userId,
            teas: [],
            result: [],
            teaName: []
        }
    }

    teaorder = (e) => {
        console.log(this.props)
        fetch(`${APIURL}/teabox/${this.state.teaId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({teas: data})
        })
        console.log(this.state.teas)
    }

    render() {
        const teaTable = 
            this.state.teas.map((tea) => {
                return <TeaName key={tea.id} teaId={tea.teaId}/> 
            })
        return (
            <div className="teaorder"> 
                {teaTable}
                <button onClick={this.teaorder}>Submit</button>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <OrderForm {...props} auth={auth} />}
    </AuthContext.Consumer>
)