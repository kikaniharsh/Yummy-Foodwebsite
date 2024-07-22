import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Gallery() {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        accessibility: true,
        dots: true,
    };
    return (
        <Container fluid className='g-0 pt-4 pb-5 section-bg'>
            <Container>
                <Row className='g-0'>
                    <Col>
                        <div className='text-center'>
                            <h6 className='opacity-50 mb-3'> GALLERY </h6>
                            <h3 className='text-uppercase mb-4'> CHEAK <span className='Real-color'>OUR GALLERY</span></h3>
                        </div>
                    </Col>
                </Row>
                <Slider {...settings}>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-1.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-2.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-3.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-4.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-5.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-6.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-7.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='mt-3 mb-5'>
                            <Col className='px-4'>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-8.jpg" alt="" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>
        </Container>
    )
}

export default Gallery;
