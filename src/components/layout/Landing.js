import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Landing extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row >
                        <Col md={{size: 4, offset:4}} className="landing">
                            <h1>Deja Brew</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Landing;