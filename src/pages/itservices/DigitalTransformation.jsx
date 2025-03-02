import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  Button,
  Card,
  Carousel,
  Col,
  Collapse,
  Divider,
  Form,
  Input,
  Row,
} from 'antd';
import {
  CheckOutlined,
  DownOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { images } from '../../controller/images';
import Footer from '../../components/Footer';
import { routes } from '../../controller/routes';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const DigitalTransformation = () => {
  const [scroll, setScroll] = useState(false);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

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

  const panelStyle = {
    // marginBottom: 24,
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color: '#363e3e',
    boxShadow: '0px 4px 12px 2px #0000000A',
  };
  const servicesItem = (panelStyle) => [
    {
      key: '1',
      label: 'Web and app development',
      children: (
        <p className='fw-medium '>
          Our web and app development services emphasize on client-centric
          approach that helps us achieve tremendous outcomes.
        </p>
      ),
      style: panelStyle,
      className: 'fs-6 fw-bold',
    },
    {
      key: '2',
      label: 'Technology Transformation',
      children: (
        <p className='fw-medium'>
          We provide technology transformation services to businesses that want
          to leverage technology to its full potential.
        </p>
      ),
      style: panelStyle,
      className: 'fs-6 fw-bold',
    },
    {
      key: '3',
      label: 'Custom software development',
      children: (
        <p className='fw-medium'>
          We focus on building a custom solution for your business’s specific
          requirements.
        </p>
      ),
      style: panelStyle,
      className: 'fs-6 fw-bold',
    },
    {
      key: '4',
      label: 'Supply chain and operations automation',
      children: (
        <p className='fw-medium'>
          With our cutting-edge technology, you can streamline your operations
          and optimize your supply chain with our advanced automation solutions.
        </p>
      ),
      style: panelStyle,
      className: 'fs-6 fw-bold',
    },
  ];

  const faqpanelStyle = {
    marginBottom: 24,
    border: 'none',
    borderBottom: '1px solid #184D98',
  };
  const faqitems = [
    {
      key: '1',
      label: 'What to expect from Danip’s digital transformation services?',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            {' '}
            Our{' '}
            <span className='fw-bold'>
              AI and digital transformation services
            </span>{' '}
            include a proper process that entails ideation, validation,
            visualization, and deployment that aims at results-oriented
            solutions.
          </span>
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '2',
      label: 'How much does it cost to get digital transformation services?',
      children: (
        <p className='custom-paragraph-color custom-roman-font fw-normal'>
          Although It completely depend on the functionality which is required.{' '}
          <br />
          When it comes to digital transformation, the scope is comprehensive.
          Therefore, it becomes difficult to comprehend its cost explicitly.
          Hence, the cost of digital transformation may vary according to your
          unique project requirements. In addition, you can also contact our
          experts to understand more about{' '}
          <span className='fw-bold'>
            business transformation consulting services.
          </span>
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '3',
      label:
        'Which industry does Danip Technologies offer digital marketing services?',
      children: (
        <p className='custom-paragraph-color custom-roman-font fw-normal'>
          As your business digital transformational partner, we are not confined
          to any specific industry. We serve our transformational services
          exclusively and cover almost every industry whether it’s{' '}
          <span className='fw-bold'>
            digital transformation in education sector{' '}
          </span>
          or any other.
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '4',
      label:
        'How long will it take to develop a proper strategy for my business?',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          There are several entirely different businesses, so developing and
          implementing digital transformation strategies may take a few weeks
          that suit your business. Apart from that, you can also talk to our
          expert to understand every detail and project.
        </p>
      ),
      style: faqpanelStyle,
    },
  ];
  const handleScrollButtonClick = (direction) => {
    const scrollAmount = 300; 
    const container = scrollContainerRef.current;

    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const carouselRef = useRef(null);
  const handleNextClick = () => {
    carouselRef.current.next();
  };

  return (
   <div>
     <Helmet>
        <title>Digital Transformation Solutions | Top Transformation Services & solutions</title>
        <meta name="description" content={"We empower your business with our digital transformation services. Our expertise helps your business to multiply its success."} />
      </Helmet>
     <div className='w-100' style={{ color: '#363E3E' }}>
      <div className='digital-transformation-heading-container text-white position-relative d-flex justify-content-between flex-column'>
        <Navbar scroll={scroll} />
        <Row
          gutter={[0, 15]}
          className=' lh-sm heading-container p-xl-5 p-lg-5 p-md-4 p-sm-3 p-4 pb-5'
        >
          <Col
            xl={13}
            lg={15}
            md={17}
            sm={16}
            xs={16}
            className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
          >
            <span className='lh-sm custom-font digital-transformation-heading'>
              Digital Transformation Services & Solutions
            </span>
          </Col>
          <Col
            xl={13}
            lg={15}
            md={17}
            sm={19}
            xs={19}
            className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
          >
            <span className='custom-font heading-paragraph'>
              Your Trusted and Experienced Partner for Driving Continuous
              Advancement and Innovation in Information Technology Solutions and
              Services.
            </span>
          </Col>
          <Col xl={13} lg={15} md={17} sm={24} xs={24}>
            <div className=' w-100 d-flex gap-3'>
              <button
                className='get-in-touch-btn heading-btn border-0'
                onClick={() => navigate(routes?.home?.contactus)}
              >
                Get in Touch
              </button>
              {/* <button className='learn-more-btn heading-btn bg-transparent border-0 text-white'>
                Learn more <CaretRightOutlined />
              </button> */}
            </div>
          </Col>
        </Row>
        <div className='w-100 icon-container p-3 align-items-end'>
            <div className='w-100 d-flex justify-content-around gap-3  flex-wrap icon-div'>
              <span className='fs-5 d-flex align-items-center gap-3 text-center fw-bold custom-font partner'>
                {' '}
                <img
                  src={images.myapps}
                  alt=''
                  width={'auto'}
                  height={35}
                />{' '}
                Myapps
              </span>
              <span className='fs-5 d-flex align-items-center gap-3 text-center fw-bold custom-font partner'>
                {' '}
                <img
                  src={images.talentNation}
                  alt=''
                  width={'auto'}
                  height={35}
                />{' '}
                Talent Nations{' '}
              </span>
              <span className='fs-5 d-flex align-items-center gap-3 text-center  fw-bold custom-font partner'>
                {' '}
                <img
                  src={images.expend_my_business}
                  alt=''
                  width={'auto'}
                  height={'auto'}
                />{' '}
                Expand My Business
              </span>
            </div>
          </div>
      </div>
      <div
        className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'
        style={{ backgroundColor: '#F3F8FF' }}
      >
        <Row gutter={[24, 20]}>
          <Col xl={10} lg={11} md={12} sm={24} xs={24}>
            <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column '>
              {/* <span
                className='d-flex align-items-center gap-2 custom-roman-font'
                style={{ color: '#363E3E', fontSize: '14px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                SERVICES{' '}
              </span> */}
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                Services we offer under
                <span style={{ color: '#184D98' }}>
                  {' '}
                  digital transformation
                </span>
              </h2>
              <p className='custom-font mt-2'>
                We offer various IT transformation services to improve our
                clients’ customer experience. You may select from our list of
                services. You can also schedule a free consultation call where
                we will thoroughly explain to you about each service and how
                your they will digitally transform your organization.
              </p>
            </div>
          </Col>
          <Col
            xl={14}
            lg={13}
            md={12}
            sm={24}
            xs={24}
            style={{ maxHeight: '50vh' }}
            className='overflow-y-auto service-accprdian-scrollbar p-4'
          >
            <Collapse
              bordered={false}
              className='bg-transparent d-flex flex-column gap-3 custom-font'
              expandIcon={({ isActive }) =>
                isActive ? <MinusOutlined /> : <PlusOutlined />
              }
              expandIconPosition='end'
              items={servicesItem(panelStyle)}
            />
          </Col>
        </Row>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'>
        <Row gutter={[24, 20]}>
          <Col
            xl={8}
            lg={9}
            md={12}
            sm={24}
            xs={24}
            className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column '
          >
            {/* <span
              className='d-flex align-items-center gap-2 custom-roman-font'
              style={{ color: '#363E3E', fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>{' '}
              PERSENT STATE{' '}
            </span> */}
            <h2
              className=' custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              Where your company stands in
              <span style={{ color: '#184D98' }}>
                {' '}
                digital transformation journey
              </span>
            </h2>
          </Col>
          <Col
            xl={5}
            lg={5}
            md={12}
            sm={24}
            xs={24}
            style={{ maxHeight: '50vh' }}
            className='d-flex flex-column gap-1 pt-4'
          >
            <span className='fw-bolder fs-4 custom-color'>01</span>
            <span className='fs-6 fw-bold custom-font'>Digitize</span>
            <p
              className='fw-medium custom-font'
              style={{ letterSpacing: '0.3px' }}
            >
              Converting information from analog (manual) to digital format
              which helps users for easier manipulation, storage and
              transmission.{' '}
            </p>
          </Col>
          <Col
            xl={5}
            lg={5}
            md={12}
            sm={24}
            xs={24}
            style={{ maxHeight: '50vh' }}
            className='d-flex flex-column gap-1 pt-4'
          >
            <span className='fw-bolder fs-4 custom-color'>02</span>
            <span className='fs-6 fw-bold custom-font'>Digitalization</span>
            <p
              className='fw-medium custom-font'
              style={{ letterSpacing: '0.3px' }}
            >
               Using tools and data in business operations to enhance efficiency
              and effectiveness. Example: Utilizing a marketing platform,
              software or mobile application to maintain communication, with
              both customers and staff members.
            </p>
          </Col>
          <Col
            xl={6}
            lg={6}
            md={12}
            sm={24}
            xs={24}
            style={{ maxHeight: '50vh' }}
            className='d-flex flex-column gap-1 pt-4'
          >
            <span className='fw-bolder fs-4 custom-color'>03</span>
            <span className='fs-6 fw-bold custom-font'>
              Digital Transformation
            </span>
            <p
              className='fw-medium custom-font'
              style={{ letterSpacing: '0.3px' }}
            >
              Using latest technologies at the core to bring transformations in
              every aspect of business, fostering sustainable innovation and
              creative growth.
            </p>
          </Col>
        </Row>
      </div>

      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'>
        <Row gutter={[24, 20]}>
          <Col
            xl={13}
            lg={13}
            md={13}
            sm={24}
            xs={24}
            className='w-100 h-auto p-4 pb-0 rounded-top-3 d-flex flex-column'
          >
            {/* <span
              className='d-flex align-items-center gap-2  custom-roman-font text-uppercase'
              style={{ color: '#363E3E', fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              Challenges
            </span> */}
            <h2
              className=' custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              How
              <span style={{ color: '#184D98' }}> Businesses </span>
              can benefit by Adapting
              <span style={{ color: '#184D98' }}> Digital transformation </span>
              services
            </h2>
          </Col>
          <Col
            span={24}
            className='w-100 h-auto p-4 pt-0 rounded-top-3 d-flex flex-column gap-3'
          >
            <Row>
              <Col span={10}>
                <p className='fw-medium'>
                  Digital transformation services can provide businesses with
                  numerous benefits that drive growth, efficiency, and
                  competitiveness. Here are some key ways businesses can benefit
                  from adopting digital transformation services:
                </p>
              </Col>
              <Col
                span={12}
                className='d-flex justify-content-end align-items-end gap-4'
              >
                <span
                  className=' p-2 d-flex justify-content-center align-items-center'
                  style={{
                    background: '#F0F0F0',
                    borderRadius: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    handleScrollButtonClick('left');
                  }}
                >
                  <LeftOutlined />
                </span>
                <span
                  className=' p-2 d-flex justify-content-center align-items-center'
                  style={{
                    background: '#F0F0F0',
                    borderRadius: '100%',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    handleScrollButtonClick('right');
                  }}
                >
                  <RightOutlined />
                </span>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <div
              className='w-100 overflow-auto challenges-card-container'
              ref={scrollContainerRef}
            >
              <div className='d-flex'>
                <Card className='challenges-card'>
                  <div className='header-container p-3 d-flex flex-column gap-1'>
                    <span
                      className='custom-color fw-medium'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 1{' '}
                    </span>
                    <h5 className='custom-black-color fw-bold'>
                      Efficient operation processes
                    </h5>
                  </div>
                  <p
                    className='p-3 custom-paragraph-color fw-medium'
                    style={{ fontSize: '14px' }}
                  >
                    Automation through digital solutions can streamline the
                    operational processes, thus improving speed, productivity,
                    accuracy and competitiveness.
                  </p>
                </Card>
                <Card className='challenges-card'>
                  <div className='header-container p-3 d-flex flex-column gap-1'>
                    <span
                      className='custom-color fw-medium'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 2{' '}
                    </span>
                    <h5 className='custom-black-color fw-bold'>
                      Improved customer experience
                    </h5>
                  </div>
                  <p
                    className='p-3 custom-paragraph-color fw-medium'
                    style={{ fontSize: '14px' }}
                  >
                    With Digital Transformation businesses can leverage more
                    advance analytical tools which helps in understanding
                    customer experience, expectations and tailored solutions
                    required.
                  </p>
                </Card>
                <Card className='challenges-card'>
                  <div className='header-container p-3 d-flex flex-column gap-1'>
                    <span
                      className='custom-color fw-medium'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 3{' '}
                    </span>
                    <h5 className='custom-black-color fw-bold'>
                      Cyber-security risks
                    </h5>
                  </div>
                  <p
                    className='p-3 custom-paragraph-color fw-medium'
                    style={{ fontSize: '14px' }}
                  >
                    It is highly important to adapt modern digital security
                    measures in order to protect your data and systems which
                    prevents cyber-attacks, data breaches, financial losses and
                    damaged reputation.
                  </p>
                </Card>
                <Card className='challenges-card'>
                  <div className='header-container p-3 d-flex flex-column gap-1'>
                    <span
                      className='custom-color fw-medium'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 4{' '}
                    </span>
                    <h5 className='custom-black-color fw-bold'>
                      Cost Reduction
                    </h5>
                  </div>
                  <p
                    className='p-3 custom-paragraph-color fw-medium'
                    style={{ fontSize: '14px' }}
                  >
                    digital transformation is not only lucrative but also
                    cost-effective. Unlike traditional systems, it requires low
                    maintenance by providing cloud-based solutions.
                    Additionally, it optimizes resource use and reduces
                    operational costs through efficient digital processes.
                  </p>
                </Card>
              </div>
            </div>
          </Col>
          <Col span={24} className='text-center mt-2'>
            <span className='fw-bold custom-font' style={{ fontSize: '24px' }}>
              Lets Fix These Problems Together!{' '}
            </span>
            <span className='w-100 d-flex justify-content-center mt-3'>
              {' '}
              <Button className='rounded-5 get-in-touch-btn d-flex justify-content-center align-items-center fw-medium custom-font p-5 pt-2 pb-2 fs-6 fw-bold'>
                Contact Us
              </Button>
            </span>
          </Col>
        </Row>
      </div>
      <div>
        <Row className='position-relative d-flex justify-content-center align-items-center'>
          <Divider />
          <div className=' fs-6 position-absolute custom-black-color fw-medium   d-flex justify-content-center align-items-center rounded-5 p-3 pt-2 pb-2  bg-white custom-font'>
            TECHNOLOGY STACK
          </div>
        </Row>
        <div className='w-100  p-3 overflow-hidden'>
          <div className='d-flex gap-5 align-items-center technology-stack-container  w-100'>
            <img src={images.reactLogo} width={'39px'} height={'41px'} alt='' />
            <img
              src={images.anguralLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.swiftuiLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.flutterLogo}
              width={'100px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.swiftlintLogo}
              width={'95px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.rxSwiftLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.kotlinLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img src={images.javaLogo} width={'50px'} height={'41px'} alt='' />
            <img
              src={images.gradleLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.jetpackLogo}
              width={'100px'}
              height={'41px'}
              alt=''
            />
            <img src={images.swiftLogo} width={'95px'} height={'41px'} alt='' />
            <img src={images.obj_cLogo} width={'39px'} height={'41px'} alt='' />
            <img src={images.reduxLogo} width={'39px'} height={'41px'} alt='' />
            <img
              src={images.netcoreLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.microsoft_netLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.xamarinLogo}
              width={'100px'}
              height={'41px'}
              alt=''
            />
            <img
              src={images.asp_netLogo}
              width={'39px'}
              height={'41px'}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'>
        <Row
          className='p-xl-4 p-lg-4 p-md-4 p-sm-3 p-2 h-auto rounded-3'
          style={{ backgroundColor: '#F3F8FF' }}
        >
          <Col xl={15} lg={15} md={24} sm={24} xs={24}>
            <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column '>
              {/* <span
                className='d-flex align-items-center gap-2 custom-roman-font'
                style={{ color: '#363E3E', fontSize: '14px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                BENEFITS{' '}
              </span> */}
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                <span style={{ color: '#184D98' }}>Our Expertise </span>
                Speaks For Itself
              </h2>
              <p className='custom-font fs-6'>
                Having years of experience, prepared us for handling any
                unforeseen circumstances in your transformation journey. Here
                are the key reasons to consider Danip for your{' '}
                <span className='fw-semibold'>
                  digital transformation solutions:
                </span>
              </p>
              <Row gutter={[12, 15]}>
                <Col span={12} className='d-flex flex-column gap-2'>
                  <div
                    className='w-50'
                    style={{
                      height: '2px',
                      backgroundColor: '#184D98',
                    }}
                  ></div>
                  <span className='custom-black-color fs-5 fw-bold custom-font'>
                    8+ Years
                  </span>
                  <p className='custom-font custom-black-color fw-medium '>
                    years of experience
                  </p>
                </Col>
                <Col span={12} className='d-flex flex-column gap-2'>
                  <div
                    className='w-50'
                    style={{
                      height: '2px',
                      backgroundColor: '#184D98',
                    }}
                  ></div>
                  <span className='custom-black-color fs-5 fw-bold custom-font'>
                    1000+
                  </span>
                  <p className='custom-font custom-black-color fw-medium '>
                    Successfully delivered projects
                  </p>
                </Col>
                <Col span={12} className='d-flex flex-column gap-2'>
                  <div
                    className='w-50'
                    style={{
                      height: '2px',
                      backgroundColor: '#184D98',
                    }}
                  ></div>
                  <span className='custom-black-color fs-5 fw-bold custom-font'>
                    100%
                  </span>
                  <p className='custom-font custom-black-color fw-medium '>
                    On-Time Delivery
                  </p>
                </Col>
                <Col span={12} className='d-flex flex-column gap-2'>
                  <div
                    className='w-50'
                    style={{
                      height: '2px',
                      backgroundColor: '#184D98',
                    }}
                  ></div>
                  <span className='custom-black-color fs-5 fw-bold custom-font'>
                    98%
                  </span>
                  <p className='custom-font custom-black-color fw-medium '>
                    Satisfied Clients
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            xl={9}
            lg={9}
            md={9}
            sm={24}
            xs={24}
            className=' justify-content-end d-xl-flex d-lg-flex d-md-none d-sm-none d-none '
          >
            <img src={images.wow_image} width={'auto'} height={'auto'} alt='' />
          </Col>
        </Row>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 h-auto'>
        <Row gutter={[12, 15]}>
          <Col
            xl={10}
            lg={12}
            md={15}
            sm={24}
            xs={24}
            className='w-100 h-auto  pb-0 rounded-top-3 d-flex flex-column'
          >
            {/* <span
              className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
              style={{ color: '#363E3E', fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              BENEFITS
            </span> */}
            <h2
              className='custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              Our Process of working
            </h2>
            <p className='fw-medium custom-font'>
              our process of working aids us in exceeding your expectations and
              providing the desired results:
            </p>
          </Col>
          <Col
            span={24}
            className='d-xl-block d-lg-block d-md-none d-sm-none d-none mt-3'
          >
            <div className='d-flex align-items-end  justify-content-center'>
              <div
                style={{
                  width: '82%',
                  height: '2px',
                  backgroundColor: '#184D98',
                }}
                className='d-flex justify-content-between align-items-center'
              >
                <div
                  className='d-flex justify-content-center align-items-center  bg-white fw-bold'
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    // backgroundColor: '#184D98',
                    color: '#363E3E',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#184D98',
                  }}
                >
                  1
                </div>
                <div
                  className='d-flex justify-content-center align-items-center  bg-white fw-bold'
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    // backgroundColor: '#184D98',
                    color: '#363E3E',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#184D98',
                  }}
                >
                  2
                </div>
                <div
                  className='d-flex justify-content-center align-items-center  bg-white fw-bold'
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    // backgroundColor: '#184D98',
                    color: '#363E3E',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#184D98',
                  }}
                >
                  3
                </div>
                <div
                  className='d-flex justify-content-center align-items-center  bg-white fw-bold'
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    // backgroundColor: '#184D98',
                    color: '#363E3E',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#184D98',
                  }}
                >
                  4
                </div>
                <div
                  className='d-flex justify-content-center align-items-center  bg-white fw-bold '
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    // backgroundColor: '#184D98',
                    color: '#363E3E',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#184D98',
                  }}
                >
                  5
                </div>
              </div>
            </div>
          </Col>
          <Col span={24} className='mt-5'>
            <Row gutter={[15, 15]} justify={'center'}>
              <Col
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className='custom-black-color custom-font d-flex flex-column align-items-center text-center gap-1'
              >
                <div
                  style={{ backgroundColor: '#F3F8FF' }}
                  className='p-2 rounded-2'
                >
                  <img
                    src={images.digitalvision}
                    alt=''
                    width={40}
                    height={40}
                  />
                </div>
                <h5 className='custom-black-color fw-bold'>
                  Define your digital vision
                </h5>
                <p>
                  Our foremost step is understanding your unique business
                  requirements. we thoroughly understand your business and its
                  specific needs to provide you with the most suitable solution.
                </p>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className='custom-black-color custom-font d-flex flex-column align-items-center text-center gap-1'
              >
                <div
                  style={{ backgroundColor: '#F3F8FF' }}
                  className='p-2 rounded-2'
                >
                  <img src={images.scope} alt='' width={40} height={40} />
                </div>
                <h5 className='custom-black-color fw-bold'>Scope</h5>
                <p>
                  Next, we examine the scope of digital transformation for your
                  business and make strategies accordingly.
                </p>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className='custom-black-color custom-font d-flex flex-column align-items-center text-center gap-1'
              >
                <div
                  style={{ backgroundColor: '#F3F8FF' }}
                  className='p-2 rounded-2'
                >
                  <img
                    src={images.identifytransform}
                    alt=''
                    width={40}
                    height={40}
                  />
                </div>
                <h5 className='custom-black-color fw-bold'>
                  Identify Transformation Goals
                </h5>
                <p>
                  We focus on identifying all your transformational goals and
                  ensuring success while providing effective tech solutions.
                </p>
              </Col>
              <Col
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={12}
                className='custom-black-color custom-font d-flex flex-column align-items-center text-center gap-1'
              >
                <div
                  style={{ backgroundColor: '#F3F8FF' }}
                  className='p-2 rounded-2'
                >
                  <img
                    src={images.digitalRoadmap}
                    alt=''
                    width={40}
                    height={40}
                  />
                </div>
                <h5 className='custom-black-color fw-bold'>
                  Pave Your Digital Roadmap
                </h5>
                <p>
                  After assessing your transformation goals and potential, we
                  create a practical plan of implementation.  
                </p>
              </Col>
              <Col
                xl={4}
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className='custom-black-color custom-font d-flex flex-column align-items-center text-center gap-1'
              >
                <div
                  style={{ backgroundColor: '#F3F8FF' }}
                  className='p-2 rounded-2'
                >
                  <img
                    src={images.implementation}
                    alt=''
                    width={40}
                    height={40}
                  />
                </div>
                <h5 className='custom-black-color fw-bold'>Implementation</h5>
                <p>
                  We adopt solution-centered strategies to lead your business
                  transformation journey to the right path.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className='w-100 h-auto'>
        <Row gutter={[12, 15]} className=' w-100 p-0 m-0'>
          <Col
            xl={10}
            lg={10}
            md={24}
            sm={24}
            xs={24}
            className='w-100 h-auto  p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 rounded-top-3 d-flex flex-column'
          >
            {/* <span
              className='d-flex align-items-center gap-2 custom-roman-font'
              style={{ color: '#363E3E', fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              Industries
            </span> */}
            <h2
              className='custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              Powering Progress in Every Industry with Our digital
              transformation services
            </h2>
            <p className='fw-medium  fs-6 custom-font'>
              We at Danip Technologies strive to create{' '}
              <span className='fw-semibold'>
                digital transformation services
              </span>{' '}
              that match your specific needs and requirements. It allows us to
              benefit your business with tailored strategies that result in
              tremendous outcomes.
            </p>
            <p className='fw-medium  fs-6 custom-font'>
              As experienced IT professionals or{' '}
              <span className='fw-semibold'>
                IT transformation services providers
              </span>
              , we know that every business has its own different goals, needs,
              hurdles, rules, and regulations to deal with. Here comes the role
              of our thoroughly examining strategy that aids us in creating the
              most suitable solution for your unique business and its problems.{' '}
            </p>
          </Col>
          <Col
            xl={14}
            lg={14}
            md={24}
            sm={24}
            xs={24}
            className='w-100 h-auto p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 rounded-top-3 d-flex flex-column gap-1 digital-industries-carousal-container'
          >
            <div
              className='w-100  h-auto box p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 position-relative'
              style={{ backgroundColor: '#F3F8FF' }}
            >
              <Carousel
                ref={carouselRef}
                className='digital-industries-carousel'
              >
                <div className=' w-100 gap-1'>
                  <Row gutter={[15, 15]}>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      {/* <img
                        src={images.healthIcon}
                        alt=''
                        width={50}
                        height={50}
                      /> */}
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.healthIcon}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Healthcare</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Our digital transformation solutions have streamlined
                        the workflows with improved patient care efficiency in
                        healthcare.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.realEstate}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Real Estate</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Our robust strategies and top-notch digital
                        transformation services have been lucrative for the real
                        estate industry. Our solutions helped attract potential
                        buyers and enhance client interactions through seamless
                        digital platforms.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.insurance}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Insurance</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Optimise claims processing, risk assessment, and
                        customer service with our cutting-edge digital
                        solutions. We provide automated workflows, AI-driven
                        underwriting, and personalized customer experiences to
                        improve your insurance services.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.education}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Education</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Our{' '}
                        <span className='fw-semibold'>
                          IT transformation services
                        </span>{' '}
                        and digital tools support educators in delivering
                        engaging lessons, tracking student progress, and
                        fostering collaborative learning environments.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row gutter={[15, 15]}>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.e_commerce}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>E-commerce</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Our transformation services have made your shopping
                        experience hassle free. In addition, our solutions help
                        you increase sales, improve customer loyalty, and
                        simplify your online store. Hence, we’ve revolutionized
                        r-commerce operations with personalized shopping
                        experiences.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.food_and_bevrages}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Food and Beverage</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        We have Improved inventory management and enhanced
                        customer engagement with our{' '}
                        <span className='fw-semibold'>
                          digital transformation services.
                        </span>{' '}
                        From online ordering systems to data analytics, we help
                        food and beverage businesses optimize their processes
                        and deliver exceptional service.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img src={images.media} alt='' width={35} height={35} />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Media</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        We provide tools for real-time analytics, audience
                        engagement, and multi-platform distribution,ensuring
                        your content reaches the right audience at the right
                        time.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.retail}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Retail</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Our digital transformation services help you create
                        seamless shopping experiences, both online and in-store,
                        driving customer satisfaction and loyalty.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row gutter={[15, 15]}>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <div
                        style={{
                          backgroundColor: '#E3EAF6',
                          width: '70px',
                          height: '70px',
                        }}
                        className='p-2  rounded-circle d-flex justify-content-center align-items-center'
                      >
                        <img
                          src={images.fitness_and_wellness}
                          alt=''
                          width={35}
                          height={35}
                        />
                      </div>
                      <h6 className=' fw-bold p-0 m-0 '>Fitness & Wellness</h6>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        We support your efforts to engage clients with our
                        digital solutions. In addition our services also promote
                        a healthy lifestyle through innovative digital
                        platforms.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Carousel>
              <img
                src={images.rightarrowcauosel}
                alt=''
                width={40}
                className='position-absolute'
                style={{ cursor: 'pointer', top: '50%', right: '4%' }}
                onClick={handleNextClick}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div
        className='w-100 h-auto p-xl-5 p-lg-4 p-md-3 p-sm-2 p-2'
        style={{ backgroundColor: '#F3F8FF' }}
      >
        <Row gutter={[12, 15]}>
          <Col xl={14} lg={14} md={12} sm={24} xs={24} className=''>
            <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column'>
              {/* <span
                className='d-flex align-items-center gap-2 custom-roman-font'
                style={{ color: '#363E3E', fontSize: '14px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                BENEFITS{' '}
              </span> */}
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                Get
                <span style={{ color: '#184D98' }}> Free Consultation </span>
                Now
              </h2>
              <p className='fw-medium  fs-6 custom-font'>
                We've collaborated with world-renowned brands and visionary
                ideas spanning diverse industries.
              </p>
              <Row gutter={[10, 15]} className='mt-3 custom-roman-font'>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free consultation
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Seamless integration
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    No-cost proposal draft
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Enhanced data security
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Tailored Solutions
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    On-time project delivery
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Scalability and flexibility
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free backend Dashboard training
                  </h6>
                </Col>

                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Support after project delivery
                  </h6>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free AMC (annual maintenance contract) services
                  </h6>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            xl={10}
            lg={10}
            md={12}
            sm={24}
            xs={24}
            className=' d-flex justify-content-center align-items-center'
          >
            {/* p-4 pb-3 pt-3  rounded-5 bg-opacity-75 bg-white card-customize */}
            <Card className='p-4 rounded-5 card-customize w-100 '>
              <Form>
                <Form.Item name='name'>
                  <Input
                    placeholder='Your Name'
                    className='border-0 border-bottom border-black rounded-0'
                  />
                </Form.Item>
                <Form.Item name='Email'>
                  <Input
                    placeholder='Email'
                    className='border-0 border-bottom border-black rounded-0'
                  />
                </Form.Item>
                <Form.Item name='phone'>
                  <Input
                    placeholder='Phone'
                    className='border-0 border-bottom border-black rounded-0'
                  />
                </Form.Item>
                <Form.Item name='name'>
                  <Input
                    placeholder="What's your Query?"
                    className='border-0 border-bottom border-black rounded-0'
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    className='w-100 text-white fs-5  d-flex justify-content-center align-items-center custom-roman-font get-in-touch-btn'
                    size='large'
                    // style={{ backgroundColor: '#e9464a' }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
      <div className='w-100 h-auto p-xl-5 p-lg-4 p-md-3 p-sm-2 p-2 d-flex flex-column gap-5  '>
        <div className='d-flex flex-column  gap-1 text-center'>
          <h2
            className=' custom-font'
            style={{ fontWeight: 700, color: '#363E3E' }}
          >
            Frequently Asked Questions
          </h2>
          <p className='fw-medium  fs-6 custom-font'>
            Quisque venenatis vestibulum consequat. Vivamus ac urna nulla. Duis
            sit amet consectetur nisi,
          </p>
        </div>
        <Row className='w-100 d-flex justify-content-center'>
          <Col xl={17} lg={17} md={20} sm={23} xs={23}>
            <Collapse
              className='frequently-question-collapse'
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
              accordion
              items={faqitems}
              ghost
              expandIconPosition='end'
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
   </div>
  );
};

export default DigitalTransformation;
