import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsCurrencyDollar } from "react-icons/bs";

function FoodMenu() {
    return (
        <Container fluid className='g-0 mt-0 mb-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h6 className='opacity-50 pb-2'> OUR MENU </h6>
                            <h3 className='mb-5'> Check Our <span className='Real-color pb-2'> Yummy Menu </span> </h3>
                        </div>
                        <div>
                            <ul className='d-flex justify-content-center m-0'>
                                <li className='list-unstyled'> <a className='text-decoration-none mx-3 Real-border fs-3 Real-color' href="http://localhost:3000/"> Starters </a> </li>
                                <li className='list-unstyled'> <a className='text-decoration-none text-dark mx-3 Grey-border fs-3' href="http://localhost:3000/"> Breakfast </a> </li>
                                <li className='list-unstyled'> <a className='text-decoration-none text-dark mx-3 Grey-border fs-3' href="http://localhost:3000/"> Lunch </a> </li>
                                <li className='list-unstyled'> <a className='text-decoration-none text-dark mx-3 Grey-border fs-3' href="http://localhost:3000/"> Dinner </a> </li>
                            </ul>
                        </div>
                        <div className='text-center py-5'>
                            <h6 className='opacity-75 pb-1'> MENU </h6>
                            <h1 className='mb-1 Real-color'> Starters </h1>
                        </div>
                        <Row className='gx-5 gy-5'>
                            <Col className='col-lg-4 col-sm-6 col-12'>
                                <Card className='border-0 px-2'>
                                    <div>
                                        <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png" className='px-5 img-fluid' alt="ERROR 404" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold'>Magnam Tiste</Card.Title>
                                        <Card.Title className='text-center text-secondary'>Lorem, deren, trataro, filede, nerada</Card.Title>
                                        <Card.Text className='text-center Real-color fw-bold fs-2 d-flex align-items-center justify-content-center'> <BsCurrencyDollar className='fs-1' />  5.95 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-lg-4 col-sm-6 col-12'>
                                <Card className='border-0 px-2'>
                                    <div>
                                        <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-2.png" className='px-5 img-fluid' alt="ERROR 404" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold'>Aut Luia</Card.Title>
                                        <Card.Title className='text-center text-secondary'>Lorem, deren, trataro, filede, nerada</Card.Title>
                                        <Card.Text className='text-center Real-color fw-bold fs-2 d-flex align-items-center justify-content-center'> <BsCurrencyDollar className='fs-1' /> 14.95 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-lg-4 col-sm-6 col-12'>
                                <Card className='border-0 px-2'>
                                    <div>
                                        <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-3.png" className='px-5 img-fluid' alt="ERROR 404" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold'>Est Eligendi</Card.Title>
                                        <Card.Title className='text-center text-secondary'>Lorem, deren, trataro, filede, nerada</Card.Title>
                                        <Card.Text className='text-center Real-color fw-bold fs-2 d-flex align-items-center justify-content-center'> <BsCurrencyDollar className='fs-1' />  8.95 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-lg-4 col-sm-6 col-12'>
                                <Card className='border-0 px-2'>
                                    <div>
                                        <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-4.png" className='px-5 img-fluid' alt="ERROR 404" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold'>Eos Luibusdam</Card.Title>
                                        <Card.Title className='text-center text-secondary'>Lorem, deren, trataro, filede, nerada</Card.Title>
                                        <Card.Text className='text-center Real-color fw-bold fs-2 d-flex align-items-center justify-content-center'> <BsCurrencyDollar className='fs-1' />  12.95 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-lg-4 col-sm-6 col-12'>
                                <Card className='border-0 px-2'>
                                    <div>
                                        <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-5.png" className='px-5 img-fluid' alt="ERROR 404" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold'>Eos Luibusdam</Card.Title>
                                        <Card.Title className='text-center text-secondary'>Lorem, deren, trataro, filede, nerada</Card.Title>
                                        <Card.Text className='text-center Real-color fw-bold fs-2 d-flex align-items-center justify-content-center'> <BsCurrencyDollar className='fs-1' />  12.95 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col-lg-4 col-sm-6 col-12'>
                                <Card className='border-0 px-2'>
                                    <div>
                                        <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-6.png" className='px-5 img-fluid' alt="ERROR 404" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold'>Laboriosam Direva</Card.Title>
                                        <Card.Title className='text-center text-secondary'>Lorem, deren, trataro, filede, nerada</Card.Title>
                                        <Card.Text className='text-center Real-color fw-bold fs-2 d-flex align-items-center justify-content-center'> <BsCurrencyDollar className='fs-1' />  9.95 </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FoodMenu;
