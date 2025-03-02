import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Button, Col, Divider, Row } from 'antd';
import { images } from '../controller/images';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const Aboutus = () => {
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
    <div className='w-100 aboutus-container' style={{ color: '#363E3E' }}>
      <div className='aboutus-heading-container text-white position-relative'>
        <Navbar scroll={scroll} />
        <Row
          gutter={[0, 15]}
          className='heading-container p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pb-5'
        >
          <Col
            xl={17}
            lg={17}
            md={17}
            sm={17}
            xs={24}
            className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
          >
            <span className='lh-sm custom-font aboutus-heading custom-black-color'>
              Inventing a Better Future with Innovative Tech Solutions!
            </span>

            <span className='custom-font heading-paragraph text-muted'>
              We as an experienced IT company providing robust tech solutions
              across the world. Our client-oriented approach makes us your
              trusted technology partner.
            </span>
            <Row>
              <Col xl={8} lg={8} md={10} sm={15} xs={22}>
                <Button
                  className='w-100  fs-5 fw-medium h-100 mt-3 get-in-touch-btn'
                >
                  <span className='custom-roman-font'>Send Us A Query</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4  h-auto'>
        <Row gutter={[12, 15]} className='h-100'>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className='d-flex flex-column gap-3 feturing-container'
          >
            <span
              className='fs-2 fw-bold lh-sm custom-font'
              style={{ color: '#363E3E' }}
            >
              We are a Technology
              <br /> Company
            </span>
            <span className='fs-6 custom-roman-font custom-paragraph-color'>
              Danip Technologies is a New Delhi, India-based IT Services &
              Consultancy company providing world-class IT solutions, web
              development, support and maintenance, and staffing services in the
              USA, Canada, and EMEA.
            </span>
            <Row gutter={[15, 15]}>
              <Col
                span={7}
                className='d-flex justify-content-center align-items-center'
              >
                <img src={images.award} className='reconised-image' alt='' />
              </Col>
              <Col
                span={10}
                className=' d-flex justify-content-center align-items-center'
              >
                <img
                  src={images.cirtificate}
                  className='reconised-image w-100'
                  alt=''
                />
              </Col>
              <Col
                span={7}
                className=' d-flex justify-content-center align-items-center'
              >
                <img
                  src={images.risingStar}
                  className='reconised-image'
                  alt=''
                />
              </Col>
            </Row>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className='overflow-hidden'
          >
            <img
              src={images.stagephoto}
              alt=''
              width={'100%'}
              height={'100%'}
              className='rounded-3'
            />
          </Col>
        </Row>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4  h-auto our-values'>
        <Row justify={'center'} className='m-0 p-0'>
          <Col
            xl={14}
            lg={14}
            md={17}
            sm={20}
            xs={22}
            className='p-0 m-0 text-center d-flex flex-column gap-3'
          >
            <span className='fs-2 fw-bold lh-sm custom-font '>Our Values</span>
            <span className='fs-6 custom-roman-font custom-paragraph-color'>
              These are the core values that aid us to become your trusted tech
              partner.  We are a team of eager learner who believes in the power
              of teamwork and client satisfaction.
            </span>
          </Col>
        </Row>
        <Row gutter={[24, 12]} justify={'center'} className='p-5'>
          <Col xl={11} lg={11} md={11} sm={24} xs={24} className=''>
            <div className='d-flex flex-column gap-3 text-start p-xl-4 p-lg-4 p-md-4 p-sm-3 p-3 '>
              <div>
                <img
                  src={images.weeklyUpdate}
                  width={58}
                  height={58}
                  className='rounded-2'
                  alt=''
                />
              </div>
              <h5
                className=' fw-bold custom-font'
                style={{ letterSpacing: '0.05em' }}
              >
                1. Customer-oriented
              </h5>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                We prioritize our customers' satisfaction, which is why we hold
                ourselves accountable for delivering on our promises and
                providing them with excellent service
              </p>
            </div>
          </Col>
          <Col
            xl={1}
            lg={1}
            md={1}
            sm={0}
            xs={0}
            className='d-flex justify-content-center'
          >
            <Divider type='vertical' className='h-100' />
          </Col>
          <Col xl={11} lg={11} md={11} sm={24} xs={24}>
            <div className='d-flex flex-column gap-3 text-start p-xl-4 p-lg-4 p-md-4 p-sm-3 p-3'>
              <div>
                {' '}
                <img
                  src={images.robust}
                  width={58}
                  height={58}
                  className='rounded-2'
                  alt=''
                />
              </div>
              <h5
                className=' fw-bold custom-font'
                style={{ letterSpacing: '0.05em' }}
              >
                2. Passionate & innovative
              </h5>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-roman-font'
                style={{ letterSpacing: 'normal' }}
              >
                Our commitment to satisfying our valuable customers with our
                services filled us with passion. We always strive to dig the
                most effective and innovative solutions to serve our customers.
              </p>
            </div>
          </Col>
          <Col
            xl={11}
            lg={11}
            md={11}
            sm={0}
            xs={0}
            className='d-flex justify-content-center'
          >
            <Divider style={{ minWidth: '0%', width: '90%' }} />
          </Col>
          <Col
            xl={11}
            lg={11}
            md={11}
            sm={0}
            xs={0}
            className='d-flex justify-content-center'
          >
            <Divider style={{ minWidth: '0%', width: '90%' }} />
          </Col>
          <Col xl={11} lg={11} md={11} sm={24} xs={24}>
            <div className='d-flex flex-column gap-3 text-start p-xl-4 p-lg-4 p-md-4 p-sm-3 p-3'>
              <div>
                {' '}
                <img
                  src={images.safepayment}
                  width={58}
                  height={58}
                  className='rounded-2'
                  alt=''
                />
              </div>
              <h5
                className=' fw-bold custom-font'
                style={{ letterSpacing: '0.05em' }}
              >
                3. Enthusiastic learner
              </h5>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                We are always keen to learn new technologies, trends, and
                approaches to keep ourselves updated. It helps our clients in
                leveraging the most competitive and latest technology solutions.
              </p>
            </div>
          </Col>
          <Col
            xl={1}
            lg={1}
            md={1}
            sm={0}
            xs={0}
            className='d-flex justify-content-center'
          >
            <Divider type='vertical' className='h-100' />
          </Col>
          <Col xl={11} lg={11} md={11} sm={24} xs={24}>
            <div className='d-flex flex-column gap-3 text-start p-xl-4 p-lg-4 p-md-4 p-sm-3 p-3'>
              <div>
                {' '}
                <img
                  src={images.ourexperties}
                  width={58}
                  height={58}
                  className='rounded-2'
                  alt=''
                />
              </div>
              <h5
                className=' fw-bold custom-font'
                style={{ letterSpacing: '0.05em' }}
              >
                4. Collaborative working
              </h5>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Our great collaborative skills are our strength, support each
                other and work closely with our clients to leverage our full
                potential. Our approach to collaborating the efforts and minds
                results in creating the best solution.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className='w-100 about-us-artical-div-container'>
        <div className='about-us-artical-div d-flex justify-content-between align-items-center'>
          <span className='fs-5 custom-roman-font'>
            <span className='custom-color fw-semibold'>
              Danip Technologies:
            </span>{' '}
            Aiding Businesses With Digital Transformation
          </span>
          <Button
            className='custom-btn rounded-5 fs-6 fw-medium d-flex justify-content-center align-items-center p-3 custom-roman-font'
            onClick={() => {
              window.open(
                'https://technology.siliconindia.com/cover-story/danip-technologies-aiding-businesses-with-digital-transformation-nwid-38671.html',
                '_blank'
              );
            }}
          >
            Read More
          </Button>
        </div>
      </div>
      <div className='our-technologies-container p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pt-5 w-100 h-auto position-relative'>
        <Row gutter={[12, 15]} className='w-100 justify-content-center h-100'>
          <Col
            xl={15}
            lg={15}
            md={17}
            sm={20}
            xs={24}
            className='d-flex flex-column justify-content-center align-items-center text-center gap-2'
          >
            <span
              className='fs-1 custom-color lh-sm custom-font'
              style={{ fontWeight: 700 }}
            >
              Our Technologies
            </span>
            <div
              className='underline-bar-custom'
              style={{ background: '#184D98' }}
            ></div>
          </Col>
          <Col
            xl={19}
            lg={19}
            md={21}
            sm={23}
            xs={24}
            className='text-center mt-3'
          >
            <span className='fs-6 custom-roman-font custom-paragraph-color'>
              With our rich experience in the Microsoft Technology stack and
              Oracle tech, we design, develop, test, and deploy robust
              enterprise applications.
            </span>
          </Col>
        </Row>
        <Row gutter={[12, 24]} className='mt-5 justify-content-center'>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={20}
            xs={24}
            className='position-relative'
            style={{ minHeight: '80vh' }}
          >
            <Divider type='vertical' dashed className='line-left' />
            <Divider type='vertical' dashed className='line-right' />
            <div className=' d-flex justify-content-center w-100 h-100'>
              <div className='w-100 h-100 d-flex flex-column gap-4'>
                <Row justify={'center'}>
                  <Col
                    xl={10}
                    lg={12}
                    md={15}
                    sm={15}
                    xs={17}
                    className='border d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img
                      src={images.microsoftlogi}
                      alt=''
                      className='reconised-image'
                    />
                  </Col>
                </Row>
                <Row justify={'center'} className='d-flex gap-4'>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box  '
                  >
                    <img
                      src={images.azurecloudlogo}
                      alt=''
                      className='reconised-image'
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img
                      src={images.awsLogo}
                      alt=''
                      className='reconised-image'
                    />
                  </Col>
                </Row>
                <Row justify={'center'} className='d-flex gap-4'>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.microsoft_edited} alt='' className='' />
                  </Col>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.chashlogo} alt='' className='' />
                  </Col>
                </Row>
                <Row justify={'center'} className='d-flex gap-4'>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.sqlServer} alt='' className='' />
                  </Col>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.vb_net} alt='' className='' />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={20}
            xs={24}
            className='position-relative'
            style={{ minHeight: '80vh' }}
          >
            <Divider type='vertical' dashed className='line-left' />
            <Divider type='vertical' dashed className='line-right' />
            <div className=' d-flex justify-content-center w-100'>
              <div className='w-100 d-flex flex-column gap-4'>
                <Row justify={'center'}>
                  <Col
                    xl={10}
                    lg={12}
                    md={15}
                    sm={15}
                    xs={17}
                    className='border d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img
                      src={images.oracleLogo}
                      alt=''
                      className='reconised-image'
                    />
                  </Col>
                </Row>
                <Row justify={'center'} className='d-flex gap-4'>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box  '
                  >
                    <img
                      src={images.springbootlogo}
                      alt=''
                      className='reconised-image'
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.javaLogo} alt='' className='' />
                  </Col>
                </Row>
                <Row justify={'center'} className='d-flex gap-4'>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.autodeskrevitlogo} alt='' className='' />
                  </Col>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img
                      src={images.icon_AngularJS_edited}
                      alt=''
                      className=''
                    />
                  </Col>
                </Row>
                <Row justify={'center'} className='d-flex gap-4'>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img
                      src={images.autodeskautocadlogo_edited}
                      alt=''
                      className=''
                    />
                  </Col>
                  <Col
                    xl={6}
                    lg={7}
                    md={9}
                    sm={10}
                    xs={10}
                    className='border  d-flex justify-content-center align-items-center bg-white technology-logo-box '
                  >
                    <img src={images.flower} alt='' className='' />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pt-4 pb-4 w-100  position-relative our-story'>
        <Row gutter={[12, 15]} className='w-100 justify-content-center h-100'>
          <Col
            span={24}
            className='d-flex flex-column justify-content-center align-items-center text-center gap-2'
          >
            <span
              className='fs-1 custom-color lh-sm custom-font'
              style={{ fontWeight: 700 }}
            >
              Our Story
            </span>
            <div
              className='underline-bar-custom'
              style={{ background: '#184D98' }}
            ></div>
          </Col>
        </Row>
        <Row className='w-100 h-auto mt-5 pt-4 pb-4 story-container'>
          <Col span={24} className='p-0 m-0'>
            <Row gutter={[12, 20]} className='p-0 m-0'>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='order-xl-0 order-lg-0 order-md-2 order-sm-2 order-2 story-heading mt-4'
              >
                <span className='h-100 custom-font heading-paragraph text-muted d-flex align-items-center'>
                  The company was started 7 years ago by providing maintenance
                  services for web design and development services. The
                  company's timely delivery of solutions, and meticulous
                  detailing caught the eye of our current overseas customer.
                </span>
              </Col>
              <Col
                xl={4}
                lg={2}
                md={24}
                sm={24}
                xs={24}
                className=' d-flex justify-content-center position-relative align-items-center order-xl-1 order-lg-1 order-md-0 order-sm-0 order-0 story-time'
              >
                <Divider
                  type='vertical'
                  dashed
                  className='divider-line h-100'
                ></Divider>
                <Button
                  type='text'
                  className='our-story-year-div-right position-absolute h-auto rounded-5 fs-6 fw-medium  custom-roman-font d-flex flex-column'
                >
                  <span className='fw-bold'>2015</span>
                  <span>The Inception Year</span>
                </Button>
              </Col>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='h-100 d-flex justify-content-end order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1 story-img'
              >
                <img src={images?.story2015} alt='' className='h-auto w-auto' />
              </Col>
            </Row>
          </Col>

          <Col span={24} className='p-0 m-0'>
            <Row gutter={[12, 20]} className='m-0 p-0'>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='order-xl-2 order-lg-2 order-md-2 order-sm-2 order-2 story-heading mt-4'
              >
                <span className='h-100 custom-font heading-paragraph text-muted d-flex align-items-center'>
                  Today, we are serving the USA, UK and Sweden based
                  entrepreneurs and reputed enterprises. Our client base ranges
                  from travel to insurance and construction to HR entities.
                </span>
              </Col>
              <Col
                xl={4}
                lg={2}
                md={24}
                sm={24}
                xs={24}
                className=' d-flex justify-content-center position-relative align-items-center order-xl-1 order-lg-1 order-md-0 order-sm-0 order-0 story-time'
              >
                <Divider
                  type='vertical'
                  dashed
                  className=' h-100 divider-line-visible'
                ></Divider>
                <Button
                  type='text'
                  className='our-story-year-div-left position-absolute h-auto rounded-5 fs-6 fw-medium  custom-roman-font d-flex flex-column'
                >
                  <span className='fw-bold'>2020-21</span>
                  <span>More Work</span>
                </Button>
              </Col>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='h-100 d-flex justify-content-start order-xl-0 order-lg-0 order-md-1 order-sm-1 order-1 story-img'
              >
                <img
                  src={images?.story2020_21}
                  alt=''
                  className='h-auto w-auto'
                />
              </Col>
            </Row>
          </Col>

          <Col span={24} className='p-0 m-0'>
            <Row gutter={[12, 20]} className='p-0 m-0'>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='order-xl-0 order-lg-0 order-md-2 order-sm-2 order-2 story-heading '
              >
                <span className='h-100 custom-font heading-paragraph text-muted d-flex flex-column justify-content-center'>
                    Our constant hard work and dedication have earned us the
                    “Rising Star in IT Service Industry” tag/award at the Global
                    Business Summit on Innovations Trends & Predictions at New
                    Delhi 2023 by Business Connect. We also appeared in the top 10 most promising cloud
                    consulting companies in 2024 by Silicon India.
                </span>
              </Col>
              <Col
                xl={4}
                lg={2}
                md={24}
                sm={24}
                xs={24}
                className=' d-flex justify-content-center position-relative align-items-center order-xl-1 order-lg-1 order-md-0 order-sm-0 order-0 story-time'
              >
                <Divider
                  type='vertical'
                  dashed
                  className='divider-line-visible h-100'
                ></Divider>
                <Button
                  type='text'
                  className='our-story-year-div-right position-absolute h-auto rounded-5 fs-6 fw-medium  custom-roman-font d-flex flex-column'
                >
                  <span className='fw-bold'>2021-23</span>
                  <span>Awards & Certificates</span>
                </Button>
              </Col>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='h-100 d-flex justify-content-end order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1 story-img'
              >
                <img
                  src={images?.story2021_23}
                  alt=''
                  className='h-auto w-auto'
                />
              </Col>
            </Row>
          </Col>
          <Col span={24} className='p-0 m-0'>
            <Row gutter={[12, 20]} className='m-0 p-0'>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='order-xl-2 order-lg-2 order-md-2 order-sm-2 order-2 story-heading mt-4'
              >
                <span className='h-100 custom-font heading-paragraph text-muted d-flex align-items-center'>
                  We will continue to advance our expertise in Microsoft
                  Technologies, work to add IOS and mobile apps capabilities,
                  and learn new skills in data analytics and block chain
                  technologies.
                </span>
              </Col>
              <Col
                xl={4}
                lg={2}
                md={24}
                sm={24}
                xs={24}
                className=' d-flex justify-content-center position-relative align-items-start order-xl-1 order-lg-1 order-md-0 order-sm-0 order-0 story-time story-time-last'
              >
                <Divider
                  type='vertical'
                  dashed
                  className=' h-50 divider-line-visible'
                ></Divider>
                <Button
                  type='text'
                  className='our-story-year-div-left position-absolute h-auto rounded-5 fs-6 fw-medium  custom-roman-font d-flex flex-column top-50'
                >
                  <span className='fw-bold'>2023-24</span>
                  <span>Near Future Year</span>
                </Button>
              </Col>
              <Col
                xl={10}
                lg={11}
                md={24}
                sm={24}
                xs={24}
                className='h-100 d-flex justify-content-start order-xl-0 order-lg-0 order-md-1 order-sm-1 order-1 story-img'
              >
                <img
                  src={images?.story2023_24}
                  alt=''
                  className='h-auto w-auto'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className=''>
        <Row className='h-100 '>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className=' p-0 m-0  '>
            <img src={images?.buildingimg} alt='' className='w-100 h-100' />
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className='p-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 pt-4 pb-4 m-0 our-office-bg-image h-auto'
          >
            <Row
              gutter={[12, 15]}
              className='w-100 justify-content-center h-100 content'
            >
              <Col span={24} className='d-flex flex-column  gap-2 heading'>
                <span
                  className='fs-1 custom-color lh-sm custom-font'
                  style={{ fontWeight: 700 }}
                >
                  Our Office
                </span>
                <div
                  className='underline-bar-custom'
                  style={{ background: '#184D98' }}
                ></div>
              </Col>
              <Col span={24} className='d-flex flex-column lh-base'>
                <span className='custom-color fw-bold fs-6'>Address:-</span>
                <span className='fs-6 fw-medium' style={{ color: '#606060' }}>
                  B1/H3, 91Springboard,
                  <br />
                  Mohan Estate Co-Operative Industrial Area,
                  <br />
                  Adjacent to Audi & BMW Car Showroom <br />
                  Mathura Rd, New Delhi-110044
                </span>
              </Col>
              <Col span={24} className='d-flex flex-column lh-lg'>
                <span className='custom-color fw-bold fs-6'>Email Id:-</span>
                <a
                  className=' fw-medium fs-6'
                  href='mailto:contact@daniptechnologies.com'
                  style={{ color: '#606060' }}
                >
                  contact@daniptechnologies.com
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Aboutus;
