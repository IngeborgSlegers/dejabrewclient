import React from 'react';
import { Button, Card, CardBody, CardGroup, CardTitle, CardSubtitle } from 'reactstrap';
import {AuthContext} from '../authform/AuthContext';

class TeaBag extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            teas: [],
            teaId: []
        }
    }

    render() {
        return(
            <div className="teadiv">
                <CardGroup className="teabag" >
                    {this.props.teas.map((tea) => {
                        return (
                            <Card className="eachone" key={tea.id}>
                                <CardBody className="teabody">
                                <CardTitle className="teaname">{tea.teaName}</CardTitle>
                                    <CardSubtitle className="type">{tea.teaType}</CardSubtitle>
                                    <CardSubtitle className="description">{tea.teaDescription}</CardSubtitle>
                                    <CardSubtitle className="temp">temp: {tea.temp}</CardSubtitle>
                                    <CardSubtitle className="time">steep time: {tea.steepTime}</CardSubtitle>
                                    <CardSubtitle className="price">price per ounce: {tea.teaPrice}</CardSubtitle>    
                                </CardBody>
                                    <Button className="addtobox" onClick={this.props.addToBox} id={tea.id} >add to box</Button>
                            </Card>
                        )
                    })}
                </CardGroup>
            </div>
        )                 
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <TeaBag {...props} auth={auth} />}
    </AuthContext.Consumer>
);