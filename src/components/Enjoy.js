import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Enjoy() {
    return (
        <Container fluid className='g-0 section-bg'>
            <Container>
                <Row className='justify-content-between text'>
                    <Col className='col-lg-5 order-lg-1 order-sm-2 mb-sm-5 col-sm-12 col-12 order-2 mb-5  text-lg-start text-center text-sm-center d-flex flex-column justify-content-center'>
                        <div>
                            <div>
                                <h1 className='fw-bold mb-4 pe-3'> Enjoy Your Healthy Delicious Food </h1>
                            </div>
                            <div>
                                <p className='mb-4 pe-4 text-lg-start text-sm-center'>Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food.<br/> Food has a culture. It has a history. It has a story.</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-lg-start justify-content-sm-center justify-content-center'>
                                <Link to='/Booktable'> <Button className="Real border-0 rounded-pill px-5"> Book a Table </Button> </Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-5 order-lg-2 order-sm-1 col-sm-12 col-12 order-1'>
                        <div className='my-5'>
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png" className='w-100 py-3' alt="ERROR 404" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Enjoy;
