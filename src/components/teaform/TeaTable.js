// import React from 'react';
// import { AuthContext } from '../authform/AuthContext';
// import { Card, CardTitle, CardBody, CardText, Button, Row, Col, CardDeck } from 'reactstrap';

// class TeaTable extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { }
//     }

//     render() {
//         return (
//             <div>
//                 <Container className="container-fluid">
//                     <Row>
//                         <Col md="8">
//                             <div>
//                                 {this.props.teas.map((tea, index) => {
//                                     return (
//                                         <div className="cards" key={index}>
//                                                 <h5>{tea.teaName}</h5>
//                                                 <p>{tea.teaDescription}</p>
//                                                 <p>temp: {tea.temp}</p>
//                                                 <p>steep time: {tea.steepTime}</p>
//                                                 <p>price per ounce: {tea.teaPrice}</p>          
//                                                 <button onClick={this.props.addToBox}>add to box</button>
//                                             </div>
//                                         )
//                                     })
//                                 }        
//                             </div>
//                         </Col>
//                         <Col className="col-4 teaorder">
//                                 <h1>I am teaorder</h1>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default props => (
//     <AuthContext.Consumer>
//         {auth => <TeaTable {...props} auth={auth} />}
//     </AuthContext.Consumer>
// );
