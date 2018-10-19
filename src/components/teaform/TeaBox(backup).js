import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TeaTable from './TeaTable(backup)';
import OrderForm from './OrderForm(backup)';
import {AuthContext} from '../authform/AuthContext';

class TeaBox extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            teas: [],
            teaId: []
        }
    }

    componentWillMount() {
        this.fetchTeas()
    }

    fetchTeas = () => {
        fetch("http://localhost:3000/tea", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({teas: logData})
        })
    }

    // fetchOrder = (e, teaId) => {
    //     this.setState({teaForBox: teaId})
        // fetch("http://localhost:3000/teabox/:id", {
        //     method: 'GET',
        //     headers: new Headers({
        //         'Content-Type': 'application/json',
        //         'Authorization': this.props.auth.sessionToken
        //     })
        // })
        // .then((res) => res.json())
        // .then((logData) => {
        //     // return this.setState({teabox: logData})
        //     console.log(logData)
        // })
    // }

    teaForm = () => {
        return (
            <div>
                {this.state.teas.map((tea) => {
                        return (
                            <div className="cards" key={tea.id}>
                                <h5>{tea.teaName}</h5>
                                <p>{tea.teaDescription}</p>
                                <p>temp: {tea.temp}</p>
                                <p>steep time: {tea.steepTime}</p>
                                <p>price per ounce: {tea.teaPrice}</p>          
                                {/* <AddToBox teaId={tea.id} /> */}
                                <button onClick={this.addToBox} id={tea.id} >add to box</button>
                            </div>
                        )
                    })
                }        
            </div>
        )
    }

    addToBox = (e) => {
        // console.log(this.state.teas)
        // this.setState({teaId: teaId})
        fetch("http://localhost:3000/teabox", {
            method: 'POST',
            body: JSON.stringify({teaId: e.target.id}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            return this.setState({teaId: data})
        })
    }

    render() {
        const teas = this.state.teas.length >= 1 ? <TeaTable teas={this.state.teas} /> : <h3>Select a different tea</h3>
        return(
            <Container>
                <Row>
                    <Col md="8">
                        {this.teaForm()}
                    </Col>
                    <Col md="4">
                        <OrderForm teaId={this.state.teaId} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <TeaBox {...props} auth={auth} />}
    </AuthContext.Consumer>
);