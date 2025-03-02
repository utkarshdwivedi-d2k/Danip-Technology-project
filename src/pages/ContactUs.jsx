import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import contactusbg from '../assets/video/contactus-bg.mp4';
import { Button, Col, Form, Input, Row } from 'antd';
import location from '../assets/images/location.png';
import telephone from '../assets/images/telephone.png';
import Footer from "../components/Footer";
import { MailFilled } from "@ant-design/icons";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
    <Helmet>
      <title>
      Danip Technologies - Enabling Digital Transformation
      </title>
      <meta
        name='description'
        content={
          'Danip Technologies provides top-notch Mobile App Development Services in Dubai. Our expert team crafts innovative and user-friendly apps for iOS and Android platforms. Contact us today!'
        }
      />
    </Helmet>
    <div className=' w-100 contact-us case-study'>
      <div className='w-100 position-relative'>
        <Navbar scroll={scroll} />
      </div>
      <div className='w-100 d-flex '>
        <div className='p-0 w-100   contact-us-navbar-container position-relative'>
          <div className='video-container w-100 mt-0  '>
            <video autoPlay muted loop className='background-video w-100'>
              <source src={contactusbg} type='video/mp4' />
            </video>
          </div>
          <Row
            justify={'center'}
            className='mt-4 w-100 p-0 text-white position-absolute top-0 case-study-heading-container'
          >
            <Col
              xl={13}
              lg={13}
              md={17}
              sm={20}
              xs={22}
              className='p-0 m-0 text-center d-flex flex-column gap-3'
            >
              <span className='custom-font case-study-heading'>
                Let's help you bring digital transformation to your business.
              </span>
            </Col>
          </Row>
          <div className='w-100 d-flex justify-content-center  contact-us-card'>
            <Row
              justify={'center'}
              className='w-75 rounded-3 bg-white contact-form-container'
            >
              <Col xl={12} lg={12} md={24} sm={24} xs={24} className='p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3 pt-4 pb-4'>
                <div className='w-100 text-center'>
                  <span
                    className='fs-4 fw-bold text-black custom-font'
                    style={{ letterSpacing: '0.1em' }}
                  >
                    Connect with our IT Experts
                  </span>
                  <Form layout='vertical' className='p-xl-5 p-lg-5 p-md-4 p-3 pt-5 pb-0 contact-us-form'>
                    <Row gutter={[10, 10]} className='p-0 m-0'>
                      <Col xl={12} lg={12} md={12} sm={24} xs={24} >
                        <Form.Item label='First Name' name='fname'>
                          <Input className='border-0 border-bottom border-black rounded-0' />
                        </Form.Item>
                      </Col>
                      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <Form.Item label='Last Name' name='lmane'>
                          <Input className='border-0 border-bottom border-black rounded-0' />
                        </Form.Item>
                      </Col>
                      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item label='Email' name='email'>
                          <Input className='border-0 border-bottom border-black rounded-0' />
                        </Form.Item>
                      </Col>
                      <Col xl={8} lg={8} md={10} sm={24} xs={24}>
                        <Form.Item label='Code' name='code'>
                          <Input className='border-0 border-bottom border-black rounded-0' />
                        </Form.Item>
                      </Col>
                      <Col xl={16} lg={16} md={14} sm={24} xs={24}>
                        <Form.Item label='Phone' name='phone'>
                          <Input className='border-0 border-bottom border-black rounded-0' />
                        </Form.Item>
                      </Col>
                      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Form.Item label="What's your Query?" name='email'>
                          <Input className='border-0 border-bottom border-black rounded-0' />
                        </Form.Item>
                      </Col>
                      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <Button
                          className='w-100  border-0  fs-5 fw-medium text-white h-100 mt-1'
                          style={{ backgroundColor: '#e9464a' }}
                        >
                          <span className='custom-roman-font'>
                            Talk to our experts
                          </span>
                        </Button>
                      </Col>
                    </Row>
                    <div className='mt-2 fst-italic'>Thanks for Submitting</div>
                  </Form>
                </div>
              </Col>
              <Col xl={12} lg={12} md={24} sm={24} xs={24} className='pt-4 bg-light d-flex flex-column justify-content-between rounded-end-3'>
                <div className='p-4 pt-0 w-100'>
                  <span
                    className='fs-4 fw-bold text-black custom-font'
                    style={{ letterSpacing: '0.1em' }}
                  >
                    Contact Information
                  </span>
                  <div className='pt-5 d-flex flex-column gap-5 custom-font'>
                    <div className="d-flex flex-column gap-3">
                      <span className='fs-6 fw-bold'>India Center</span>
                      <span className="d-flex gap-2 align-items-center">
                        <img src={location} alt='' width={20}  height={20}/>
                        B1/H3, Mohan Industrial Estate New Delhi-<br/>110044, India
                      </span>
                      <span className="d-flex gap-2 align-items-center"> 
                        <img src={telephone} alt='' width={20}  height={20} />
                        +91-9810709239
                      </span>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <span className='fs-6 fw-bold'>Dubai Center</span>
                      <span className="d-flex gap-2 align-items-center">
                        <img src={location} alt='' width={20}  height={20}/>
                        Business Tower - Albarsha1,  Business Bay <br/>Dubai, UAE
                      </span>
                      <span className="d-flex gap-2 align-items-center"> 
                        <img src={telephone} alt='' width={20}  height={20} />
                        +971-521858963
                      </span>
                    </div>
                  </div>
                </div>
                  <div className="w-100 border border-2 pt-3 pb-3 p-4 rounded-bottom-3 rounded-start-0 bg-white">
                    <span className="d-flex align-items-center gap-3 fs-6 fw-medium custom-font"><MailFilled /> <span className="text-decoration-underline" >contact@daniptechnologies.com</span></span>
                  </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
    </div>
  );
};

export default ContactUs;
