import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineMap } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <Container fluid className='g-0 pt-0 pb-5'>
            <Container>
                <Row className='g-0'>
                    <Col>
                        <div className='text-center'>
                            <h6 className='opacity-50 mb-3'> CONTACT </h6>
                            <h3 className='text-uppercase mb-5'> Need Help ? <span className='Real-color'>Contact Us</span></h3>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0'>
                    <Col>
                        <div>
                            <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.3536198002143!2d85.15086627517725!3d25.593163177458177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5885e0ab42fd%3A0x1024b41aca17b738!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1705504146133!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100'></iframe>
                        </div>
                    </Col>
                </Row>
                <Row className='gy-4 mt-1'>
                    <Col className='col-lg-6 col-12'>
                        <div className='d-flex align-items-center p-4 section-bg'>
                            <div className='Contact-Round rounded-circle text-center py-3'>
                                <MdOutlineMap className='text-white fs-2' />
                            </div>
                            <div className='ms-3'>
                                <h4 className='opacity-75 fw-bolder mb-0'>Our Address </h4>
                                <p className='mb-0'> A - 108 Adam Street , New York , NY 535022 </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-6 col-12'>
                        <div className='d-flex align-items-center p-4 section-bg'>
                            <div className='Contact-Round rounded-circle text-center py-3'>
                                <FiMail className='text-white fs-2' />
                            </div>
                            <div className='ms-3'>
                                <h4 className='opacity-75 fw-bolder mb-0'>Email Us </h4>
                                <p className='mb-0'> contact@example.com </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-6 col-12'>
                        <div className='d-flex align-items-center p-4 section-bg'>
                            <div className='Contact-Round rounded-circle text-center py-3'>
                                <IoCallOutline className='text-white fs-2' />
                            </div>
                            <div className='ms-3'>
                                <h4 className='opacity-75 fw-bolder mb-0'>Call Us </h4>
                                <p className='mb-0'> +1 5589 55488 55 </p>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-6 col-12'>
                        <div className='d-flex align-items-center p-4 section-bg'>
                            <div className='Contact-Round rounded-circle text-center py-3'>
                                <IoShareSocialOutline className='text-white fs-2' />
                            </div>
                            <div className='ms-3'>
                                <h4 className='opacity-75 fw-bolder mb-0'>Opening Hours </h4>
                                <p className='mb-0'> Mon - Sat : 11AM - 23PM , Sunday : Closed </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='my-4 gy-4 shadow-lg m-0 p-2'>
                    <Col className='col-lg-6 col-12'>
                        <div>
                            <input type="text" name="" id="" placeholder='Your Name' className='p-2 border w-100' />
                        </div>
                    </Col>
                    <Col className='col-lg-6 col-12'>
                        <div>
                            <input type="text" name="" id="" placeholder='Your Email' className='p-2 border w-100' />
                        </div>
                    </Col>
                    <Col className='col-12'>
                        <div>
                            <input type="text" name="" id="" placeholder='Subject' className='p-2 border w-100' />
                        </div>
                    </Col>
                    <Col className='col-12'>
                        <div>
                            <textarea name="Message" id="" cols="30" rows="5" className='p-2 border w-100' placeholder='Message'></textarea>
                        </div>

                    </Col>
                    <Col className='col-12 my-4'>
                        <div className='text-center'>
                            <Button className="Real border-0 rounded-pill p-2 px-5"> Send Message </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact;
