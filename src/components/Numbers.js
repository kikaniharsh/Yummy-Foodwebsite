import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Numbers() {
    return (
        <Container fluid className='g-0 Degits_4 py-5 my-5'>
            <Container>
                <Row>
                    <Col className='col-lg-3 col-sm-6 col-12'>
                        <div className='text-center text-white p-5 w-100 h-100'>
                            <h1 className='mb-2 fw-bold'> 232 </h1>
                            <h4 className='mb-2 opacity-75'> Clients </h4>
                        </div>
                    </Col>
                    <Col className='col-lg-3 col-sm-6 col-12'>
                        <div className='text-center text-white p-5 w-100 h-100'>
                            <h1 className='mb-2 fw-bold'> 521 </h1>
                            <h4 className='mb-2 opacity-75'> Projects </h4>
                        </div>
                    </Col>
                    <Col className='col-lg-3 col-sm-6 col-12'>
                        <div className='text-center text-white p-5 w-100 h-100'>
                            <h1 className='mb-2 fw-bold'> 1453 </h1>
                            <h4 className='mb-2 opacity-75'> Hours Of Support </h4>
                        </div>
                    </Col>
                    <Col className='col-lg-3 col-sm-6 col-12'>
                        <div className='text-center text-white p-5 w-100 h-100'>
                            <h1 className='mb-2 fw-bold'> 32 </h1>
                            <h4 className='mb-2 opacity-75'> Workers </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Numbers;
