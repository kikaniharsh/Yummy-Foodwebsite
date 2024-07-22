import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className='g-0 py-5 Footer-bg'>
            <Container>
                <Row className='border-bottom border-opacity-25 pb-lg-2 pb-sm-3 g-0'>
                    <Col className='col-lg-3 col-sm-6 d-flex justify-content-center my-sm-3 col-12 mb-5'>
                        <div className='d-flex text-white'>
                            <div>
                                <IoLocationOutline className='fs-3' />
                            </div>
                            <div className='ms-2'>
                                <h5 className='mb-3'> Address </h5>
                                <p className='opacity-50'> A - 108 Adam Street AK <br />Road  ,  395000 - Gujarat </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-3 col-sm-6 d-flex justify-content-center my-sm-3 col-12 mb-5'>
                        <div className='d-flex text-white'>
                            <div>
                                <FiPhone className='fs-3' />
                            </div>
                            <div className='ms-2'>
                                <h5 className='mb-3'> Reservations </h5>
                                <p className='m-0 opacity-50'> Phone : +91 70160 85806</p>
                                <p className='m-0 opacity-50'> Email : info@example.com </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-3 col-sm-6 d-flex justify-content-center my-sm-3 col-12 mb-5'>
                        <div className='d-flex text-white'>
                            <div>
                                <MdOutlineAccessTime className='fs-3' />
                            </div>
                            <div className='ms-2'>
                                <h5 className='mb-3'>Opening Hours </h5>
                                <p className='m-0 opacity-50'> Mon - Sat : 11AM - 23PM </p>
                                <p className='m-0 opacity-50'> Sunday : Closed </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-3 col-sm-6 d-flex justify-content-center my-sm-3 col-12 mb-5'>
                        <div className='text-white'>
                            <h5 className='mb-3'>Follow Us </h5>
                            <div>
                                <FaTwitterSquare className='fs-3 me-3 opacity-75' />
                                <FaFacebookSquare className='fs-3 me-3 opacity-75' />
                                <FaInstagramSquare className='fs-3 me-3 opacity-75' />
                                <FaLinkedin className='fs-3 me-3 opacity-75' />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0'>
                    <div className='text-center text-white mt-4'>
                        <p className='opacity-50'> © Copyright <span className='fw-bold'> Yummy </span> . All Rights Reserved </p>
                        <p className='opacity-50'> Designed by Kikaniharsh </p>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;

