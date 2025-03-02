import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Card, Col, Input, Pagination, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { images } from '../controller/images';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const BlogDashboard = () => {
  const [scroll, setScroll] = useState(false);
  const [currentfilter, setCurrentFilter] = useState('all-post');
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

  const handleFilter = (item) => {
    setCurrentFilter(item);
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
    <div className=' w-100'>
      <div className='w-100 position-relative'>
        <Navbar scroll={scroll} />
        <div className='w-100 d-flex justify-content-start align-items-center'>
          <div className='p-0 m-0 w-100  navbar-container blog-filter-container'>
            <div className="w-100 p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 blog-filter-container-div">
              <div className='w-100 overflow-y-auto'>
                <ul
                  className='list-unstyled  d-flex w-100 gap-5   custon-roman-font blog-header'
                  style={{ fontSize: '14px', fontWeight: 700 }}
                >
                  <li
                    onClick={() => handleFilter('all-post')}
                    className={`${
                      currentfilter === 'all-post'
                        ? 'opacity-100 active'
                        : ' opacity-75'
                    }`}
                  >
                    ALL POST{' '}
                  </li>
                  <li
                    onClick={() => handleFilter('it-outsourcing')}
                    className={`${
                      currentfilter === 'it-outsourcing'
                        ? 'opacity-100 active'
                        : ' opacity-75'
                    }`}
                  >
                    IT OUTSOURCING{' '}
                  </li>
                  <li
                    onClick={() => handleFilter('it-services')}
                    className={`${
                      currentfilter === 'it-services'
                        ? 'opacity-100 active'
                        : ' opacity-75'
                    }`}
                  >
                    IT SERVICES
                  </li>
                  <li
                    onClick={() => handleFilter('emerging-technologies')}
                    className={`${
                      currentfilter === 'emerging-technologies'
                        ? 'opacity-100 active'
                        : ' opacity-75'
                    }`}
                  >
                    EMERGING TECHNOLOGIES
                  </li>
                  <li
                    onClick={() => handleFilter('ai')}
                    className={`${
                      currentfilter === 'ai'
                        ? 'opacity-100 active'
                        : ' opacity-75'
                    }`}
                  >
                    AI
                  </li>

                  <li
                    onClick={() => handleFilter('digital-transformation')}
                    className={`${
                      currentfilter === 'digital-transformation'
                        ? 'opacity-100 active'
                        : ' opacity-75'
                    }`}
                  >
                    DIGITAL TRANSFORMATOIN{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3'>
              <Row gutter={[12,15]} className="heading-searchbar-container justify-content-between">
                <Col xl={12} lg={12} md={12} sm={24} xs={24} className='d-flex align-items-center'>
                  <span
                    className='custom-font fw-bolder '
                    style={{ fontSize: '48px', color: '#363E3E' }}
                  >
                    Latest
                  </span>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24} className='d-flex align-items-center'>
                  <Input.Search
                    className='search-bar'
                    placeholder='Search Here'
                    enterButton='Search'
                    prefix={<SearchOutlined style={{ color: '#9B9F9F' }} />}
                  />
                </Col>
              </Row>
              <Row
                gutter={[12, 15]}
                className='blog-home-page-card border border-1 mt-4 bg-light'
              >
                <Col xl={11} lg={11} md={11} sm={24} xs={24} className=' '>
                  <img
                    src={images.demoblogimg}
                    className=' w-100 h-100'
                    alt=''
                  />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} className=' '>
                  <div className='d-flex flex-column gap-3 p-3 pb-0'>
                    <span>
                      <span className='custome-background-color p-2 rounded-2 custom-color custom-roman-font blog-type'>
                        IT SERVICES
                      </span>
                    </span>
                    <Row>
                      <Col xl={20} lg={20} md={22} sm={24} xs={24}>
                        <span className='fw-bold custom-font fs-4'>
                          How is AI-powered Digital Transformation reshaping
                          business growth?
                        </span>
                      </Col>
                    </Row>
                    <p className='custom-paragraph-color custom-roman-font blog-discription'>
                      With the power of digital transformation and artificial
                      intelligence, several organizations have already enhanced
                      their efficacy and agility through enhanced focus on how
                      they generate value through digital technologies.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Row gutter={[15, 15]} className='w-100 p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 bg-light'>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              className='w-100 h-auto p-xl-3 p-lg-3 p-md-3 p-sm-3 p-3'
              style={{ cursor: 'pointer' }}
            >
              <img src={images.demoblogimg} className='w-100 h-100' alt='' />

              <div className='d-flex flex-column gap-2 mt-3 w-100'>
                <span>
                  <span
                    className='custome-background-color p-2 fw-semibold rounded-2 custom-color custom-roman-font'
                    style={{ fontSize: '12px' }}
                  >
                    DIGITAL TRANSFORMATION
                  </span>
                </span>
                <h5 className='custom-font  fw-bold lh-base blog-card-title'>
                  How is AI-powered Digital Transform....
                </h5>
                <p className='custom-paragraph-color custom-roman-font m-0'>
                  With the power of digital transformation and artificial
                  intelligence, several organizations have already enhanced
                  their efficacy and agility through enhanced focus on how they
                  generate value through digital technologies.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <div className='w-100  p-4  border-bottom'>
          <Pagination
            className='w-100 d-flex justify-content-center custom-roman-font fw-semibold custom-paragraph-color fs-5 custom-pagination'
            total={10}
            current={1}
            pageSize={8}
            showSizeChanger={false}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
          />
        </div>
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default BlogDashboard;
