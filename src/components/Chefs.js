import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Chefs() {
    return (
        <Container fluid className='g-0 section-bg py-5'>
            <Container>
                <Row className='g-0'>
                    <Col>
                        <div className='text-center'>
                            <h6 className='opacity-50 mb-2'> CHEFS </h6>
                            <h2 className='text-uppercase mb-2'> Our <span className='Real-color'>Proffesional</span> Chefs </h2>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0'>
                    <Col>
                        <CardGroup className='my-3'>
                            <Row>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <Card className='m-3 border-0 rounded-2 overflow-hidden Card-Zoom w-100'>
                                        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-1.jpg" />
                                        <Card.Body className='text-center p-4'>
                                            <Card.Title className='mb-2'>Walter White</Card.Title>
                                            <Card.Title className='opacity-50 fs-6 mb-3'>Master Chef</Card.Title>
                                            <Card.Text>
                                                Velit aut quia fugit et et. Dolorum ea  vel tempore tenetur ipsa quae aut. Ipsum exercitationem tenetur iure minima enim corporis et voluptate.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <Card className='m-3 border-0 rounded-2 overflow-hidden Card-Zoom w-100'>
                                        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-2.jpg" />
                                        <Card.Body className='text-center p-4'>
                                            <Card.Title className='mb-2'>Sarah Jhonson</Card.Title>
                                            <Card.Title className='opacity-50 fs-6 mb-3'>Patissier</Card.Title>
                                            <Card.Text>
                                                Quo esse repellendus quia id. Est eum et pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <Card className='m-3 border-0 rounded-2 overflow-hidden Card-Zoom w-100'>
                                        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-3.jpg" />
                                        <Card.Body className='text-center p-4'>
                                            <Card.Title className='mb-2'>William Anderson</Card.Title>
                                            <Card.Title className='opacity-50 fs-6 mb-3'>Cook</Card.Title>
                                            <Card.Text>
                                                Vero omnis enim consequatur. Voluptas unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Chefs;
