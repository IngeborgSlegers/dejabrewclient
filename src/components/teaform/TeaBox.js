import React from 'react';
import {Container, Row, Col } from 'reactstrap';
// import TeaTable from './TeaTable(backup)';
import TeaBag from './TeaBag';
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

    componentDidMount() {
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



    //POPULATES THE CARDS -- IT IS CALLED IN RENDER
    // teaForm = () => {
    //     return (
    //         <div>
    //             {this.state.teas.map((tea) => {
    //                     return (
    //                         <div className="cards" key={tea.id}>
    //                             <Container>
    //                                 <Card>
    //                                     <CardTitle>{tea.teaName}</CardTitle>
    //                                     <CardBody>
    //                                         <CardSubtitle>{tea.teaDescription}</CardSubtitle>
    //                                         <CardSubtitle>temp: {tea.temp}</CardSubtitle>
    //                                         <CardSubtitle>steep time: {tea.steepTime}</CardSubtitle>
    //                                         <CardSubtitle>price per ounce: {tea.teaPrice}</CardSubtitle>    
    //                                     </CardBody>
    //                                     <Button onClick={this.addToBox} id={tea.id} >add to box</Button>
    //                                 </Card>
    //                             </Container>
    //                            <h5></h5>
    //                            <p>{tea.teaDescription}</p>
    //                            <p>temp: {tea.temp}</p>
    //                            <p>steep time: {tea.steepTime}</p>
    //                            <p>price per ounce: {tea.teaPrice}</p>           
    //                            <AddToBox teaId={tea.id} /> 
    //                            <button onClick={this.addToBox} id={tea.id} >add to box</button> 
    //                         </div>
    //                     )
    //                 })
    //             }        
    //         </div>
    //     )
    // }

    //POSTS YOUR ORDER OF TEA TO PGADMIN -- IT IS CALLED IN TEAFORM() 
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
        // const teas = this.state.teas.length >= 1 ? <TeaTable teas={this.state.teas} /> : <h3>Select a different tea</h3>
        return(
            <div className="main">
                <div className="mainDiv">
                    <Container className="cardbody">
                        <Row className="stupidrow">
                            <Col className="teagrid" sm="9">
                                <TeaBag addToBox={this.addToBox} teas={this.state.teas} />
                            </Col>
                            <div className="teaorder">
                                <OrderForm teaId={this.state.teaId} />
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <TeaBox {...props} auth={auth} />}
    </AuthContext.Consumer>
);