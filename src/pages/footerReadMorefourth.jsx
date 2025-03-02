import { Col, Divider, Row } from 'antd';
import React from 'react';
import logo from '../assets/images/logo.png';
import linkedin from '../assets/images/linkedinicon.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
const footerReadMorefourth = () => {
  return (
    <div
      className=' p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 h-auto d-flex flex-column gap-5 align-items-center w-100 footer-container '
      style={{ minHeight: '50vh'}}
    >
      <Row gutter={[20, 15]} className='w-100 p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 ' style={{ paddingBottom: 0 }}>
        <Col xl={7} lg={7} md={10} sm={12} className='d-flex flex-column gap-3'>
          <span>
            <img src={logo} alt='' width={150} height={50} loading="lazy"/>
          </span>
          <p className='footer-company-dis fs-6 fw-normal custom-roman-font'>
            Danip Technologies is a New Delhi, India, based IT Services &
            Consultancy company providing world-class IT solutions
          </p>
          <div className='d-flex gap-2 '>
            <a
              href='https://www.facebook.com/DANIP-103200858456074'
              target='_blank'
              rel="noreferrer"
              aria-label="facebook"
            >
              <img width={30} height={30} loading="lazy" src={facebook} alt='' />
            </a>
            <a
              href='https://www.instagram.com/daniptechnologies/'
              target='_blank'
              rel="noreferrer"
              aria-label="instagram"
            >
              <img width={30} height={30} loading="lazy" src={instagram} alt='' />
            </a>
            <a href='https://twitter.com/TechDanip?s=20' aria-label="twitter" rel="noreferrer" target='_blank'>
              <img width={30} height={30} loading="lazy" src={twitter} alt='' />
              
            </a>
            <a
              href='https://www.linkedin.com/company/danip-technologies/'
              target='_blank'
              rel="noreferrer"
              aria-label="linkedin"
            >

              <img width={30} height={30} loading="lazy" src={linkedin} alt='' />
            </a>
          </div>
        </Col>
        <Col xl={5} lg={5} md={7} sm={10}>
          <span className='fs-5 fw-bold custom-font'>IT Services</span>
          <Divider className='p-0 mt-2 border-black mb-3' />
          <ul className='list-unstyled d-flex flex-column gap-2 text-black custom-roman-font'>
            <li>Consulting</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Tech Support</li>
            <li>Offshore Staffing</li>
            <li>EDI</li>
            <li>Tech Solutions</li>
          </ul>
        </Col>
        <Col xl={5} lg={5} md={7} sm={10}>
          <span className='fs-5 fw-bold custom-font'>Industries</span>
          <Divider className='p-0 mt-2 border-black mb-3' />
          <ul className='list-unstyled d-flex flex-column gap-2 text-black custom-roman-font '>
            <li>Insurance</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Media</li>
            <li>Banking</li>
          </ul>
        </Col>
        <Col xl={7} lg={7} md={7} sm={10}>
          <span className='fs-5 fw-bold custom-font'>Contact Us</span>
          <Divider className='p-0 mt-2 border-black mb-3' />
          <div className='d-flex flex-column gap-4 custom-roman-font'>
            <div className='d-flex flex-column gap-2'>
              <span className='fw-bold'>UAE</span>
              <span className='fw-normal fs-6'>
                Business Tower - Albarsha1, <br />
                Business Bay <br />
                Dubai, UAE
              </span>
            </div>
            <div className='d-flex flex-column gap-2'>
              <span className='fw-bold'>India</span>
              <span className='fw-normal fs-6'>
                B1/H3, Mohan Industrial Estate
                <br />
                New Delhi-110044,
                <br />
                India
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default footerReadMorefourth;
