import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import {
  Button,
  Card,
  Col,
  Collapse,
  Divider,
  Form,
  Input,
  Row,
  Tabs,
} from 'antd';
import { images } from '../../controller/images';
import {
  CaretRightOutlined,
  CheckOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../controller/routes';

const MobileAppDevelopement = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
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
  const scrollContainerRef = useRef(null);
  const scrollContainerRefindustries = useRef(null);
  const handleScrollButtonClick = (direction, ref) => {
    const scrollAmount = 300;
    const container = ref.current;

    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const panelStyle = {
    marginBottom: 24,
    border: 'none',
    borderBottom: '1px solid #184D98',
  };
  const items = [
    {
      key: '1',
      label: 'Do you offer free mobile app development consultations?',
      children: (
        <p className='d-flex flex-column gap-4 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            Yes, we offer{' '}
            <span className='fw-bold'>
              free mobile app development consultation
            </span>{' '}
            to all of our potential clients. We understand that you would have a
            lot of questions about the{' '}
            <span className='fw-bold'>cost, time, and requirements </span>
            of developing an app.
          </span>
          <span>
            Our consultation team is always happy to answer your questions and
            provide a free consultation to help you get started.
          </span>
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '2',
      label: 'How much time it takes to build customized mobile apps?',
      children: (
        <p className='d-flex flex-column  custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            Generally speaking, it takes around{' '}
            <span className='fw-bold'>3-4 months</span> to build a simple app
            with basic features.
          </span>
          <span>
            For more complex apps, the development process can take anywhere
            from <span className='fw-bold'>4 to 6 months, </span>depending on
            the specific requirements and features.
          </span>
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '3',
      label: 'What are the best languages for mobile app development?',
      children: (
        <p className='d-flex flex-column  gap-3 custom-paragraph-color custom-roman-font fw-normal'>
          <span>
            For Android apps, the most popular languages are{' '}
            <span className='fw-bold'>Java</span> to build a simple app with
            basic features. <span className='fw-bold'>Kotlin.</span>{' '}
          </span>
          <span>
            For <span className='fw-bold'>iOS apps, </span>the most popular
            language is <span className='fw-bold'>Swift. </span>
            However, the most popular cross-platform app development frameworks
            are <span className='fw-bold'>Flutter and React Native.</span>
          </span>
          <span>
            These frameworks allow you to develop a single app that can be
            deployed on both Android and iOS devices.
          </span>
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '4',
      label: 'How much does it cost to develop an app?',
      children: (
        <p className='d-flex flex-column  gap-3 custom-paragraph-color custom-roman-font fw-normal'>
          As a general rule of thumb, you can expect to pay anywhere from a few
          thousand dollars to tens of thousands of dollars for a basic mobile
          app. However the cost of developing an app can vary greatly depending
          on a number of factors, including the complexity of the app, the
          features it includes, and the platform it is being developed for.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: '5',
      label: 'What type of mobile apps do you develop?',
      children: (
        <p className='d-flex flex-column  gap-3 custom-paragraph-color custom-roman-font fw-normal'>
          <span>We develop all types of mobile apps, including:</span>
          <ol>
            <li>Android apps Development</li>
            <li>IOS apps Development</li>
            <li>Cross-platform apps Development</li>
            <li>Native apps Development</li>
            <li>Hybrid apps Development</li>
            <li>Web apps Development</li>
            <li>Games apps Development</li>
            <li>Enterprise apps Development</li>
            <li>Consumer apps Development</li>
          </ol>
        </p>
      ),
      style: panelStyle,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          App Development Services | Best Mobile App Company For Boosting Your
          Business
        </title>
        <meta
          name='description'
          content={
            'Our well-versed team of developers will ensure you get the best app development services. '
          }
        />
      </Helmet>
      <div className='w-100 ' style={{ color: '#363E3E' }}>
        <div className='mobile-app-development-heading-container text-white position-relative d-flex justify-content-between flex-column'>
          <Navbar scroll={scroll} />
          <Row
            gutter={[0, 15]}
            className='heading-container p-xl-5 p-lg-5 p-md-4 p-sm-3 p-4 pb-5'
          >
            <Col
              xl={15}
              lg={15}
              md={17}
              sm={16}
              xs={16}
              className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
            >
              <span className='lh-sm custom-font main-heading'>
                {/* <span className='fs-3'>TRANSFORM YOUR BUSINESS WITH</span>
                <div>Mobile Application</div>
                <div>Development Services</div> */}
                Mobile App Development
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
              <span className=' lh-sm custom-font heading-paragraph'>
                Helping enterprises digitally transform their business through
                the power of technology and innovation.
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
                <button className='learn-more-btn heading-btn bg-transparent border-0 text-white'>
                  Learn more <CaretRightOutlined />
                </button>
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
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4  h-100'
          style={{ minHeight: 'auto' }}
        >
          <Row gutter={[12, 15]} className='h-100'>
            <Col
              xl={15}
              lg={15}
              md={15}
              sm={24}
              xs={24}
              className='d-flex flex-column gap-0 feturing-container'
            >
              <span
                className='fs-2 fw-bold lh-sm custom-font'
                style={{ color: '#363E3E' }}
              >
                The Intuitive Way To Build Your{' '}
                <span style={{ color: '#184D98' }}>Custom Mobile App.</span>
              </span>
              <span className='fs-6 custom-roman-font custom-paragraph-color mt-3'>
                Danip Technologies focuses on creating intuitive custom mobile
                apps that flawlessly work on Android, iOS, Flutter, and React
                Native Platforms.
              </span>
              <Row gutter={[12, 12]} className='mt-3'>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Free consultation
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    On-time project delivery
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Seamless integration
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Free backend Dashboard training
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Enhanced data security
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Support after project delivery
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Tailored Solutions
                  </span>
                </Col>
                <Col span={12}>
                  <span className='d-flex align-items-center gap-2 fs-6 custom-roman-font text-black '>
                    <div
                      className=' p-2  rounded-circle w-auto h-auto d-flex justify-content-center align-items-center'
                      style={{ backgroundColor: '#F5F5F5' }}
                    >
                      <CheckOutlined className='text-black fw-bolder' />
                    </div>
                    Free AMC (annual maintenance contract) services
                  </span>
                </Col>
              </Row>
            </Col>
            <Col
              xl={9}
              lg={9}
              md={9}
              sm={24}
              xs={24}
              className='overflow-hidden'
            >
              <img
                src={images.social_media_marketing}
                alt=''
                width={'100%'}
                height={'100%'}
                loading='lazy'
              />
            </Col>
          </Row>
        </div>
        <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-2 h-auto'>
          <Row gutter={[12, 12]}>
            <Col
              xl={13}
              lg={13}
              md={13}
              sm={24}
              xs={24}
              className='w-100 h-auto pb-0 rounded-top-3 d-flex flex-column'
            >
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                End-to-End
                <span style={{ color: '#184D98' }}>
                  {' '}
                  Mobile App Development Solutions{' '}
                </span>
              </h2>
            </Col>
            <Col
              span={17}
              className='w-100 h-auto pt-0 rounded-top-3 d-flex flex-column gap-3'
              style={{ color: '#363E3E' }}
            >
              <p className='fs-6 custom-roman-font custom-paragraph-color'>
                As an experienced{' '}
                <span className='fw-semibold'>
                  mobile software development company,
                </span>{' '}
                we craft innovative mobile app development solutions that
                empower startups, enterprises, global brands, and government
                organizations to achieve their business goals.
              </p>
            </Col>
            <Col span={24}>
              <Tabs
                className='custom-font fs-6 fw-bold mobile-app-development-tab'
                style={{ color: '#363E3E' }}
                defaultActiveKey='1'
                items={[
                  {
                    label: 'Android App Development',
                    key: '1',
                    children: (
                      <Row gutter={[12, 12]} justify={'space-between'}>
                        <Col xl={15} lg={15} md={15} sm={24} xs={24}>
                          <div className='d-flex flex-column gap-2'>
                              <div
                                className='p-2 rounded-2 d-flex justify-content-center align-items-center'
                                style={{width:"60px",height:"60px",backgroundColor: '#F3F8FF'}}
                              >
                                <img
                                  src={images.andoridicon}
                                  alt=''
                                  width={35}
                                  height={35}
                                />
                              </div>
                            <span className='fs-5 fw-bolder custom-font'>
                              Android Application Development
                            </span>
                            <span className='fs-6 fw-medium custom-roman-font custom-paragraph-color '>
                              As an experienced{' '}
                              <span className='fw-semibold'>
                                mobile software development company,
                              </span>{' '}
                              we craft innovative mobile app development
                              solutions that empower startups, enterprises,
                              global brands, and government organizations to
                              achieve their business goals.
                            </span>
                          </div>
                        </Col>
                        <Col
                          xl={7}
                          lg={7}
                          md={7}
                          sm={24}
                          xs={24}
                          className='d-flex justify-content-center align-items-center'
                        >
                          <div
                            style={{ backgroundColor: 'rgb(243, 248, 255)' }}
                            className='w-100 rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3'
                          >
                            <span className='fs-6 text-center'>
                              Talk To Our Experts In Android App Development
                            </span>
                            <button
                              className='get-in-touch-btn p-3 fs-6 fw-semibold rounded-5 w-75 border-0'
                              onClick={() => navigate(routes?.home?.contactus)}
                            >
                              Get in Touch
                            </button>
                          </div>
                        </Col>
                      </Row>
                    ),
                  },
                  {
                    label: 'IOS App Development',
                    key: '2',
                    children: (
                      <Row gutter={[12, 12]} justify={'space-between'}>
                        <Col xl={15} lg={15} md={15} sm={24} xs={24}>
                          <div className='d-flex flex-column gap-2'>
                          <div
                                className='p-2 rounded-2 d-flex justify-content-center align-items-center'
                                style={{width:"60px",height:"60px",backgroundColor: '#F3F8FF'}}
                              >
                                <img
                                  src={images.iosicon}
                                  alt=''
                                  width={35}
                                  height={35}
                                />
                              </div>
                            <span className='fs-5 fw-bolder custom-font'>
                              iOS Application Development
                            </span>
                            <span className='fs-6 fw-medium custom-roman-font custom-paragraph-color '>
                              Danip, an{' '}
                              <span className='fw-semibold'>
                                App building software company,
                              </span>{' '}
                              has expertise in building premium-quality iOS
                              applications. You can explore our iOS app
                              development service for expertly crafted,
                              user-friendly applications that enhance your
                              brand's digital presence & engage your audience
                              effectively.
                            </span>
                          </div>
                        </Col>
                        <Col
                          xl={7}
                          lg={7}
                          md={7}
                          sm={24}
                          xs={24}
                          className='d-flex justify-content-center align-items-center'
                        >
                          <div
                            style={{ backgroundColor: 'rgb(243, 248, 255)' }}
                            className='w-100 rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3'
                          >
                            <span className='fs-6 text-center'>
                              Talk To Our Experts In IOS App Development
                            </span>
                            <button
                              className='get-in-touch-btn p-3 fs-6 fw-semibold rounded-5 w-75 border-0'
                              onClick={() => navigate(routes?.home?.contactus)}
                            >
                              Get in Touch
                            </button>
                          </div>
                        </Col>
                      </Row>
                    ),
                  },
                  {
                    label: 'React Native App Development',
                    key: '3',
                    children: (
                      <Row gutter={[12, 12]} justify={'space-between'}>
                        <Col xl={15} lg={15} md={15} sm={24} xs={24}>
                          <div className='d-flex flex-column gap-2'>
                          <div
                                className='p-2 rounded-2 d-flex justify-content-center align-items-center'
                                style={{width:"60px",height:"60px",backgroundColor: '#F3F8FF'}}
                              >
                                <img
                                  src={images.reacticon}
                                  alt=''
                                  width={35}
                                  height={35}
                                />
                              </div>
                            <span className='fs-5 fw-bolder custom-font'>
                              React Native Application Development
                            </span>
                            <span className='fs-6 fw-medium custom-roman-font custom-paragraph-color '>
                              Leverage our React Native expertise to build apps
                              from scratch or integrate the framework seamlessly
                              into existing projects. We align the app with your
                              business objectives for optimal results.
                            </span>
                          </div>
                        </Col>
                        <Col
                          xl={7}
                          lg={7}
                          md={7}
                          sm={24}
                          xs={24}
                          className='d-flex justify-content-center align-items-center'
                        >
                          <div
                            style={{ backgroundColor: 'rgb(243, 248, 255)' }}
                            className='w-100 rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3'
                          >
                            <span className='fs-6 text-center'>
                              Talk To Our Experts In React Native App
                              Development
                            </span>
                            <button
                              className='get-in-touch-btn p-3 fs-6 fw-semibold rounded-5 w-75 border-0'
                              onClick={() => navigate(routes?.home?.contactus)}
                            >
                              Get in Touch
                            </button>
                          </div>
                        </Col>
                      </Row>
                    ),
                  },
                  {
                    label: 'Flutter App Development',
                    key: '4',
                    children: (
                      <Row gutter={[12, 12]} justify={'space-between'}>
                        <Col xl={15} lg={15} md={15} sm={24} xs={24}>
                          <div className='d-flex flex-column gap-2'>
                          <div
                                className='p-2 rounded-2 d-flex justify-content-center align-items-center'
                                style={{width:"60px",height:"60px",backgroundColor: '#F3F8FF'}}
                              >
                                <img
                                  src={images.flutterIcon}
                                  alt=''
                                  width={35}
                                  height={35}
                                />
                              </div>
                            <span className='fs-5 fw-bolder custom-font'>
                              Flutter Application Development
                            </span>
                            <span className='fs-6 fw-medium custom-roman-font custom-paragraph-color '>
                              We are an expert in developing custom mobile apps
                              which makes us a reliable{' '}
                              <span className='fw-semibold'>
                                app development company.
                              </span>
                              We offer seamless cross-platform engagement for
                              your business through our expert Flutter{' '}
                              <span className='fw-semibold'>
                                app development services.
                              </span>
                            </span>
                          </div>
                        </Col>
                        <Col
                          xl={7}
                          lg={7}
                          md={7}
                          sm={24}
                          xs={24}
                          className='d-flex justify-content-center align-items-center'
                        >
                          <div
                            style={{ backgroundColor: 'rgb(243, 248, 255)' }}
                            className='w-100 rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3'
                          >
                            <span className='fs-6 text-center'>
                              Talk To Our Experts In Flutter Application
                              Development
                            </span>
                            <button
                              className='get-in-touch-btn p-3 fs-6 fw-semibold rounded-5 w-75 border-0'
                              onClick={() => navigate(routes?.home?.contactus)}
                            >
                              Get in Touch
                            </button>
                          </div>
                        </Col>
                      </Row>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3  pt-4 pb-4 h-auto d-flex flex-column gap-3 '
          style={{ minHeight: 'auto' }}
        >
          <Row gutter={[12, 15]}>
            <Col
              xl={10}
              lg={11}
              md={13}
              sm={24}
              xs={24}
              className='w-100 h-auto pb-0 rounded-top-3 d-flex flex-column'
            >
              <span
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
                BENEFITS{' '}
              </span>
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                Business Benefits Custom made mobile- apps
              </h2>
            </Col>
            <Col
              xl={15}
              lg={15}
              md={17}
              sm={20}
              xs={24}
              className='w-100 h-auto  pt-0 rounded-top-3 d-flex flex-column gap-3'
              style={{ color: '#363E3E' }}
            >
              <p className='fs-6 custom-roman-font custom-paragraph-color'>
                We are a team of tech enthusiasts driven by passion, offering
                next-gen mobile app development services to startups,
                enterprises, global brands, and government organizations in
                Dubai.
              </p>
            </Col>
            <Col
              xl={9}
              lg={9}
              md={7}
              sm={24}
              xs={24}
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
                  handleScrollButtonClick('left', scrollContainerRef);
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
                  handleScrollButtonClick('right', scrollContainerRef);
                }}
              >
                <RightOutlined />
              </span>
            </Col>

            <Col span={24}>
              <div
                className='w-100 h-100 overflow-y-hidden challenges-card-container'
                ref={scrollContainerRef}
              >
                <div className='d-flex'>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_1}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>1</span>
                      <span className='fs-4 fw-bold'>
                        Enhanced Customer Engagement
                      </span>
                      <span className='card-description d-none'>
                        Our{' '}
                        <spam className='fw-semibold'>
                          app development agency
                        </spam>{' '}
                        provides a direct communication channel with your
                        customers. Additionally, we focus on personalized
                        experiences and build loyalty.
                      </span>
                    </div>
                  </Card>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_2}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>2</span>
                      <span className='fs-4 fw-bold'>
                        Improved Brand Visibility
                      </span>
                      <span className='card-description d-none'>
                        We aim to build well-designed apps that keep your brand
                        in front of users. It boosts your brand identity and
                        makes it easier for customers to connect with your
                        business.
                      </span>
                    </div>
                  </Card>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_3}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>3</span>
                      <span className='fs-4 fw-bold'>
                        Competitive Advantage
                      </span>
                      <span className='card-description d-none'>
                        We offer a unique mobile app that sets you apart from
                        competitors who may not offer the same level of
                        convenience and engagement.
                      </span>
                    </div>
                  </Card>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_4}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>4</span>
                      <span className='fs-4 fw-bold'>
                        Data Collection and Analysis
                      </span>
                      <span className='card-description d-none'>
                        Our{' '}
                        <span className='fw-semibold'>
                          ai app development services
                        </span>{' '}
                        provide valuable insights into customer behavior and
                        preferences through data collection, helping you make
                        informed business decisions.
                      </span>
                    </div>
                  </Card>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_5}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>5</span>
                      <span className='fs-4 fw-bold'>Revenue Generation</span>
                      <span className='card-description d-none'>
                        Apps can open new revenue streams through in-app
                        purchases, subscriptions, and targeted advertising.
                        Therefore, most businesses are inclined towards mobile
                        apps today.
                      </span>
                    </div>
                  </Card>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_6}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>6</span>
                      <span className='fs-4 fw-bold'>Scalability</span>
                      <span className='card-description d-none'>
                        We design Custom apps to scale as your business grows
                        while ensuring long-term relevance and adaptability.
                        Therefore, we are one of the best{' '}
                        <span className='fw-semibold'>
                          mobile application development companies.
                        </span>
                      </span>
                    </div>
                  </Card>
                  <Card className='challenges-card-with-bg   position-relative '>
                    <img
                      src={images?.card_7}
                      className='w-100 h-100 rounded-3'
                      alt=''
                    />
                    <div className='position-absolute top-0 text-white p-4  custom-font d-flex flex-column justify-content-between h-100'>
                      <span className='display-3 fw-bold'>7</span>
                      <span className='fs-4 fw-bold'>
                        Better Customer Support
                      </span>
                      <span className='card-description d-none'>
                        Our custom mobile app services not only increase your
                        business operations but also strengthens your connection
                        with customers. Therefore,{' '}
                        <span className='fw-semibold'>
                          app programming companies
                        </span>{' '}
                        are gaining enormous popularity due to their high demand
                        in today’s market.
                      </span>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='h-auto w-100 d-flex flex-column position-relative mobile-sub-image-page'>
          <img
            src={images?.mobileappdevelopemrntsubimg}
            className='w-100'
            style={{ minHeight: '30vh', height: 'auto' }}
            alt=''
          />
          <div className='position-absolute w-100 h-100 d-flex align-items-center'>
            <Row className='w-100 text-white p-xl-5 p-lg-5 p-md-5 p-sm-3 p-3'>
              <Col
                xl={12}
                lg={12}
                md={15}
                sm={20}
                xs={24}
                className='fw-bold heading-text d-flex flex-column gap-2'
              >
                Supercharge Your Business with Custom Mobile Application
                <button
                  className='get-in-touch-btn p-xl-3 p-lg-3 p-md-3 p-sm-2 p-2 fs-6 fw-semibold rounded-5 w-50'
                  onClick={() => navigate(routes?.home?.contactus)}
                >
                  Get in Touch
                </button>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className=' h-auto d-flex flex-column gap-5 p-xl-5 p-lg-5 p-md-5 p-sm-4 p-2 pt-5 background-color-light'
          style={{ height: 'auto' }}
        >
          <div className='d-flex flex-column w-100 gap-5 '>
            <Row className='w-100 '>
              <Col
                xl={15}
                lg={15}
                md={17}
                sm={20}
                xs={24}
                className='d-flex flex-column gap-3'
              >
                <span
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
                </span>

                <h1
                  className='fs-1 lh-sm custom-font'
                  style={{ fontWeight: 900 }}
                >
                  Stages in{' '}
                  <span className='custom-color'>
                    Mobile App Development Process.
                  </span>
                </h1>
                <p className='fs-6 fw-normal custom-paragraph-color custom-roman-font'>
                  We offer various IT transformation services to improve our
                  clients’ customer experience. You may select from our list of
                  services. You can also schedule a free consultation call where
                  we will thoroughly explain to you about each service and how
                  your they will digitally transform your organization.
                </p>
              </Col>
            </Row>
            <Row gutter={[12, 15]} justify={'center'}>
              <Col xl={4} lg={4} md={8} sm={12} xs={24}>
                <div className='w-100 d-xl-block d-lg-block d-md-flex d-sm-block d-flex gap-3'>
                  <div
                    className='border p-3  custom-step-icon rounded-circle d-flex justify-content-center align-items-center'
                    style={{ width: '70px', height: '70px' }}
                  >
                    <img src={images?.ideation} width={30} height={30} alt='' />
                  </div>
                  <div>
                    <div className='custom-color fw-bold fs-6 custom-font'>
                      Step 1
                    </div>
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
                </div>
              </Col>
              <Col xl={4} lg={4} md={8} sm={12} xs={24}>
                <div className='w-100 d-xl-block d-lg-block d-md-flex d-sm-block d-flex gap-3'>
                  <div
                    className='border p-3  custom-step-icon rounded-circle d-flex justify-content-center align-items-center mb-3'
                    style={{ width: '70px', height: '70px' }}
                  >
                    <img src={images?.design} width={30} height={30} alt='' />
                  </div>
                  <div>
                    <div className='custom-color fw-bold fs-6 custom-font'>
                      Step 2
                    </div>
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
                </div>
              </Col>
              <Col xl={5} lg={5} md={8} sm={12} xs={24}>
                <div className='w-100 d-xl-block d-lg-block d-md-flex d-sm-block d-flex gap-3'>
                  <div
                    className='border p-3  custom-step-icon rounded-circle d-flex justify-content-center align-items-center mb-3'
                    style={{ width: '70px', height: '70px' }}
                  >
                    <img
                      src={images?.developement}
                      width={30}
                      height={30}
                      alt=''
                    />
                  </div>
                  <div>
                    <div className='custom-color fw-bold fs-6 custom-font'>
                      Step 3
                    </div>
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
                </div>
              </Col>
              <Col xl={5} lg={5} md={8} sm={12} xs={24}>
                <div className='w-100 d-xl-block d-lg-block d-md-flex d-sm-block d-flex gap-3'>
                  <div
                    className='border p-3  custom-step-icon rounded-circle d-flex justify-content-center align-items-center mb-3'
                    style={{ width: '70px', height: '70px' }}
                  >
                    <img src={images?.testing} width={30} height={30} alt='' />
                  </div>
                  <div>
                    <div className='custom-color fw-bold fs-6 custom-font'>
                      Step 4
                    </div>
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
                </div>
              </Col>
              <Col xl={5} lg={5} md={8} sm={12} xs={24}>
                <div className='w-100 d-xl-block d-lg-block d-md-flex d-sm-block d-flex gap-3'>
                  <div
                    className='border p-3  custom-step-icon rounded-circle d-flex justify-content-center align-items-center mb-3'
                    style={{ width: '70px', height: '70px' }}
                  >
                    <img
                      src={images?.deployment}
                      width={30}
                      height={30}
                      alt=''
                    />
                  </div>
                  <div>
                    <div className='custom-color fw-bold fs-6 custom-font'>
                      Step 5
                    </div>
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
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className='p-xl-5 p-lg-5 p-md-5 p-sm-4 p-3 pt-4 pb-4  h-100'
          style={{ minHeight: 'auto' }}
        >
          <Row gutter={[12, 15]} className='h-100'>
            <Col
              xl={15}
              lg={15}
              md={15}
              sm={24}
              xs={24}
              className='d-flex flex-column gap-0 feturing-container'
            >
              <span
                className='fs-2 fw-bold lh-sm custom-font'
                style={{ color: '#363E3E' }}
              >
                What Makes Us Your First Choice?
              </span>
              <span className='fs-6 custom-roman-font custom-paragraph-color mt-3'>
                As one of the top mobile app development companies, our
                well-versed taem not only the services but also delivers
                passion, dedication, and seamless experience. Have a look and
                know what sets us apart from others.
              </span>
              <Row gutter={[12, 12]} className='mt-3'>
                <Col span={24} className='border-bottom'>
                  <ul>
                    <li className='fw-medium'>
                      7+ Years Of Industry Experience
                    </li>
                  </ul>
                </Col>
                <Col span={24} className='border-bottom'>
                  <ul>
                    <li className='fw-medium'>Quality Assurance</li>
                  </ul>
                </Col>
                <Col span={24} className='border-bottom'>
                  <ul>
                    <li className='fw-medium'>Smooth Project Management</li>
                  </ul>
                </Col>
                <Col span={24} className='border-bottom'>
                  <ul>
                    <li className='fw-medium'>
                      Highly Professional Developers
                    </li>
                  </ul>
                </Col>
                <Col span={24} className='border-bottom'>
                  <ul>
                    <li className='fw-medium'>
                      End To End Development Services
                    </li>
                  </ul>
                </Col>
                <Col span={24} className='border-bottom'>
                  <ul>
                    <li className='fw-medium'>Client Centric Approach</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col
              xl={9}
              lg={9}
              md={9}
              sm={24}
              xs={24}
              className='overflow-hidden'
            >
              <img
                src={images.lifestyle_businessman}
                alt=''
                width={'100%'}
                height={'100%'}
                loading='lazy'
              />
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
              <h2
                className=' custom-font'
                style={{ fontWeight: 700, color: '#363E3E' }}
              >
                Industries
                <span style={{ color: '#184D98' }}> We've Transformed </span>
              </h2>
            </Col>
            <Col
              span={24}
              className='w-100 h-auto p-4 pt-0 rounded-top-3 d-flex flex-column gap-3'
            >
              <Row gutter={[12,15]}>
                <Col xl={10} lg={12} md={12} sm={24} xs={24}>
                  <p className='fw-medium'>
                    Our mobile application development services at Danip
                    Technologies in Dubai have led to transformative changes
                    across industries.
                  </p>
                </Col>
                <Col
                  xl={12} lg={12} md={12} sm={24} xs={24}
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
                      handleScrollButtonClick(
                        'left',
                        scrollContainerRefindustries
                      );
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
                      handleScrollButtonClick(
                        'right',
                        scrollContainerRefindustries
                      );
                    }}
                  >
                    <RightOutlined />
                  </span>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <div
                className='w-100 h-100 overflow-y-hidden challenges-card-container'
                ref={scrollContainerRefindustries}
              >
                <div className='d-flex'>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.healthcarecard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>Healthcare</h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        We offer a health monitoring and management mobile apps 
                        that are vital for patients to monitor and manage their
                        health more efficiently at any time and anywhere.
                        Additionally, it includes the track record of Blood
                        pressure, heart rate, blood glucose level and much more.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.realstatecard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>
                        Real Estate
                      </h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        Our mobile apps for real estate consist of convenient
                        messenger and the ability to make calls, the app
                        provides detailed information about each property like
                        photos, videos,  location, brief description and a
                        virtual tour.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.insurancecard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>Insurance</h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        We also aid insurance agencies with our mobile apps
                        include allowing users to manage their policies, upload
                        documents, deposit premiums, and file claims & track
                        them in one place. We provide integration of AI, IoT,
                        and NLP for better customer experience
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.educationcard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>Education</h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        Mobile appications are getting immense prominence in
                        education sector. We provide mobile apps that allow
                        users to learn at their own pace. Which includes class
                        recording, online classes, mock tests, excel or sheet
                        automation. We built fast & user friendly apps available
                        for both IOS and android.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.ecommeracecard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>E-commerce</h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        Danip technologies offer you your own custom e-commerce
                        app to make you stay connected with your consumers.
                        Moreover, you can get orders with hassle free processing
                        and delivery partner options. Scalable, fast &
                        user-friendly options are available.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.foodcard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>
                        Food and Bevrages
                      </h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        Our team of experts helps in creating customized apps to
                        improve the customer experience by providing digital
                        menus and brochures and also letting customers order
                        food and get it delivered to their doorsteps.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.mediacard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>Media</h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        We have a team of developers who have experience in
                        building customized news apps. Get yours with endless
                        integrations and unlimited automation options from our
                        store.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.retailcard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>Retail</h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        You can stay connected with your audience at your own
                        mobile app platform. Our apps allows you to send custom
                        notification, automate subscriptions, choose from
                        various delivery partners. Etc…
                      </p>
                    </div>
                  </Card>
                  <Card
                    className='challenges-card-with-img p-3  '
                    cover={
                      <img
                        src={images?.fitnesscard}
                        alt=''
                        className='rounded-3'
                        style={{ height: '200px' }}
                      />
                    }
                  >
                    <div className='h-100 d-flex flex-column gap-2 mt-2'>
                      <h5 className='custom-black-color fw-bold'>
                        Fitness & Wellness
                      </h5>
                      <p
                        className=' custom-paragraph-color fw-medium'
                        style={{ fontSize: '14px' }}
                      >
                        Get your own customized health & fitness app to stay
                        connected with your client base. Our apps have
                        facilities such as recorded sessions, booking
                        appointment, Live classes.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='pb-5'>
          <Row className='position-relative d-flex justify-content-center align-items-center'>
            <Divider />
            <div className=' fs-6 position-absolute custom-black-color fw-medium   d-flex justify-content-center align-items-center rounded-5 p-3 pt-2 pb-2  bg-white custom-font'>
              TECHNOLOGY STACK
            </div>
          </Row>
          <div className='w-100  p-3 overflow-hidden'>
            <div className='d-flex gap-5 align-items-center technology-stack-container  w-100'>
              <img
                src={images.reactLogo}
                width={'39px'}
                height={'41px'}
                alt=''
              />
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
              <img
                src={images.javaLogo}
                width={'50px'}
                height={'41px'}
                alt=''
              />
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
              <img
                src={images.swiftLogo}
                width={'95px'}
                height={'41px'}
                alt=''
              />
              <img
                src={images.obj_cLogo}
                width={'39px'}
                height={'41px'}
                alt=''
              />
              <img
                src={images.reduxLogo}
                width={'39px'}
                height={'41px'}
                alt=''
              />
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

        <div className='consultation-container-mobile-devepment w-100 text-white p-2 pt-4 pb-4'>
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
                            // style={{ backgroundColor: '#e9464a' }}
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

export default MobileAppDevelopement;
