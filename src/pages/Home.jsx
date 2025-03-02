import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Button, Card, Col, Collapse, Form, Input, Row } from 'antd';
import CarouselWithResponsiveItems from '../components/CarouselWithResponsiveItems ';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { DownOutlined } from '@ant-design/icons';
import Footer from '../components/Footer';
import { images } from '../controller/images';
import { useNavigate } from 'react-router-dom';
import { routes } from '../controller/routes';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref: elementRef, inView: isElementInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,  
  });
  const navigate = useNavigate();
  const panelStyle = {
    marginBottom: 24,
    border: 'none',
    borderBottom: '1px solid #184D98',
  };
  const items = [
    {
      key: '1',
      label:
        'What factors are to be considered while choosing a software development company?',
      children: (
        <p>
          Before choosing a software development company you need to check their
          portfolio, whether they have worked on similar projects like yourself.
          Look for the factors such as Build time, technologies, software
          scalability, AI integration, after deployment support. etc.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '2',
      label:
        'What are the different services which comes under digital transformation?',
      children: (
        <p>
          There are multiple domains which comes under digital transformation
          services, Including AI Integration, Enterprise software modernisation,
          Business process automation. Cloud services, Custom software
          development services.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '3',
      label:
        'Can we integrate AI in a currently active app, program or software?',
      children: (
        <p>
          Yes, we can. After doing a complete technology analysis and finding
          all the dependencies of the software or program we can integrate AI
          into the current running program. Through agile methodology you have
          flexibility to integrate a no. of functionalities in running or active
          programs.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '4',
      label: 'What is the average cost of software development services?',
      children: (
        <p>
          The cost incurred in development of a software varies based on
          multiple factors. But a standard software cost will be in between
          $20000 - $50000. This is a tentative cost. The actual cost would
          depend on the functionalities, time-frame, technology and various
          other factors.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '5',
      label: 'Can Danip technology speed up the software development process?',
      children: (
        <p>
          Yes, based on the project size we can increase the speed of the
          software development process. Based on the custom needs we may have to
          increase the workforce on the particular project. We can deliver your
          MVP in between 3 weeks - 4 months. Get connected and we will find a
          way to work it out.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '6',
      label:
        'What is standard post deployment policy for softwares at Danip technology?',
      children: (
        <p>
          After the software deployment we provide two month software support.
          Through our internal support team. We also have an in-house AMC
          Support team in case the client wants to proceed further for support
          related services.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '7',
      label: 'How do you control the quality of the software after deployment?',
      children: (
        <p>
          Through our post deployment support we make sure the program is
          working seamlessly. Even if you decide to go with some other vendor,
          don’t forget to clarify the post deployment support terms in your
          agreement.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '8',
      label:
        'What is the AMC(Annual Maintenance Contract) and what is included in AMC?',
      children: (
        <p>
          AMC is the abbreviation for annual maintenance contract. Under this
          contract you may decide all the terms of your software maintenance. It
          will include the cost of the services, support timings, custom
          software status dashboard, renewal pricing, cancellation policy etc...
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '9',
      label:
        'How to upgrade a software in future as new technology becomes available?',
      children: (
        <p>
          {' '}
          You may reach out to us anytime and we will figure out the rest with
          as little information as possible. We are always excited to digitally
          transform our customers' apps and programs. At Danip technologies we
          have a team of IT experts who are highly proficient in their
          respective fields.
        </p>
      ),
      style: panelStyle,
    },
  ];
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 56) {
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
      <div className='w-100' style={{ color: '#363E3E' }}>
        <div className='home-heading-container text-white position-relative'>
          <Navbar scroll={scroll} />
          <Row
            gutter={[0, 15]}
            className='heading-container p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pb-5'
          >
            <Col
              xl={15}
              lg={15}
              md={17}
              sm={17}
              xs={24}
              className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
            >
              <span className={`lh-sm custom-font aboutus-heading ${isElementInView &&"animate__animated animate__fadeInLeft"}`}>
                Digital Transformation Services & Solutions
              </span>
              <span className='custom-font heading-paragraph animate__animated animate__fadeInRight'>
                Don't Just Digitize, Evolve. AI Solutions Tailor-made For Your
                Digital Leap and Get Your Business Future Ready
              </span>
              <Row className="animate__animated animate__fadeInUp">
                <Col xl={10} lg={10} md={12} sm={15} xs={22}>
                  <Button
                    className='w-100 border-2  fs-5 fw-medium get-in-touch-btn text-white h-100 mt-3'
                    // style={{ backgroundColor: '#e9464a' }}
                  >
                    <span
                      className='custom-roman-font'
                      onClick={() => navigate(routes?.home?.contactus)}
                    >
                      Talk to our experts
                    </span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4  h-100'
          style={{ minHeight: 'auto' }}
        >
          <Row gutter={[12, 15]} className='h-100'>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className='d-flex flex-column gap-0 feturing-container '
            >
              {/* <span
                className='d-flex w-100 align-items-center gap-2 custom-roman-font'
                style={{ fontSize: '14px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>
                <span className=''>FEATURING</span>
              </span> */}
              <span
                className='fs-2 fw-bold lh-sm custom-font'
                style={{ color: '#363E3E' }}
              >
                Empowering Businesses Through{' '}
                <span style={{ color: '#184D98' }}>Digital Transformation</span>
              </span>
              <span className='fs-6 custom-roman-font custom-paragraph-color mt-3'>
                At Danip Technologies, we specialize in providing comprehensive
                digital transformation solutions that help businesses thrive in
                the digital age
              </span>
              <div className='d-flex flex-column fs-6 gap-3 custom-roman-font custom-paragraph-color mt-3'>
                <span className='d-flex align-items-center gap-4'>
                  <img
                    src={images.checkIcon}
                    alt=''
                    width={18}
                    height={18}
                    loading='lazy'
                  />
                  Free Consultation & Proposal Draft
                </span>
                <span className='d-flex align-items-center gap-4'>
                  <img
                    src={images.checkIcon}
                    alt=''
                    width={18}
                    height={18}
                    loading='lazy'
                  />
                  Custom Software Solutions
                </span>
                <span className='d-flex align-items-center gap-4'>
                  <img
                    src={images.checkIcon}
                    alt=''
                    width={18}
                    height={18}
                    loading='lazy'
                  />
                  After Deployment Support for Softwares
                </span>
                <span className='d-flex align-items-center gap-4'>
                  <img
                    src={images.checkIcon}
                    alt=''
                    width={18}
                    height={18}
                    loading='lazy'
                  />
                  AMC Services
                </span>
                <span className='d-flex align-items-center gap-4'>
                  <img
                    src={images.checkIcon}
                    alt=''
                    width={18}
                    height={18}
                    loading='lazy'
                  />
                  On Time Project Delivery{' '}
                </span>
              </div>
              <div className='d-flex flex-column gap-3 custom-roman-font mt-5'>
                <span className='fs-6 fw-bold' style={{ color: '#363E3E' }}>
                  RECONISED BY
                </span>
                <Row gutter={[12, 15]} style={{ height: '50px' }}>
                  <Col span={12} className='h-100'>
                    <div
                      className=' h-100 border border-1 d-flex justify-content-center align-items-center p-2 h-100'
                      style={{ borderColor: '#e4e4e4' }}
                    >
                      <img
                        src={images.silliconindoa}
                        className=' h-100 w-100'
                        alt=''
                        loading='lazy'
                      />
                    </div>
                  </Col>
                  <Col span={12} className='h-100'>
                    <div
                      className='h-100 border border-1 d-flex justify-content-center align-items-center p-2 h-100'
                      style={{ borderColor: '#e4e4e4' }}
                    >
                      <img
                        src={images.bussinessconnect}
                        className=' h-100 w-100'
                        alt=''
                        loading='lazy'
                      />
                    </div>
                  </Col>
                </Row>
              </div>
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
                src={images.featureimg}
                alt=''
                width={'100%'}
                height={'100%'}
                loading='lazy'
              />
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto service-container'
          style={{ minHeight: 'auto', backgroundColor: '#F3F8FF' }}
        >
          <Row gutter={[24, 20]}>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className='w-100 h-100 p-4 pt-0 rounded-top-3 d-flex flex-column gap-0'>
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
                  ></div>{' '}
                  SERVICES{' '}
                </span> */}
                <span
                  className='custom-font heading'
                  style={{ fontWeight: 600, color: '#363E3E' }}
                >
                  Fostering{' '}
                  <span style={{ color: '#184D98' }}>
                    Digital Transformation
                  </span>{' '}
                  In Business Applications With
                  <span style={{ color: '#184D98' }}> AI Integration</span>
                </span>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className='w-100 h-100 p-4 bg-white rounded-top-3  d-flex flex-column gap-3 services-container'>
                <img src={images.AIICon} alt='' width={50} loading='lazy' />
                <span
                  className='fw-bold card-heading lh-sm w-50 custom-font'
                  style={{ color: '#363E3E' }}
                >
                  Artificial intelligence
                </span>
                <span className='  card-paragraph custom-roman-font'>
                  Harness the power of AI to automate tasks, gain exceptional
                  insights, and make data-driven decisions.
                </span>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className='w-100 h-100 p-4 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <img src={images.iotIcon} alt='' width={50} loading='lazy' />
                <span
                  className='fw-bold card-heading lh-sm w-50 custom-font'
                  style={{ color: '#363E3E' }}
                >
                  IOT (Internet of things)
                </span>
                <span className='card-paragraph custom-roman-font'>
                  Connect your devices while leveraging the Internet of Things
                  (IoT) to gather valuable data and optimize operations.
                </span>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className='w-100 h-100 p-4 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <img
                  src={images.cloudnativeIcon}
                  alt=''
                  width={50}
                  loading='lazy'
                />
                <span
                  className='fw-bold card-heading lh-sm w-25 custom-font'
                  style={{ color: '#363E3E' }}
                >
                  Cloud Native
                </span>
                <span className='card-paragraph  custom-roman-font'>
                  We Build scalable and resilient web applications with our
                  cloud-native development expertise.
                </span>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className='w-100 h-100 p-4 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <img
                  src={images.webandmobileIcon}
                  alt=''
                  width={50}
                  loading='lazy'
                />
                <span
                  className='fw-bold card-heading lh-sm w-75 custom-font'
                  style={{ color: '#363E3E' }}
                >
                  Web and Mobile app development
                </span>
                <span className='card-paragraph  custom-roman-font'>
                  Get exceptional web & mobile app experiences that engage your
                  users and drive results.
                </span>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className='w-100 h-auto p-4 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <img src={images.enterprise} alt='' width={50} loading='lazy' />
                <span
                  className='fw-bold card-heading lh-sm w-75 custom-font'
                  style={{ color: '#363E3E' }}
                >
                  Enterprise software development
                </span>
                <span className='card-paragraph  custom-roman-font'>
                  Custom enterprise software solutions that streamline your
                  business processes and empower your workforce.
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 h-auto'
          style={{ minHeight: 'auto' }}
        >
          <Row
            gutter={[24, 24]}
            className='h-auto w-100 d-flex justify-content-between'
          >
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className='mt-5 d-flex justify-content-center '
            >
              <img
                src={images.aboutus}
                className='w-100 '
                alt=''
                loading='lazy'
              />
            </Col>
            <Col
              xl={10}
              lg={10}
              md={10}
              sm={24}
              xs={24}
              className='d-flex flex-column'
              // style={{ paddingRight: '50px' }}
            >
              {/* <span
                className='d-flex align-items-center gap-2 custom-roman-font'
                style={{ fontSize: '14px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                ABOUT US{' '}
              </span> */}
              <span
                className=' lh-sm custom-font'
                style={{ fontWeight: 700, fontSize: '38px' }}
              >
                We Love <span style={{ color: '#184D98' }}>What We Do</span>
              </span>
              <span className='fs-6 custom-roman-font custom-paragraph-color mt-3'>
                At Danip Technologies we integrate digital tech in all areas of
                business to make it more adaptive, agile and competitive. It
                helps you in creating new products, services and enable in
                delivering better values to the customer.
              </span>
              <Row gutter={[12, 15]} className='mt-3'>
                <Col span={12}>
                  <div className='w-100 h-100 bg-light rounded-top-3'>
                    <span className=' w-100 d-flex justify-content-end'>
                      {' '}
                      <img
                        src={images.aboutusboxdesign}
                        className='mt-4'
                        width={'30%'}
                        alt=''
                        loading='lazy'
                      />
                    </span>
                    <div className='p-3 mt-3 d-flex flex-column gap-3'>
                      <span className='fs-4 fw-bold custom-font'>
                        Our Vision
                      </span>
                      <span className='fs-6 custom-paragraph-color fw-medium custom-roman-font'>
                        AI Integration in business enterprise applications to
                        bring Digital Transformation
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className='w-100 h-100 bg-light rounded-top-3'>
                    <span className=' w-100 d-flex justify-content-end'>
                      <img
                        src={images.aboutusboxdesign}
                        className='mt-4'
                        width={'30%'}
                        alt=''
                        loading='lazy'
                      />
                    </span>
                    <div className='p-3 mt-3 d-flex flex-column gap-3'>
                      <span className='fs-4 fw-bold custom-font'>
                        Our Mission
                      </span>
                      <span className=' fs-6 custom-paragraph-color fw-medium custom-roman-font'>
                        Propelling your business to success with digital
                        transfromaiton
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Button className='w-100 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5 custom-btn fs-6 fw-medium d-flex justify-content-center align-items-center p-3 custom-roman-font'>
                    Know Us Better
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto '
          style={{ minHeight: 'auto' }}
        >
          {/* <span
            className='d-flex align-items-center gap-2 custom-roman-font'
            style={{ fontSize: '14px' }}
          >
            <div
              style={{
                width: '48px',
                height: '3px',
                backgroundColor: '#184D98',
              }}
            ></div>{' '}
            INDUSTRIES{' '}
          </span> */}
          <span
            className=' lh-sm custom-font'
            style={{ fontWeight: 700, fontSize: '38px' }}
          >
            Industries we have
            <br />
            <span style={{ color: '#184D98' }}>transformed</span>
          </span>
          <div className='mt-5'>
            <Row gutter={[24, 20]}>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className='industries-card'
              >
                <div className='w-100 h-100 p-4 bg-white rounded-3  border d-flex flex-column gap-3'>
                  <img
                    src={images.HealthcareIcon}
                    alt=''
                    width={70}
                    height={60}
                    loading='lazy'
                  />
                  <span className='fw-bolder fs-3 lh-sm custom-font'>
                    Healthcare
                  </span>
                  <span className='fs-6 mb-4 custom-roman-font'>
                    We have leveraged AI for disease protection and personalized
                    medicine in Healthcare sector. We integrate intelligent
                    chatbots in business apps for enhancing patient experience &
                    engagement.
                  </span>
                </div>
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className='industries-card'
              >
                <div className='w-100 h-100 p-4 bg-white rounded-3  border d-flex flex-column gap-3'>
                  <img
                    src={images.educationICon}
                    alt=''
                    width={70}
                    height={60}
                    loading='lazy'
                  />
                  <span className='fw-bolder fs-3 lh-sm custom-font'>
                    Education
                  </span>
                  <span className='fs-6 mb-4 custom-roman-font'>
                    Get AI driven personalized Learning platforms in Educational
                    Sector with smart LMS(learning management system) &
                    automated grading system. We also provide features such as
                    virtual classroom & session recording are also included.
                  </span>
                </div>
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className='industries-card'
              >
                <div className='w-100 h-100 p-4 bg-white rounded-3  border d-flex flex-column gap-3'>
                  <img
                    src={images.mediaIcon}
                    alt=''
                    width={70}
                    height={60}
                    loading='lazy'
                  />
                  <span className='fw-bolder fs-3 lh-sm custom-font'>
                    Media
                  </span>
                  <span className='fs-6 mb-4 custom-roman-font'>
                    Providing high-end functionality web and mobile app with AI
                    integration in News & Media Sector for seamless operations
                    and improved customer experience. We also provide post
                    deployment & AMC Services for smooth transition.
                  </span>
                </div>
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className='industries-card'
              >
                <div className='w-100 h-100 p-4 bg-white rounded-3  border d-flex flex-column gap-3'>
                  <img
                    src={images.saasIcon}
                    alt=''
                    width={70}
                    height={60}
                    loading='lazy'
                  />
                  <span className='fw-bolder fs-3 lh-sm custom-font'>Saas</span>
                  <span className='fs-6 mb-4 custom-roman-font'>
                    We design and deploy scalable and secure saas platforms.
                    Enabling flexible access and reduced infrastructure costs
                    ensuring seamless integration to existing systems.
                  </span>
                </div>
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className='industries-card'
              >
                <div className='w-100 h-100 p-4 bg-white rounded-3  border d-flex flex-column gap-3'>
                  <img
                    src={images.financialServicesIcon}
                    alt=''
                    width={70}
                    height={60}
                    loading='lazy'
                  />
                  <span className='fw-bolder fs-3 lh-sm custom-font'>
                    Financial services
                  </span>
                  <span className='fs-6 mb-4 custom-roman-font'>
                    Make more informed landing decisions by getting more
                    accurate credit assessment using machine learning and AI.
                    Get your custom web app with features such as borrower's
                    financial history, risk profile, and creditworthiness.
                  </span>
                </div>
              </Col>
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className='industries-card'
              >
                <div className='w-100 h-100 p-4 bg-white rounded-3  border d-flex flex-column gap-3'>
                  <img
                    src={images.EcommerceIcon}
                    alt=''
                    width={70}
                    height={60}
                    loading='lazy'
                  />
                  <span className='fw-bolder fs-3 lh-sm custom-font'>
                    Ecommerce
                  </span>
                  <span className='fs-6 mb-4 custom-roman-font'>
                    Get customized e-commerce platform with integrated IOT based
                    logistics tracking and inventory management. We leverage
                    cloud solutions for state of the art order processing and
                    customer experience.
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto'
          style={{ minHeight: 'auto', backgroundColor: '#F3F8FF' }}
        >
          <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column'>
            {/* <span
              className='d-flex align-items-center gap-2 custom-roman-font'
              style={{ fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              WHY US?
            </span> */}
            <Row>
              <Col xl={8} lg={12} md={15} sm={18} xs={22}>
                <span className='fs-1 fw-bolder lh-sm  custom-font'>
                  Why Brands Love
                  <span style={{ color: '#184D98' }}> Danip Technologies</span>
                </span>
              </Col>
            </Row>
          </div>
          <Row gutter={[20, 20]}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <div className='w-100 h-auto p-4 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <span className='fw-bold fs-3 lh-sm custom-font'>
                  Expert In SA Marketing
                </span>
                <span className='fs-6 mb-4 custom-roman-font'>
                  Focused on quality first approach we have experience in
                  working with various industry leaders and tech giants
                </span>
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <div className='w-100 h-auto p-4 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <span className='fw-bold fs-3 lh-sm custom-font'>
                  End to End Solutions
                </span>
                <span className='fs-6 mb-4 custom-roman-font'>
                  Providing end to end solutions. Starting from assessment to
                  software deployment with efficient AMC solutions
                </span>
              </div>
            </Col>
            <Col span={24}>
              <div className='w-100 h-auto p-5 bg-white rounded-top-3 services-container d-flex flex-column gap-3'>
                <Row gutter={[12, 15]}>
                  <Col xl={6} lg={6} md={6} sm={12} xs={24}>
                    <div className='w-100 text-center d-flex flex-column gap-2 justify-content-center align-items-center'>
                      <span
                        className=' fw-bolder custom-color custom-font'
                        style={{ fontSize: '48px' }}
                      >
                        8<sub>+</sub>
                      </span>
                      <span className='fs-6 fw-bold opacity-75 custom-roman-font'>
                        Year Of Experience
                      </span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={24}>
                    <div className='d-flex text-center flex-column gap-2 justify-content-center align-items-center'>
                      <span
                        className=' fw-bolder custom-color custom-font'
                        style={{ fontSize: '48px' }}
                      >
                        130<sub>+</sub>
                      </span>
                      <span className='fs-6 fw-bold opacity-75 custom-roman-font'>
                        Satisfied Customers
                      </span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={24}>
                    <div className='d-flex text-center flex-column gap-2 justify-content-center align-items-center'>
                      <span
                        className=' fw-bolder custom-color custom-font'
                        style={{ fontSize: '48px' }}
                      >
                        700<sub>+</sub>
                      </span>
                      <span className='fs-6 fw-bold opacity-75 custom-roman-font'>
                        Projects Completed
                      </span>
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={24}>
                    <div className='d-flex text-center flex-column gap-2 justify-content-center align-items-center'>
                      <span
                        className=' fw-bolder custom-color custom-font'
                        style={{ fontSize: '48px' }}
                      >
                        65<sub>+</sub>
                      </span>
                      <span className='fs-6 fw-bold opacity-75 custom-roman-font'>
                        Partners{' '}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3  pt-4 pb-4 h-auto d-flex flex-column gap-5 '
          style={{ minHeight: 'auto' }}
        >
          <div className='d-flex flex-column '>
            {/* <span
              className='d-flex align-items-center gap-2 custom-roman-font'
              style={{ fontSize: '14px' }}
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
            <span className='fs-1 fw-bolder lh-sm custom-font'>
              Our Other
              <span style={{ color: '#184D98' }}> Services </span>
            </span>
            <span
              className='fs-6 custom-roman-font text-black'
              style={{ letterSpacing: '0.05em' }}
            >
              Integrating Technologies Into Business Operations{' '}
            </span>
          </div>
          <Row gutter={[20, 20]}>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2'>
                <div>
                  {' '}
                  <img
                    src={images.offshoreicon}
                    className='rounded-2'
                    alt=''
                    width={60}
                    height={60}
                    loading='lazy'
                  />
                </div>
                <span className='fs-4 fw-bolder custom-font'>
                  Offshore Staffing
                </span>
                <p className='fs-6 custom-roman-font'>
                  Bridge the IT gap, hire global talent and build your ideal
                  remote team. Reduce costs, gain expertise, and focus on your
                  business.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2'>
                <div>
                  {' '}
                  <img
                    src={images.techSoluIcon}
                    className='rounded-2'
                    alt=''
                    width={60}
                    height={60}
                    loading='lazy'
                  />
                </div>
                <span className='fs-4 fw-bolder custom-font'>
                  Tech Solutions
                </span>
                <p className='fs-6 custom-roman-font'>
                  Streamline operations. Leverage our tech solutions to
                  custom-built processes for improving efficiency. Focus on
                  innovation.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2'>
                <div>
                  {' '}
                  <img
                    src={images.eletricdataicon}
                    className='rounded-2'
                    alt=''
                    width={60}
                    height={60}
                    loading='lazy'
                  />
                </div>
                <span className='fs-4 fw-bolder custom-font'>
                  Electric Data Integration (EDI)
                </span>
                <p className='fs-6 custom-roman-font'>
                  Seamless data exchange. EDI solutions for flawless
                  communication & automation which will Boost efficiency in
                  operational processes.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2'>
                <div>
                  {' '}
                  <img
                    src={images.consultingicon}
                    className='rounded-2'
                    alt=''
                    width={60}
                    height={60}
                    loading='lazy'
                  />
                </div>
                <span className='fs-4 fw-bolder custom-font'>Consulting</span>
                <p className='fs-6 custom-roman-font'>
                  Providing Expert guidance to our clients. Navigate challenges
                  with our strategic consulting specialists and make informed
                  decisions.
                </p>
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[12, 15]} align={'middle'}>
                <Col xl={8} lg={8} md={8} sm={24}>
                  <span className='fw-bold fs-4 lh-sm custom-font'>
                    Our Great Partners In Propelling Success
                  </span>
                </Col>
                <Col xl={16} lg={16} md={16} sm={24} className='h-100'>
                  {/* <div className='d-flex gap-4 h-100 justify-content-center'>
                  <img src={images.partenerimg1} width={'auto'} height={'auto'} alt='' />
                  <Divider className='divider-custom h-100' type='vertical' />
                  <img src={images.partenerimg2} alt='' width={'auto'} height={'auto'} />
                  <Divider className='divider-custom h-100' type='vertical' />
                  <img src={images.partenerimg3} alt='' width={'auto'} height={'auto'} />
                </div> */}
                  <Row gutter={[12, 15]} className='w-100' justify={'center'}>
                    <Col
                      xl={5}
                      lg={5}
                      md={7}
                      sm={7}
                      xs={8}
                      className='border-end  d-flex justify-content-center'
                    >
                      <img
                        src={images.partenerimg1}
                        alt=''
                        width={60}
                        height={60}
                        loading='lazy'
                      />
                    </Col>
                    <Col
                      xl={5}
                      lg={5}
                      md={7}
                      sm={7}
                      xs={8}
                      className='border-end  d-flex justify-content-center'
                    >
                      {' '}
                      <img
                        src={images.partenerimg2}
                        alt=''
                        width={60}
                        height={60}
                        loading='lazy'
                      />
                    </Col>
                    <Col xl={5} lg={5} md={7} sm={7} xs={8}>
                      <img
                        src={images.partenerimg3}
                        className='w-100'
                        alt=''
                        width={60}
                        height={60}
                        loading='lazy'
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto d-flex flex-column gap-5 '
          style={{ minHeight: 'auto' }}
        >
          <div className='d-flex flex-column text-center '>
            {/* <span
              className='d-flex align-items-center justify-content-center gap-2 custom-roman-font'
              style={{ fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>{' '}
              INSIGHTS{' '}
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
            </span> */}
            <span className='fs-1 fw-bolder lh-sm custom-font'>
              Explore Our
              <span style={{ color: '#184D98' }}> Latest Insights </span>
            </span>
          </div>
          <CarouselWithResponsiveItems />
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto d-flex flex-column gap-5 '
          style={{ minHeight: 'auto' }}
        >
          <div className='d-flex flex-column text-center '>
            {/* <span
              className='d-flex align-items-center justify-content-center gap-2  custom-roman-font'
              style={{ fontSize: '14px' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>{' '}
              TESTIMONIALS{' '}
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
            </span> */}
            <span className='fs-1 fw-bolder lh-sm custom-font'>
              What Our
              <span style={{ color: '#184D98' }}> Clients Says </span>
            </span>
          </div>
          <TestimonialCarousel />
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto'
          style={{ minHeight: 'auto', backgroundColor: '#F3F8FF' }}
        >
          <Row gutter={[12, 15]}>
            <Col xl={12} lg={12} md={12} sm={24} className='p-0 m-0 '>
              <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column text-start'>
                {/* <span
                  className='d-flex align-items-center gap-2  custom-roman-font'
                  style={{ fontSize: '14px' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '3px',
                      backgroundColor: '#184D98',
                    }}
                  ></div>{' '}
                  CONTACT US{' '}
                </span> */}
                <span
                  className='  custom-font lh-sm'
                  style={{ width: '60%', fontSize: '38px', fontWeight: 700 }}
                >
                  Get Free{' '}
                  <span style={{ color: '#184D98' }}> Consultation Now</span>
                </span>
              </div>
              <div className='p-4 pt-0'>
                <Card className='p-4 pb-1  card-customize'>
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
                        className='w-100 get-in-touch-btn text-white fs-5  d-flex justify-content-center align-items-center custom-roman-font'
                        size='large'
                        // style={{ backgroundColor: '#e9464a' }}
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column gap-4 custom-roman-font'>
                <span style={{ color: '#184D98' }} className='fs-5 fw-bold'>
                  ADDRESS
                </span>
                <Row gutter={[20, 24]}>
                  <Col xl={10} lg={10} md={12}>
                    <div className='d-flex flex-column gap-4 custom-roman-font'>
                      <span>
                        <img
                          src={images.uaeicon}
                          alt=''
                          width={50}
                          height={75}
                          loading='lazy'
                        />
                      </span>
                      <div className='d-flex flex-column gap-2 '>
                        <span className='fw-bold'>UAE</span>
                        <span className='fw-normal fs-'>
                          Business Tower - Office No.: 1109 Albarsha1, Business
                          Bay Dubai, UAE
                        </span>
                      </div>
                      <a
                        href='tel:+971-521858963'
                        className='fs-6 custom-color fw-bold'
                        aria-label='+971-521858963'
                        rel='noreferrer'
                      >
                        +971-521858963
                      </a>
                    </div>
                  </Col>
                  <Col xl={8} lg={8} md={10}>
                    <div className='d-flex flex-column gap-4 custom-roman-font'>
                      <span>
                        <img
                          src={images.indiaicon}
                          alt=''
                          width={50}
                          height={75}
                          loading='lazy'
                        />
                      </span>
                      <div className='d-flex flex-column gap-2'>
                        <span className='fw-bold'>INDIA </span>
                        <span className='fw-normal fs-6'>
                          B1/H3, Mohan Industrial Estate, New Delhi-110044,
                          India
                        </span>
                      </div>
                      <a
                        href='tel:+91-9810709239'
                        className='fs-6 custom-color fw-bold '
                        aria-label='Call +91-9810709239'
                        rel='noreferrer'
                      >
                        +91-9810709239
                      </a>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className='d-flex flex-column gap-4 custom-roman-font'>
                      <div className='d-flex flex-column gap-2'>
                        <span className='fw-bold custom-color fs-5'>
                          Email-ID{' '}
                        </span>
                        <a
                          href='mailto:Contact@daniptechnologies.com'
                          className='fw-normal text-black fs-6'
                          rel='noreferrer'
                        >
                          Contact@daniptechnologies.com
                        </a>
                      </div>
                      <div className='d-flex gap-4'>
                        <a
                          href='https://www.facebook.com/DANIP-103200858456074'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src={images.facebook}
                            alt=''
                            width={40}
                            height={40}
                            loading='lazy'
                          />
                        </a>
                        <a
                          href='https://www.instagram.com/daniptechnologies/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src={images.instagram}
                            alt=''
                            width={40}
                            height={40}
                            loading='lazy'
                          />
                        </a>
                        <a
                          href='https://twitter.com/TechDanip?s=20'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src={images.twitter}
                            alt=''
                            width={40}
                            height={40}
                            loading='lazy'
                          />
                        </a>
                        <a
                          href='https://www.linkedin.com/company/danip-technologies/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src={images.linkedin}
                            alt=''
                            width={40}
                            height={40}
                            loading='lazy'
                          />
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4 h-auto d-flex flex-column gap-5 align-items-center '
          style={{ minHeight: 'auto' }}
        >
          <div className='d-flex flex-column text-center '>
            <span className='fs-1 fw-bolder lh-sm'>
              Frequently asked questions
            </span>
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
                items={items}
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

export default Home;
