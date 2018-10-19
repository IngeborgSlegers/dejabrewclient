import React from 'react';
import { AuthContext } from '../authform/AuthContext';
// import { Card, CardTitle, CardBody, CardText, Button, Row, Col, CardDeck } from 'reactstrap';

class TeaTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
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

    render() {
        return (
            <div>
                {this.props.teas.map((tea, index) => {
                        return (
                            <div className="cards" key={index}>
                                <h5>{tea.teaName}</h5>
                                <p>{tea.teaDescription}</p>
                                <p>temp: {tea.temp}</p>
                                <p>steep time: {tea.steepTime}</p>
                                <p>price per ounce: {tea.teaPrice}</p>          
                                {/* <AddToBox teaId={tea.id} /> */}
                                <button onClick={this.props.addToBox}>add to box</button>
                            </div>
                        )
                    })
                }        
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <TeaTable {...props} auth={auth} />}
    </AuthContext.Consumer>
);
