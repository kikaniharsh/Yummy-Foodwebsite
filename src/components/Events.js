import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Events() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Container fluid className='g-0 mt-0 mb-5'>
            <Row className='g-0'>
                <Col>
                    <div className='text-center'>
                        <h6 className='opacity-50 pb-2'> EVENETS </h6>
                        <h3 className='text-uppercase pb-4'> Share <span className='Real-color'> Your Moments </span> In Our Restaurant </h3>
                    </div>
                </Col>
            </Row>
            <Slider {...settings}>
                <div>
                    <Row className='g-0 pb-5'>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-1 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Private Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$  289</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-2 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Birthday Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 499</span></Card.Title>
                                    <Card.Text>
                                        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-3 min-vh-100'>
                                <Card.Body className='text-white  position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Custom Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 99</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='g-0 pb-5'>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-1 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Private Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$  289</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-2 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Birthday Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 499</span></Card.Title>
                                    <Card.Text>
                                        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-3 min-vh-100'>
                                <Card.Body className='text-white  position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Custom Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 99</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='g-0 pb-5'>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-1 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Private Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$  289</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-2 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Birthday Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 499</span></Card.Title>
                                    <Card.Text>
                                        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-3 min-vh-100'>
                                <Card.Body className='text-white  position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Custom Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 99</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='g-0 pb-5'>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-1 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Private Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$  289</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-2 min-vh-100'>
                                <Card.Body className='text-white position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Birthday Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 499</span></Card.Title>
                                    <Card.Text>
                                        Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-4 col-sm-6 col-12'>
                            <Card className='Even-Img-3 min-vh-100'>
                                <Card.Body className='text-white  position-absolute bottom-0 px-4'>
                                    <Card.Title className='fs-2 fw-bold'>Custom Parties</Card.Title>
                                    <Card.Title className='fs-2'><span className='Real-border'>$ 99</span></Card.Title>
                                    <Card.Text>
                                        Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Slider>
        </Container>
    )
}

export default Events;
