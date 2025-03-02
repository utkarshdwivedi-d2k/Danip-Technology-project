import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Button, Card, Col, Collapse, Form, Input, Row, Steps } from 'antd';
import silliconindoa from '../assets/images/silliconindia.png';
import { CheckOutlined, DownOutlined } from '@ant-design/icons';
import Footer from '../components/Footer';
import CarouselFortechnologystack from '../components/CarouselFortechnologystack';
import { images } from '../controller/images';
import { Helmet } from "react-helmet";
const DubaiHomePage = () => {
  const panelStyle = {
    marginBottom: 24,
    border: 'none',
    borderBottom: '1px solid #184D98',
  };
  const items = [
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
      style: panelStyle,
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
      style: panelStyle,
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
      style: panelStyle,
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
      style: panelStyle,
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
      style: panelStyle,
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
      style: panelStyle,
    },
  ];
  const [scroll, setScroll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY, 'Dlddlmdldmldm');

      if (window.scrollY >= 56) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    function handleResize() {
      if (window.innerWidth > 575 && window.innerWidth <= 1024) {
        setWindowWidth(true);
      } else {
        setWindowWidth(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
     <Helmet>
        <title>Mobile App Development In Dubai | Affordable App Solutions In Dubai</title>
        <meta name="description" content={"We at Danip Technologies offer top-notch highly functional web development services in Dubai that are secure, user-friendly, and visually appealing.  "} />
      </Helmet>
    <div className=' w-100'>
      <div className=' dubai-heading-container w-100 text-white pb-5 position-relative'>
        <Navbar scroll={scroll} />
        <div className='w-100 d-flex justify-content-start align-items-center dubai-main-section-container'>
          <Row gutter={[12, 15]} className='p-0 m-0  navbar-container'>
            <Col
              xl={14}
              lg={14}
              md={17}
              sm={20}
              xs={24}
              className='navbar-content'
            >
              <div className='w-100 d-flex flex-column gap-3 '>
                <h1
                  style={{ lineHeight: 1.1 }}
                  className='lh-1 display-3 fw-bold custom-font'
                >
                  Customer-Oriented App Development Services In Dubai
                </h1>
                <p style={{ fontSize: '18px' }} className='custom-roman-font '>
                  We strive to give our customers the best experience of app
                  development for their digital transformation.
                </p>
                <h5
                  className='fs-5 fw-bold mt-5 mb-3 custom-font'
                  style={{ color: '#FCDE6D' }}
                >
                  Reconised As Rising Star In IT Service Industry
                </h5>
                <Row gutter={[12, 15]}>
                  <Col xl={7} lg={7} md={9} sm={10} xs={15}>
                    <div className='bg-white d-flex justify-content-center align-items-center p-2 rounded-1'>
                      <img src={silliconindoa} width={127} height={33} alt='' />
                    </div>
                  </Col>
                  <Col xl={7} lg={7} md={9} sm={10} xs={15}>
                    <div className='bg-white d-flex justify-content-center align-items-center p-2 rounded-1'>
                      <img
                        src={images.bussinessconnect}
                        width={170}
                        height={33}
                        alt=''
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              xl={10}
              lg={10}
              md={15}
              sm={20}
              xs={24}
              className='d-flex justify-content-center align-items-center p-lg-5 p-xl-5 p-md-4 p-sm-2 p-2 pt-3'
            >
              <Card className='p-4 pb-3 pt-3  rounded-5 bg-opacity-75 bg-white card-customize'>
                <span className='d-flex justify-content-center fs-3 fw-semibold mb-3 custom-roman-font'>
                  Get Free Consultation Now
                </span>
                <Form>
                  <Row>
                    <Col span={24}>
                      <Form.Item name='name'>
                        <Input
                          size='middle'
                          placeholder='Your Name'
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='Email'>
                        <Input
                          size='middle'
                          placeholder='Email'
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='phone'>
                        <Input
                          size='middle'
                          placeholder='Phone'
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='query'>
                        <Input
                          size='middle'
                          placeholder="What's your Query?"
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <Button
                          type='primary'
                          className='w-100 h-100 text-white fs-5 d-flex justify-content-center align-items-center custom-roman-font'
                          size='middle'
                          style={{ backgroundColor: '#e9464a' }}
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className=' h-auto d-flex flex-column gap-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-5 background-color-light'
        style={{ height: 'auto' }}
      >
        <div className='d-flex flex-column text-center w-100 gap-5 '>
          <Row className='w-100 justify-content-center'>
            <Col
              xl={15}
              lg={15}
              md={17}
              sm={20}
              xs={24}
              className='d-flex flex-column gap-3'
            >
              <h1
                className='fs-1 lh-sm custom-font'
                style={{ fontWeight: 900 }}
              >
                The Intuitive Way To Build Your Custom Mobile App
              </h1>
              <p className='fs-6 fw-normal custom-paragraph-color custom-roman-font'>
                Danip Technologies focuses on creating intuitive custom mobile
                apps that flawlessly work on Android, iOS, Flutter, and React
                Native Platforms.
              </p>
              <Row
                gutter={[10, 15]}
                justify={'center'}
                className='mt-3 custom-roman-font'
              >
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free consultation
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Seamless integration
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    No-cost proposal draft
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Enhanced data security
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Tailored Solutions
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    On-time project delivery
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Scalability and flexibility
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free backend Dashboard training
                  </h6>
                </Col>

                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Support after project delivery
                  </h6>
                </Col>
                <Col
                  xl={10}
                  lg={10}
                  md={11}
                  sm={24}
                  xs={24}
                  className='custom-roman-font'
                >
                  <h6 className='d-flex gap-2 align-items-center fw-medium  '>
                    <CheckOutlined className='custom-color' />
                    Free AMC (annual maintenance contract) services
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div
        className='p-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 h-auto d-flex flex-column gap-5'
      >
        <div className='d-flex flex-column text-center w-100 gap-lg-5 gap-xl-5 gap-md-4 gap-sm-3 gap-2 '>
          <Row className='w-100 justify-content-center '>
            <Col
              xl={15}
              lg={15}
              md={17}
              sm={20}
              xs={24}
              className='d-flex flex-column gap-3'
            >
              <span
                className='fs-1 lh-sm custom-font'
                style={{ color: '#26244B', fontWeight: 900 }}
              >
                Premium Mobile App Development Services in Dubai
              </span>
              <span className='fs-5 fw-normal custom-paragraph-color custom-roman-font'>
                We are a team of tech enthusiasts driven by passion, offering
                next-gen mobile app development services to startups,
                enterprises, global brands, and government organizations in
                Dubai.
              </span>
            </Col>
          </Row>
          <Row gutter={[20, 20]} className='w-100'>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start'>
                <div>
                  <img src={images.andoridicon} className='rounded-2' alt='' />
                </div>
                <span className='fs-4 fw-semibold custom-font'>
                  Android Application Development
                </span>
                <p className='fs-6 custom-paragraph-color custom-roman-font'>
                  We develop robust & intuitive mobile apps that run seamlessly
                  on Android smartphones, tablets, Android Wear, and Android TV.
                  Harness the power of the digital world with our expertise.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start'>
                <div>
                  {' '}
                  <img src={images.iosicon} className='rounded-2' alt='' />
                </div>
                <span className='fs-4 fw-semibold custom-font'>
                  iOS Application Development
                </span>
                <p className='fs-6 custom-paragraph-color custom-roman-font'>
                  Explore our iOS app development service for expertly crafted,
                  user-friendly application, enhancing your brand's digital
                  presence & engaging your audience effectively.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start'>
                <div>
                  {' '}
                  <img src={images.reacticon} className='rounded-2' alt='' />
                </div>
                <span className='fs-4 fw-semibold custom-font'>
                  React Native Application Development
                </span>
                <p className='fs-6 custom-paragraph-color custom-roman-font'>
                  Leverage our React Native expertise to build apps from scratch
                  or integrate the framework seamlessly into existing projects.
                  We align the app with your business objectives for optimal
                  results.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start'>
                <div>
                  {' '}
                  <img src={images.flutterIcon} className='rounded-2' alt='' />
                </div>
                <span className='fs-4 fw-semibold custom-font'>
                  Flutter Application Development
                </span>
                <p className='fs-6 custom-paragraph-color custom-roman-font'>
                  Embrace a seamless cross-platform engagement for your business
                  through our expert Flutter app development service. From
                  design and development to rigorous testing and deployment.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div
        className=' h-auto d-flex flex-column gap-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 pt-5 background-color-light'
        style={{ height: 'auto' }}
      >
        <div className='d-flex flex-column text-center w-100 gap-5 '>
          <Row className='w-100 justify-content-center'>
            <Col
              xl={15}
              lg={15}
              md={17}
              sm={20}
              xs={24}
              className='d-flex flex-column gap-3'
            >
              
              <h1
                className='fs-1 lh-sm custom-font'
                style={{ fontWeight: 900 }}
              >
                Stages in Mobile App Development Process
              </h1>
              <p className='fs-6 fw-normal custom-paragraph-color custom-roman-font'>
                We follow a custom mobile app development process based on the
                requirements of the clients. our organization comprises devOps
                cultural philosophy in order to get the products delivered in
                the committed timeframe. Our company holds a record 100% on-time
                delivery ratio.
              </p>
            </Col>
          </Row>

          <Steps
            className={`${windowWidth ? 'ant-steps-vertical' : 'custom-step'}`}
            current={5}
            size='small'
            labelPlacement='vertical'
            responsive={true}
            items={[
              {
                title: (
                  <div className='custom-color fw-bold fs-6 custom-font'>
                    Step 1
                  </div>
                ),
                description: (
                  <div className='w-100'>
                    <span className='text-black fw-bold fs-5 custom-font'>
                      Ideation
                    </span>
                    <ul className='fs-6 custom-paragraph-color custom-roman-font'>
                      <li>Scope Definition</li>
                      <li>Requirement Gathering</li>
                      <li>Market Research</li>
                      <li>Conceptualization</li>
                      <li>Project Plan</li>
                    </ul>
                  </div>
                ),
                icon: (
                  <div className='border custom-step-icon p-3 rounded-circle'>
                    <img src={images?.ideation} width={30} height={30} alt='' />
                  </div>
                ),
              },
              {
                title: (
                  <div className='custom-color fw-bold fs-6 custom-font'>
                    Step 2
                  </div>
                ),
                description: (
                  <div className='w-100'>
                    <span className='text-black fw-bold fs-5 custom-font'>
                      Design{' '}
                    </span>
                    <ul className='fs-6 custom-paragraph-color custom-roman-font'>
                      <li>Wireframing</li>
                      <li>UI/UX Design</li>
                      <li>Prototyping</li>
                      <li>Design Approval</li>
                    </ul>
                  </div>
                ),
                icon: (
                  <div className='border custom-step-icon p-3 rounded-circle'>
                    <img src={images?.design} width={30} height={30} alt='' />
                  </div>
                ),
              },
              {
                title: (
                  <div className='custom-color fw-bold fs-6 custom-font'>
                    Step 3
                  </div>
                ),
                description: (
                  <div className='w-100'>
                    <span className='text-black fw-bold fs-5 custom-font'>
                      Development{' '}
                    </span>
                    <ul className='fs-6 custom-paragraph-color custom-roman-font'>
                      <li>Front-End Development</li>
                      <li>Back-End Development</li>
                      <li>Integration</li>
                      <li>Testing</li>
                    </ul>
                  </div>
                ),
                icon: (
                  <div className='border custom-step-icon p-3 rounded-circle'>
                    <img
                      src={images?.developement}
                      width={30}
                      height={30}
                      alt=''
                    />
                  </div>
                ),
              },
              {
                title: (
                  <div className='custom-color fw-bold fs-6 custom-font'>
                    Step 4
                  </div>
                ),
                description: (
                  <div className='w-100'>
                    <span className='text-black fw-bold fs-5 custom-font'>
                      Testing{' '}
                    </span>
                    <ul className='fs-6 custom-paragraph-color custom-roman-font'>
                      <li>Manual Testing</li>
                      <li>Automated Testing</li>
                      <li>User Acceptance Testing</li>
                      <li>Bug Fixing</li>
                    </ul>
                  </div>
                ),
                icon: (
                  <div className='border custom-step-icon p-3 rounded-circle'>
                    <img src={images?.testing} width={30} height={30} alt='' />
                  </div>
                ),
              },
              {
                title: (
                  <div className='custom-color fw-bold fs-6 custom-font'>
                    Step 5
                  </div>
                ),
                description: (
                  <div className='w-100'>
                    <span className='text-black fw-bold fs-5 custom-font'>
                      Deployment{' '}
                    </span>
                    <ul className='fs-6 custom-paragraph-color custom-roman-font'>
                      <li>Deployment</li>
                      <li>Monitoring</li>
                      <li>Updates and Maintenance</li>
                      <li>Security Updates</li>
                    </ul>
                  </div>
                ),
                icon: (
                  <div className='border custom-step-icon p-3 rounded-circle'>
                    <img
                      src={images?.deployment}
                      width={30}
                      height={30}
                      alt=''
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div
        className='p-xl-5 p-lg-5 p-md-5 p-sm-3 p-3 h-auto d-flex flex-column gap-5'
      >
        <div className='d-flex flex-column text-center w-100 gap-lg-5 gap-xl-5 gap-md-4 gap-sm-3 gap-2 '>
          <Row>
            <Col
              span={24}
              className='d-flex flex-column gap-lg-5 gap-xl-5 gap-md-4 gap-sm-3 gap-2s'
            >
              <span className='fs-1 fw-bolder lh-sm'>Our Success Partners</span>
              <Row gutter={[12, 15]} className='w-100 justify-content-center'>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img
                    src={images.mercedez_benzlogo}
                    className='rounded-2'
                    alt=''
                  />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.adstrixLogo} className='rounded-2' alt='' />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.sab} className='rounded-2' alt='' />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.stokkd} className='rounded-2' alt='' />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.doctor_cpr} className='rounded-2' alt='' />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.prefillLogo} className='rounded-2' alt='' />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.bmw} className='rounded-2' alt='' />
                </Col>
                <Col xl={5} lg={5} md={7} sm={12} xs={24} className='p-3'>
                  <img src={images.hoppingmonk} className='rounded-2' alt='' />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24} className='d-flex flex-column gap-5'>
              <span
                className='fs-1 lh-sm custom-font'
                style={{ fontWeight: 900 }}
              >
                Our Technology Stack
              </span>
              <CarouselFortechnologystack />
            </Col>
          </Row>
          <Row className='w-100 justify-content-center mt-5 pt-5'>
            <Col
              xl={13}
              lg={13}
              md={17}
              sm={20}
              xs={24}
              className='d-flex flex-column justify-content-center align-items-center gap-3'
            >
              <span
                className='fs-1 fw-bolder lh-sm'
                style={{ color: '#26244B' }}
              >
                Why Choose Us?
              </span>
              <div className='underline-bar-custom'></div>
            </Col>
          </Row>
          <Row gutter={[12, 12]}>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3'>
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
                  Weekly Updates
                </h5>
                <p
                  className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                  style={{ letterSpacing: 'normal' }}
                >
                  We provide detailed weekly development reports to our clients.
                  Also we believe No-Geek talk. We update our clients plain and
                  simple.
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3'>
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
                  Robust Experience
                </h5>
                <p
                  className='fs-6 fw-normal custom-paragraph-color custom-roman-font'
                  style={{ letterSpacing: 'normal' }}
                >
                  In the last 10 years, we have designed and developed
                  applications in travel, insurance, advertisement, e-commerce,
                  etc.
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3'>
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
                  Safe Payments
                </h5>
                <p
                  className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                  style={{ letterSpacing: 'normal' }}
                >
                  We don't charge until tasks are complete and verified by your
                  team. Through an integrated PayPal system, you can now make
                  payments easily.
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3'>
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
                  Our Expertise
                </h5>
                <p
                  className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                  style={{ letterSpacing: 'normal' }}
                >
                  We have vast experience in working with all the latest
                  technologies such as React, flutter, Xamarin, AR, AI, Ionic
                  etc..
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3'>
                <div>
                  {' '}
                  <img
                    src={images.saleservices}
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
                  After Sale Service
                </h5>
                <p
                  className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                  style={{ letterSpacing: 'normal' }}
                >
                  We monitor the application for any necessary fixes or changes
                  required to ensure the product works perfectly.
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className='d-flex flex-column gap-2 text-start p-xl-4 p-lg-4 p-md-3 p-sm-3 p-3'>
                <div>
                  {' '}
                  <img
                    src={images.amcservices}
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
                  AMC Services
                </h5>
                <p
                  className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                  style={{ letterSpacing: 'normal' }}
                >
                  We Ensure smooth functionality with optimal performance with
                  our AMC Services tailored for updates and enhancements.
                </p>
              </div>
            </Col>
          </Row>
          <Row gutter={[12, 15]} className='h-100'>
            <Col
              xl={9}
              lg={9}
              md={10}
              sm={24}
              xs={24}
              className='overflow-hidden p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2'
            >
              <img
                src={images.mobileappsection}
                alt=''
                width={'100%'}
                height={'100%'}
                className='rounded-4'
              />
            </Col>
            <Col
              xl={15}
              lg={15}
              md={15}
              sm={24}
              xs={24}
              className='d-flex flex-column gap-3 feturing-container text-start p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2'
              style={{ letterSpacing: '0em' }}
            >
              <span
                className='d-flex w-100 align-items-center gap-2 fs-6 custom-font'
                style={{ color: '#4A4A4A' }}
              >
                ELEVATE WITH APP DEVELOPMENT
                <div
                  style={{
                    width: '34px',
                    height: '7px',
                    backgroundColor: '#4A4A4A',
                  }}
                ></div>
              </span>
              <h1 className=' fw-semibold  lh-sm custom-font-roman'>
                Supercharge Your Business with
                <span className='fw-bolder'> Custom Mobile Application</span>
              </h1>
              <p className='custom-paragraph-color fs-6 lh-base custom-font-roman'>
                Boost your business with our cutting-edge mobile app development
                services, designed to enhance your productivity and increase
                customer engagement. Streamline operations, reach a wider
                audience, and stay ahead of the competition with our powerful
                business solution.
              </p>
              <Row>
                <Col xl={12} lg={12} md={12} sm={15} xs={17}>
                  <Button className='w-100 border-0 talk-to-experts-btn  fs-5  h-100 mt-3'>
                    <span
                      className='custom-font-roman'
                      style={{ letterSpacing: '0em' }}
                    >
                      Talk To Our Experts
                    </span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div
        className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-5  h-auto bg-light border-top border-2'
      >
        <Row gutter={[12, 15]} className='w-100 justify-content-center h-100'>
          <Col
            xl={15}
            lg={15}
            md={17}
            sm={20}
            xs={24}
            className='d-flex flex-column justify-content-center align-items-center text-center gap-3'
          >
            <span
              className='fs-1 text-black lh-sm custom-font'
              style={{ fontWeight: 900 }}
            >
              Our Mobile App Development Portfolio For Industries in Dubai
            </span>
            <div className='underline-bar-custom'></div>
          </Col>
        </Row>
        <Row
          gutter={[12, 15]}
          className='w-100 justify-content-center h-100 mt-5'
        >
          <Col
            xl={17}
            lg={17}
            md={20}
            sm={22}
            xs={24}
            className='d-flex flex-column justify-content-center align-items-center text-center gap-4'
          >
            <p
              className='fs-5 lh-sm custom-roman-font'
              style={{ color: '#4A4A4A' }}
            >
              We have a huge portfolio in mobile app development services. Our
              team has catered to government organizations, Startups,
              enterprises, and global brands. Our vast portfolio includes
              various industries such as Healthcare, Insurance, Travel,
              E-commerce, Agriculture, Education, Bank, Real estate etc.
            </p>
            <div>
              <span className='text-decoration-underline fs-6 custom-roman-font'>
                View our case studies{' '}
              </span>
            </div>
          </Col>
        </Row>
        <Row gutter={[15, 15]} className='mt-5'>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 w-100 position-relative'>
              <img src={images.ediskill} alt='' className='w-100 h-100' />
              <div className='position-sticky mobile-app-development-card rounded-4 p-3 d-flex flex-column gap-1 text-center'>
                <h4 className='fs-4 fw-bolder custom-font'>Ediskills</h4>
                <span className='custom-paragraph-color fs-6 custom-roman-font'>
                  Education Application
                </span>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 w-100 position-relative'>
              <img src={images.snapon} className='w-100 h-100' alt='' />
              <div className='position-sticky mobile-app-development-card rounded-4 p-3 d-flex flex-column gap-1 text-center'>
                <span className='fs-4 fw-bolder custom-font'>SnapOn</span>
                <span className='custom-paragraph-color fs-6'>
                  Online Food Delivery Application
                </span>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 w-100 position-relative'>
              <img src={images.digipay} className='w-100 h-100' alt='' />
              <div className='position-sticky mobile-app-development-card rounded-4 p-3 d-flex flex-column gap-1 text-center'>
                <span className='fs-4 fw-bolder custom-font'>DigiPay</span>
                <span className='custom-paragraph-color fs-6'>
                  Online Payment Application
                </span>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 w-100 position-relative'>
              <img src={images.uzone} className='w-100 h-100' alt='' />
              <div className='position-sticky mobile-app-development-card rounded-4 p-3 d-flex flex-column gap-1 text-center'>
                <span className='fs-4 fw-bolder custom-font'>Uzone</span>
                <span className='custom-paragraph-color fs-6'>
                  Healthcare Application
                </span>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 w-100 position-relative'>
              <img src={images.onTab} className='w-100 h-100' alt='' />
              <div className='position-sticky mobile-app-development-card rounded-4 p-3 d-flex flex-column gap-1 text-center'>
                <span className='fs-4 fw-bolder custom-font'>OnTab</span>
                <span className='custom-paragraph-color fs-6'>
                  Restaurant Table Booking Application
                </span>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 w-100 position-relative'>
              <img src={images.audile} className='w-100 h-100' alt='' />
              <div className='position-sticky mobile-app-development-card rounded-4 p-3 d-flex flex-column gap-1 text-center'>
                <span className='fs-4 fw-bolder custom-font'>Audile</span>
                <span className='custom-paragraph-color fs-6'>
                  E-Commerce Application
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className='ready-to-transform-bg text-white h-100 w-100'>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className=' d-flex align-items-end justify-content-center'
        >
          <img src={images.arabian_saudi_man} alt='' />
        </Col>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 pt-5 d-flex justify-content-center align-items-center'
        >
          <div className='d-flex flex-column gap-2'>
            <h1
              className='display-5 lh-sm custom-font'
              style={{ fontWeight: 900 }}
            >
              Ready to Transform Your Business?
            </h1>
            <span className='fs-6 custom-roman-font'>
              Connect with the Finest Mobile App Development Company in Dubai.
            </span>
            <Row>
              <Col xl={12} lg={12} md={12} sm={15} xs={17}>
                <Button className='w-100 border-0 talk-to-experts-btn  fs-5  h-100 mt-3'>
                  <span
                    className='custom-font-roman'
                    style={{ letterSpacing: '0em' }}
                  >
                    Send Us A Query
                  </span>
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div
        className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 pt-5  h-auto'
      >
        <Row gutter={[12, 15]} className='w-100 justify-content-center h-100'>
          <Col
            xl={15}
            lg={15}
            md={17}
            sm={20}
            xs={24}
            className='d-flex flex-column justify-content-center align-items-center text-center gap-3'
          >
            <span
              className='fs-1 lh-sm custom-font'
              style={{ fontWeight: 800 }}
            >
              Industries We've Transformed
            </span>
            <p
              className='fs-5 lh-sm custom-roman-font'
              style={{ color: '#585858' }}
            >
              Our mobile application development services at Danip Technologies
              in Dubai have led to transformative changes across industries.
            </p>
          </Col>
        </Row>
        <Row gutter={[12, 15]} className='mt-5'>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.healthIcon} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Healthcare</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Our Health monitoring and management mobile apps are vital for
                patients to monitor and manage their health more efficiently at
                any time and anywhere. It includes the track record of Blood
                pressure, heart rate, blood glucose level and much more.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.realEstate} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Real Estate</h4>
              <span
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Our mobile apps for real estate consist of convenient messenger
                and the ability to make calls, the app provides detailed
                information about each property like photos, videos, location,
                brief description and a virtual tour.
              </span>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.insurance} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Insurance</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Our mobile apps include allowing users to manage their policies,
                upload documents, deposit premiums, and file claims & track them
                in one place. We provide integration of AI, IoT, and NLP for
                better customer experience
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.education} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Education</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Mobile apps allows users to learn at their own pace. Which
                includes class recording, online classes, mock tests, excel or
                sheet automation. We built fast & user friendly apps available
                for both IOS and android.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3 d-flex flex-column gap-3'>
              <img src={images.e_commerce} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>E-commerce</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Get your own custom e-commerce app and stay connected with your
                consumers. Get orders with hassle free processing and delivery
                partner options. Scalable, fast & user-friendly options are
                available.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3 d-flex flex-column gap-3'>
              <img src={images.food_and_bevrages} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Food and Bevrages</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Our team of experts helps in creating specialized apps to
                enhance the customer experience by providing digital menus and
                brochures and also letting customers order food and get it
                delivered to their doorsteps.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.media} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Media</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Our developers have experience in building customized news apps.
                Get yours with endless integrations and unlimited automation
                options from our store.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.retail} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Retail</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Stay connected with your audience at your own mobile app
                platform. Send custom notification, automate subscriptions,
                choose from various delivery partners. Etc...
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className='industries-card'>
            <div className='w-100 h-100 p-4 bg-white rounded-3  d-flex flex-column gap-3'>
              <img src={images.fitness_and_wellness} alt='' width={50} />
              <h4 className=' fw-bold custom-font m-0'>Fitness & Wellness</h4>
              <p
                className='fs-6 fw-normal custom-paragraph-color custom-font-roman'
                style={{ letterSpacing: 'normal' }}
              >
                Get your own customized health & fitness app to stay connected
                with your client base. Our apps have facilities such as recorded
                sessions, booking appointment, Live classes.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className='consultation-container w-100 text-white p-2 pt-4 pb-4'>
        <div className='w-100 d-flex justify-content-start align-items-center mt-4'>
          <Row gutter={[12, 15]}>
            <Col
              xl={14}
              lg={14}
              md={17}
              sm={24}
              xs={24}
              className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3'
            >
              <div className='w-100 d-flex flex-column gap-2 '>
                <h1 className='lh-sm display-3 fw-bold custom-font'>
                  Get a Mobile App for your Business
                </h1>
                <span className='fs-5 custom-roman-font'>
                  We've collaborated with world-renowned brands and visionary
                  ideas spanning diverse industries.
                </span>

                <Row gutter={[10, 15]} className='mt-3 custom-roman-font'>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Free consultation
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Seamless integration
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      No-cost proposal draft
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Enhanced data security
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Tailored Solutions
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      On-time project delivery
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Scalability and flexibility
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Free backend Dashboard training
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Support after project delivery
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className='d-flex gap-2 align-items-center fs-6 custom-roman-font'>
                      <CheckOutlined />
                      Free AMC (annual maintenance contract) services
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              xl={10}
              lg={10}
              md={15}
              sm={20}
              xs={24}
              className='d-flex justify-content-center align-items-center p-xl-5 p-lg-4 p-md-4 p-sm-3 p-3 pt-5'
            >
              <Card className='p-4 pb-3 pt-3  rounded-5 bg-opacity-75 bg-white card-customize'>
                <span className='d-flex justify-content-center fs-3 fw-semibold mb-3 custom-roman-font'>
                  Get Free Consultation Now
                </span>
                <Form>
                  <Row>
                    <Col span={24}>
                      <Form.Item name='name'>
                        <Input
                          size='middle'
                          placeholder='Your Name'
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='Email'>
                        <Input
                          size='middle'
                          placeholder='Email'
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='phone'>
                        <Input
                          size='middle'
                          placeholder='Phone'
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name='query'>
                        <Input
                          size='middle'
                          placeholder="What's your Query?"
                          className='border-0 border-bottom bg-transparent border-black rounded-0 dubai-cunsultation-form-input'
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <Button
                          type='primary'
                          className='w-100 get-in-touch-btn text-white fs-5  d-flex justify-content-center align-items-center custom-roman-font'
                          size='large'
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 pt-5 h-auto d-flex flex-column gap-lg-5 gap-xl-5 gap-md-4 gap-sm-3 gap-2 align-items-center '
        style={{ minHeight: '100vh' }}
      >
        <div className='d-flex flex-column text-center '>
          <span className='fs-1 fw-bolder lh-sm custom-font'>
            Frequently Asked Questions
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

export default DubaiHomePage;
