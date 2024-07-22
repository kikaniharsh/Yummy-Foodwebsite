import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./img1.jpg";
function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Container fluid className='g-0 section-bg py-5 mb-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center mb-5'>
                            <h6 className='opacity-50'> TESTIMONIALS </h6>
                            <h2 className='text-uppercase'> What Are They <span className='Real-color'> Saying About Us </span> </h2>
                        </div>
                    </Col>
                </Row>
                <Slider {...settings}>
                    <div>
                        <Row className='justify-content-center pb-5'>
                            <Col className='col-lg-6 col-12'>
                                <div className='Left-Testimonials ps-4'>
                                    <p className='opacity-75'> <FaQuoteLeft className='Real-color fs-4 pe-2' /> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam , ultricies eget id , aliquam eget nibh et. Maecen aliquam, risus at semper. <FaQuoteRight className='Real-color fs-4 ps-2' /></p>
                                    <h3> Kikani harsh </h3>
                                    <h6 className='opacity-75'> Ceo & Founder </h6>
                                    <div>
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-2 col-12 d-flex justify-content-center'>
                                <div>
                                    <img src={img1} alt="ERROR 404" className='img-fluid rounded-circle Img-Testi-Logo' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-6 col-12'>
                                <div className='Left-Testimonials ps-4'>
                                    <p className='opacity-75'> <FaQuoteLeft className='Real-color fs-4 pe-2' /> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam , ultricies eget id , aliquam eget nibh et. Maecen aliquam, risus at semper. <FaQuoteRight className='Real-color fs-4 ps-2' /></p>
                                    <h3> Kikani harsh </h3>
                                    <h6 className='opacity-75'> Ceo & Founder </h6>
                                    <div>
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-2 col-12 d-flex justify-content-center'>
                                <div>
                                    <img src={img1} alt="ERROR 404" className='img-fluid rounded-circle Img-Testi-Logo' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-6 col-12'>
                                <div className='Left-Testimonials ps-4'>
                                    <p className='opacity-75'> <FaQuoteLeft className='Real-color fs-4 pe-2' /> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam , ultricies eget id , aliquam eget nibh et. Maecen aliquam, risus at semper. <FaQuoteRight className='Real-color fs-4 ps-2' /></p>
                                    <h3> Kikani harsh </h3>
                                    <h6 className='opacity-75'> Ceo & Founder </h6>
                                    <div>
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-lg-2 col-12 d-flex justify-content-center'>
                                <div>
                                    <img src={img1} alt="ERROR 404" className='img-fluid rounded-circle Img-Testi-Logo' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>
        </Container>
    )
}

export default Testimonials;
