import React from 'react';
import { Card, Button, Container, CardGroup } from 'react-bootstrap'
import logo from '../../logo.svg';

class ListCard extends React.Component {
    render() {
        return (
            <Container>
                <CardGroup> 
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}

export default ListCard;