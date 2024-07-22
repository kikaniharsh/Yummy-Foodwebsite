import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function BookTable() {
    return (
        <Container fluid className='g-0 mb-5 py-5'>
            <Container>
                <Row className='g-0'>
                    <Col>
                        <div className='text-center'>
                            <h6 className='opacity-50 mb-3'> BOOK A TABLE </h6>
                            <h3 className='text-uppercase mb-5'> Book <span className='Real-color'>Your Stay</span> With Us </h3>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0'>
                    <Col className='col-lg-4 col-12'>
                        <div>
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/reservation.jpg" alt="ERROR 404" className='img-fluid' />
                        </div>
                    </Col>
                    <Col className='col-lg-8 col-12 section-bg d-flex align-items-center py-4'>
                        <form action="" method="get" className='px-5 '>
                            <Row className='gy-4'>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <div>
                                        <input type="text" name="" id="" placeholder='Your Name' className='p-2 border w-100' />
                                    </div>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <div>
                                        <input type="text" name="" id="" placeholder='Your Email' className='p-2 border w-100' />
                                    </div>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <div>
                                        <input type="text" name="" id="" placeholder='Your Phone' className='p-2 border w-100' />
                                    </div>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <div>
                                        <input type="text" name="" id="" placeholder='Date' className='p-2 border w-100' />
                                    </div>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <div>
                                        <input type="text" name="" id="" placeholder='Time' className='p-2 border w-100' />
                                    </div>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 col-12'>
                                    <div>
                                        <input type="number" name="" id="" placeholder='# of people' className='p-2 border w-100' />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='mb-3'>
                                        <textarea name="" id="" cols="30" rows="5" className='p-2 border w-100' placeholder='Message'></textarea>
                                    </div>
                                    <div className='text-center py-3'>
                                        <Button className="Real border-0 Nav-Btn py-2 px-5"> Book a Table </Button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default BookTable;