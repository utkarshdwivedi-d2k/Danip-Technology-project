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
  CaretRightOutlined,
  CheckOutlined,
  DownOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { images } from '../../controller/images';
import Footer from '../../components/Footer';
import { Helmet } from "react-helmet";

const Ai = () => {
  const [scroll, setScroll] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY, 'Dlddlmdldmldm');
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
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0px 4px 12px 2px #0000000A',
  };
  const servicesItem = (panelStyle) => [
    {
      key: '1',
      label: 'Inventory Management',
      children: <p>sf</p>,
      style: panelStyle,
      className: 'fs-6 fw-medium',
    },
    {
      key: '2',
      label: 'Leagicy Managment',
      children: <p>sf</p>,
      style: panelStyle,
      className: 'fs-6 fw-medium',
    },
    {
      key: '3',
      label: 'Leagicy Managment',
      children: <p>sf</p>,
      style: panelStyle,
      className: 'fs-6 fw-medium',
    },
    {
      key: '4',
      label: 'Hotel Managment ',
      children: <p>sf</p>,
      style: panelStyle,
      className: 'fs-6 fw-medium',
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
      label: 'How to get a mobile app build in Dubai.',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            {' '}
            You can start by reaching out to a company such as Danip Technology
            with your requirements overview. You would just have to{' '}
            <span className='fw-bold'>
              give a brief of your requirements
            </span>{' '}
            and we would do the rest.
          </span>
          <span>
            {' '}
            Based on the latest industry trends we will provide you with a
            detailed proposal.
          </span>
          <span>
            The proposal would include the{' '}
            <span className='fw-bold'>
              build technology, functionalities, build time-frame, Build stage
              breakdown.
            </span>{' '}
            Etc.. To be clear this complete process{' '}
            <span className='fw-bold'>does not cost anything.</span> You may
            take or leave at any given point of time.
          </span>
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '2',
      label: 'How much time does it take to build a mobile app.',
      children: (
        <p className='custom-paragraph-color custom-roman-font fw-normal'>
          Although It completely depend on the functionality which is required.{' '}
          <br />
          It depends on the level of features required from Basic to advance,
          and the customization needed to get the desired results. On an average
          a mobile app building process can take somewhere between{' '}
          <span className='fw-bold'>1.5 months to 3 months</span> of time
          depends on how complex are the requirements.
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '3',
      label: 'How much does it cost to develop a mobile app in Dubai, UAE',
      children: (
        <p className='custom-paragraph-color custom-roman-font fw-normal'>
          The cost of complete mobile app development process would take around{' '}
          <span className='fw-bold'>AED 80,000 to AED 150,000.</span>
          <br />
          There are many more factors which are needed to be considered before
          taking the cost mentioned final. It also depends on the required
          functionalities, how complex is the project, integration it requires
          in order to get the desired results, etc..
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '4',
      label:
        'What are the most popular coding languages used in mobile app development process.',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            <span className='fw-bold'>Swift, C++, Java, HTML5, PHP , </span>
            these are the most popular coding languages being used in mobile app
            development process.
          </span>
          <span> Swift is highly preferred for iOS mobile apps.</span>
          <span>
            C++ is used to generate complex yet easy to use mobile apps.
          </span>
          <span>
            Java is recognized as an extremely versatile language, It can be run
            with minimal dependencies. It let programmers write code once and
            run everywhere.
          </span>
          <span>
            HTML5 is the latest version of HTML. It is highly useful for cross
            platform mobile app development.
          </span>
          <span>
            PHP is used for large scale app projects this great for apps which
            requires complex backend and exhaustive data migration. You can
            always schedule a consultation with our experts to get more info.
          </span>
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '5',
      label: 'What technologies are used in mobile app development process',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            Top technologies required to build mobile apps are as follows.
          </span>
          <span>
            Apache Cordova: (Formerly PhoneGap) is a mobile application building
            framework used for hybrid mobile apps using various languages such
            as HTML, CSS and Javascript.
          </span>
          <span>
            Appcelator: It is a leading cross-platform app development
            framework. It is best for extensive development environment,
            scalable cloud service, API builder and API runtime.
          </span>
          <span>
            RhoMobile Suite: (formerly Rhodes framework) It is an open-source
            framework which is good for cross-platform, Data centric,
            Business-grade & consumer-grade mobile apps.
          </span>
          <span>
            HTML5 is the latest version of HTML. It is highly useful for cross
            platform mobile app development.
          </span>
          <span>
            WidgetPad: This is also an open-source framework which is great for
            cross-platforms mobile apps. This framework provides developers a
            number of features like source code editing, versioning ,debugging,
            and distribution to powerful apps. It reduces the complexity in
            creating the mobile apps. It has many easy to customize features
            such as maps, social media feeds, forms etc…
          </span>
          <span>
            Solar2D: (Formerly corona SDK) It is an open-source cross platform
            SDK. This is used for building two-dimensional apps for kindle,
            android, ios, Apple TV, Android TV. It also offers plugins for all
            the business needs such as app-advertising, Analytics, media and
            more.{' '}
          </span>
        </p>
      ),
      style: faqpanelStyle,
    },
    {
      key: '6',
      label: 'Do you provide Mobile AMC services',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            We not just provide advance mobile app development services but also
            after deployment services.
          </span>
          <span>
            We have a great team handling various projects around the globe. As
            per the agreement after the deployment, we provide maintenance,
            updating and upgrading support and keep the apps up and running.
          </span>
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
      <div className='ai-heading-container text-white position-relative  d-flex justify-content-between flex-column'>
        <Navbar scroll={scroll} />
        <Row
          gutter={[0, 15]}
          className='  heading-container p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pb-5'
        >
          <Col
            xl={13}
            lg={15}
            md={17}
            sm={16}
            xs={16}
            className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
          >
            <span className='lh-sm custom-font ai-heading'>
              Innovating IT, Empowering The Technology
            </span>
            <span className='custom-font heading-paragraph'>
              Your Trusted and Experienced Partner for Driving Continuous
              Advancement and Innovation in Information Technology Solutions and
              Services.
            </span>
          </Col>
          <Col xl={13} lg={15} md={17} sm={24} xs={24}>
            <div className=' w-100 d-flex gap-3'>
              <button className='get-in-touch-btn heading-btn border-0'>
                Get in Touch
              </button>
              <button className='learn-more-btn heading-btn bg-transparent border-0 text-white'>
                Learn more <CaretRightOutlined />
              </button>
            </div>
          </Col>
        </Row>
        <div className='w-100 icon-container p-3 align-items-end'>
          <div className='w-100 d-flex justify-content-around flex-wrap gap-3 icon-div'>
            <span className='fs-5 d-flex align-items-center gap-3  fw-bold custom-font'>
              {' '}
              <img src={images.myapps} alt='' width={'auto'} height={35} />{' '}
              Myapps
            </span>
            <span className='fs-5 d-flex align-items-center gap-3 fw-bold custom-font'>
              {' '}
              <img
                src={images.talentNation}
                alt=''
                width={'auto'}
                height={35}
              />{' '}
              Talent Nations{' '}
            </span>
            <span className='fs-5 d-flex align-items-center gap-3   fw-bold custom-font'>
              {' '}
              <img
                src={images.expend_my_business}
                alt=''
                width={'auto'}
                height={35}
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
            <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column gap-1'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
                style={{ color: '#363E3E' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                SERVICES{' '}
              </span>
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                Services we offer under
                <span style={{ color: '#184D98' }}>
                  {' '}
                  Artificial Intelligence
                </span>
              </h2>
              <p className='custom-font'>
                Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                Duis sit amet consectetur nisi, eget elementum nunc. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
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
            className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column gap-1'
          >
            <span
              className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
              style={{ color: '#363E3E' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>{' '}
              WHY CHOOSE US ?
            </span>
            <h2
              className=' custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              Why You Should Choose
              <span style={{ color: '#184D98' }}> Danip Technologies </span>
              as
              <span style={{ color: '#184D98' }}> Your AI Partner</span>
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
            <p className='fw-medium custom-font'>
              Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
              Duis sit amet consect
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
            <p className='fw-medium custom-font'>
               Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
              Duis sit amet consect
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
            <span className='fs-6 fw-bold custom-font'>Digitalization</span>
            <p className='fw-medium custom-font'>
              Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
              Duis sit amet consect
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
            className='w-100 h-auto p-4 pb-0 rounded-top-3 d-flex flex-column gap-1'
          >
            <span
              className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
              style={{ color: '#363E3E' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              Challenges
            </span>
            <h2
              className=' custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              How can
              <span style={{ color: '#184D98' }}> AI Integration </span>
              improve efficiency of existing businesses?
            </h2>
          </Col>
          <Col
            span={24}
            className='w-100 h-auto p-4 pt-0 rounded-top-3 d-flex flex-column gap-3'
          >
            <Row>
              <Col span={10}>
                <p className='fw-medium'>
                  Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                  Duis sit amet consectetur nisi, eget elementum nunc. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
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
                      className='fw-medium custom-color'
                      style={{ fontSize: '14px' }}
                    >
                      Efficiency Increased by 50%
                    </span>
                    <span className='fw-bold fs-5 custom-black-color'>
                      Supply chain Management
                    </span>
                  </div>
                  <p
                    className='p-3 fw-medium custom-paragraph-color'
                    style={{ fontSize: '14px' }}
                  >
                    Manual processes are often slow and prone to errors. Digital
                    transformation can streamline operations through automation,
                    reducing costs and increasing efficiency.
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
                    <span className='fw-bold fs-5 custom-black-color'>
                      Poor Customer Experience
                    </span>
                  </div>
                  <p
                    className='fw-medium p-3 custom-paragraph-color'
                    style={{ fontSize: '14px' }}
                  >
                    In today’s market, customers expect personalized, seamless
                    interactions across all touchpoints. Digital platforms and
                    analytics can provide the insights needed to tailor
                    experiences and engage customers more effectively.
                  </p>
                </Card>
                <Card className='challenges-card'>
                  <div className='header-container p-3 d-flex flex-column gap-1'>
                    <span
                      className='fw-medium custom-color'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 3{' '}
                    </span>
                    <span className='fw-bold fs-5 custom-black-color'>
                      Data Silos
                    </span>
                  </div>
                  <p
                    className='fw-medium p-3 custom-paragraph-color'
                    style={{ fontSize: '14px' }}
                  >
                    Many companies struggle with fragmented data that is
                    difficult to access and analyze. Digital transformation
                    integrates data across systems, making it easier to gain
                    insights and make informed decisions.
                  </p>
                </Card>
                <Card className='challenges-card'>
                  <div className='header-container p-3 d-flex flex-column gap-1'>
                    <span
                      className='fw-medium custom-color'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 4{' '}
                    </span>
                    <span className='fw-bold fs-5 custom-black-color'>
                      Efficient operation processes
                    </span>
                  </div>
                  <p
                    className='fw-medium p-3 custom-paragraph-color'
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
                      className='fw-medium custom-color'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 5{' '}
                    </span>
                    <span className='fw-bold fs-5 custom-black-color'>
                      Efficient operation processes
                    </span>
                  </div>
                  <p
                    className='fw-medium p-3 custom-paragraph-color'
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
                      className='fw-medium custom-color'
                      style={{ fontSize: '14px' }}
                    >
                      CHALLENGE 6{' '}
                    </span>
                    <span className='fw-bold fs-5 custom-black-color'>
                      Efficient operation processes
                    </span>
                  </div>
                  <p
                    className='fw-medium p-3 custom-paragraph-color'
                    style={{ fontSize: '14px' }}
                  >
                    Automation through digital solutions can streamline the
                    operational processes, thus improving speed, productivity,
                    accuracy and competitiveness.
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
          <div className=' position-absolute d-flex justify-content-center align-items-center rounded-5 p-3 pt-2 pb-2 bg-white custom-black-color custom-font fs-6 fw-medium'>
            TECHNOLOGY STACK
          </div>
        </Row>
        <div className='w-100  p-3 overflow-hidden'>
          <div className=' d-flex gap-5 align-items-center technology-stack-container w-100'>
            <img src={images.reactLogo} style={{ height: '41px' }} alt='' />
            <img src={images.anguralLogo} style={{ height: '41px' }} alt='' />
            <img src={images.swiftuiLogo} style={{ height: '41px' }} alt='' />
            <img src={images.flutterLogo} style={{ height: '41px' }} alt='' />
            <img src={images.swiftlintLogo} style={{ height: '41px' }} alt='' />
            <img src={images.rxSwiftLogo} style={{ height: '41px' }} alt='' />
            <img src={images.kotlinLogo} style={{ height: '41px' }} alt='' />
            <img src={images.javaLogo} style={{ height: '41px' }} alt='' />
            <img src={images.gradleLogo} style={{ height: '41px' }} alt='' />
            <img src={images.jetpackLogo} style={{ height: '41px' }} alt='' />
            <img src={images.swiftLogo} style={{ height: '41px' }} alt='' />
            <img src={images.obj_cLogo} style={{ height: '41px' }} alt='' />
            <img src={images.reduxLogo} style={{ height: '41px' }} alt='' />
            <img src={images.netcoreLogo} style={{ height: '41px' }} alt='' />
            <img
              src={images.microsoft_netLogo}
              style={{ height: '41px' }}
              alt=''
            />
            <img src={images.xamarinLogo} style={{ height: '41px' }} alt='' />
            <img src={images.asp_netLogo} style={{ height: '41px' }} alt='' />
          </div>
        </div>
      </div>
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'>
        <Row
          className='p-xl-4 p-lg-4 p-md-4 p-sm-3 p-2 h-auto rounded-3'
          style={{ backgroundColor: '#F3F8FF' }}
        >
          <Col xl={15} lg={15} md={24} sm={24} xs={24}>
            <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column gap-1'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
                style={{ color: '#363E3E' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                BENEFITS{' '}
              </span>
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                Empowering businesses through
                <span style={{ color: '#184D98' }}> AI Services</span>
              </h2>
              <p className='custom-font'>
                Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                Duis sit amet consectetur nisi, eget elementum nunc. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
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
                  <span className='fs-5 fw-bold custom-font custom-black-color'>
                    50+ Years
                  </span>
                  <p className='fw-medium custom-font custom-black-color  '>
                    of delivering Digital Transformation
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
                  <span className=' fs-5 fw-bold custom-black-color  custom-font'>
                    50+ Years
                  </span>
                  <p className='fw-medium custom-font custom-black-color '>
                    of delivering Digital Transformation
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
                  <span className='fs-5 fw-bold custom-black-color custom-font'>
                    50+ Years
                  </span>
                  <p className='fw-medium custom-font custom-black-color '>
                    of delivering Digital Transformation
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
                  <span className='fs-5 fw-bold custom-black-color custom-font'>
                    50+ Years
                  </span>
                  <p className='fw-medium custom-font custom-black-color  '>
                    of delivering Digital Transformation
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
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'>
        <Row gutter={[24, 20]}>
          <Col
            xl={13}
            lg={13}
            md={13}
            sm={24}
            xs={24}
            className='w-100 h-auto p-4 pb-0 rounded-top-3 d-flex flex-column gap-1'
          >
            <span
              className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
              style={{ color: '#363E3E' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              Challenges
            </span>
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
              <Col xl={10} lg={10} md={12} sm={15} xs={20}>
                <p className='fw-medium'>
                  Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                  Duis sit amet consectetur nisi, eget elementum nunc. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[24, 20]}>
              <Col xs={24} sm={12} md={12} lg={6} xl={6} className='h-auto'>
                <div className='w-100 h-100 p-4 bg-white rounded-3  border  d-flex flex-column gap-3'>
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
              <Col xs={24} sm={12} md={12} lg={6} xl={6} className='h-auto'>
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
              <Col xs={24} sm={12} md={12} lg={6} xl={6} className='h-auto'>
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
              <Col xs={24} sm={12} md={12} lg={6} xl={6} className='h-auto'>
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
            </Row>
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
            className='w-100 h-auto  pb-0 rounded-top-3 d-flex flex-column gap-1'
          >
            <span
              className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
              style={{ color: '#363E3E' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              BENEFITS
            </span>
            <h2
              className='custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              Our Process of working
            </h2>
            <p className='fw-medium custom-font'>
              Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
              Duis sit amet consectetur nisi, eget elementum nunc. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </Col>
          <Col span={24}>
            <Row gutter={[15, 15]}>
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className='d-flex flex-column gap-1 custom-black-color custom-font'
              >
                <img src={images.processICon1} alt='' width={70} height={70} />
                <span className='fs-4 fw-medium p-0 m-0 '>Process 1</span>
                <p>
                  Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                  Duis sit amet consectetur nisi, eget elementum nunc. 
                </p>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className='d-flex flex-column gap-1 custom-black-color custom-font '
              >
                <img src={images.processICon1} alt='' width={70} height={70} />
                <span className='fs-4 fw-medium p-0 m-0 '>Process 1</span>
                <p>
                  Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                  Duis sit amet consectetur nisi, eget elementum nunc. 
                </p>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className='d-flex flex-column gap-1 custom-black-color custom-font'
              >
                <img src={images.processICon1} alt='' width={70} height={70} />
                <span className='fs-4 fw-medium p-0 m-0 '>Process 1</span>
                <p>
                  Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                  Duis sit amet consectetur nisi, eget elementum nunc.  Quisque
                  venenatis vestibulum consequat. Vivamus ac urna nulla. Duis
                  sit amet consectetur nisi, eget elementum nunc. 
                </p>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className='d-flex flex-column gap-1 custom-black-color custom-font'
              >
                <img src={images.processICon1} alt='' width={70} height={70} />
                <span className='fs-4 fw-medium p-0 m-0 '>Process 1</span>
                <p>
                  Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
                  Duis sit amet consectetur nisi, eget elementum nunc. 
                </p>
              </Col>
              <Col
                span={24}
                className='d-xl-block d-lg-block d-md-none d-sm-none d-none mt-3'
              >
                <div className='d-flex align-items-end  justify-content-center'>
                  <div
                    style={{
                      width: '80%',
                      height: '2px',
                      backgroundColor: '#184D98',
                    }}
                    className='d-flex justify-content-between align-items-center'
                  >
                    <div
                      className='rounded-circle'
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#184D98',
                      }}
                    ></div>
                    <div
                      className='rounded-circle'
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#184D98',
                      }}
                    ></div>
                    <div
                      className='rounded-circle'
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#184D98',
                      }}
                    ></div>
                    <div
                      className='rounded-circle'
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#184D98',
                      }}
                    ></div>
                  </div>
                </div>
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
            className='w-100 h-auto  p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 rounded-top-3 d-flex flex-column gap-1'
          >
            <span
              className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
              style={{ color: '#363E3E' }}
            >
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  backgroundColor: '#184D98',
                }}
              ></div>
              Industries
            </span>
            <h2
              className='custom-font'
              style={{ fontWeight: 700, color: '#363E3E' }}
            >
              Achieve your business goals with Digital Transformation services
              the best in the game.
            </h2>
            <p className='fw-medium  fs-6 custom-font'>
              Quisque venenatis vestibulum consequat. Vivamus ac urna nulla.
              Duis sit amet consectetur nisi, eget elementum nunc. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.Quisque venenatis vestibulum consequat. Vivamus ac
              urna nulla. Duis sit amet consectetur nisi, eget elementum nunc.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
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
                      <img
                        src={images.saasapplication}
                        alt=''
                        width={70}
                        height={70}
                      />
                      <span className='fs-6 fw-bold p-0 m-0 '>
                        SAAS Application
                      </span>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Get your SaaS Applications with a subscription model
                        built on Microsoft Azure Cloud and scalable application
                        architecture using .net Framework and angular/react.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <img
                        src={images.enterpriceswebapplication}
                        alt=''
                        width={70}
                        height={70}
                      />
                      <span className='fs-6 fw-bold p-0 m-0 '>
                        Enterprise Web Applications
                      </span>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Get custom tools, features, programs, and websites that
                        are unique to your business. Our offerings are rich in
                        UI/UX, Intuitive, Secure and Scalable while being
                        cost-efficient.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <img
                        src={images.saasapplication}
                        alt=''
                        width={70}
                        height={70}
                      />
                      <span className='fs-6 fw-bold p-0 m-0 '>
                        Product Development
                      </span>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Get help with product engineering or build small to
                        large-scale products catering to different industry
                        verticals like insurance, banking, advertising, real
                        estate and health tech.
                      </p>
                    </Col>
                    <Col
                      span={12}
                      className=' custom-font d-flex flex-column gap-1 p-2'
                    >
                      <img
                        src={images.saasapplication}
                        alt=''
                        width={70}
                        height={70}
                      />
                      <span className='fs-6 fw-bold p-0 m-0 '>
                        Cloud support
                      </span>
                      <p
                        className='custom-paragraph-color'
                        style={{ fontSize: '14px' }}
                      >
                        Get support with cloud setup on Microsoft Azure or
                        Hybrid cloud setup. Migrate. Net apps to Azure Cloud,
                        including upgrades, Data security, Azure SSO
                        implementation, and DeOps.
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
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
            <div className='w-100 h-auto p-4 rounded-top-3 d-flex flex-column gap-1'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font'
                style={{ color: '#363E3E' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '3px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                BENEFITS{' '}
              </span>
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
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free consultation
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Seamless integration
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    No-cost proposal draft
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Enhanced data security
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Tailored Solutions
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    On-time project delivery
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Scalability and flexibility
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free backend Dashboard training
                  </span>
                </Col>

                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Support after project delivery
                  </span>
                </Col>
                <Col span={12} className='custom-roman-font'>
                  <span className='d-flex align-items-center fs-6 gap-2 fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free AMC (annual maintenance contract) services
                  </span>
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
                <Form.Item name='query'>
                  <Input
                    placeholder="What's your Query?"
                    className='border-0 border-bottom border-black rounded-0'
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    className='w-100 text-white fs-5  d-flex justify-content-center align-items-center custom-roman-font'
                    size='large'
                    style={{ backgroundColor: '#184D98' }}
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

export default React.memo(Ai);
