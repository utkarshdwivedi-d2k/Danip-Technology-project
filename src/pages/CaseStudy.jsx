import React, { useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import {
  Col,
  Row,
} from 'antd';
import Footer from '../components/Footer';
import warehousemanagement from '../assets/images/blogImg/warehousemanagement.png';
import forexcurrency from '../assets/images/blogImg/forexcurrency.png';
import insuranceindustry from '../assets/images/blogImg/Insuranceindustry.png';
import virtualcoin from '../assets/images/blogImg/virtualcoin.png';
import { Helmet } from "react-helmet";
import { routes } from '../controller/routes';
import { useNavigate } from 'react-router-dom';








const CaseStudy = () => {
  const [scroll, setScroll] = useState(false);
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
    <div className=' w-100 case-study'>
      <div className='w-100 position-relative'>
        <Navbar scroll={scroll} />
      </div>
      <div className='w-100 d-flex '>
        <div className='p-0 m-0 w-100  navbar-container'>
          <Row justify={'center'} className='m-0 p-0'>
            <Col
              xl={13}
              lg={13}   
              md={17}
              sm={20}
              xs={22}
              className='p-0 m-0 text-center d-flex flex-column gap-3'
            >
              <span className='custom-font case-study-heading'>
                Browse Through Our Case Studies
              </span>
              <span className='custom-font heading-paragraph'>
                Lorem ipsum dolor sit amet consectetur. Porta sed enim cras et.
                Luctus commodo semper mauris et tellus elit malesuada nisl nibh.
                Ullamcorper sit nec nisl fusce pulvinar malesuada cras ac
                aliquet. Tempus ultrices pellentesque cras nec eget integer
              </span>
            </Col>
          </Row>
        </div>
      </div>  

      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pt-4 pb-4 h-auto'>
        <Row gutter={[20, 15]} className='casestudy-card-container p-2 justify-content-between '>
          <Col xl={11} lg={11} md={11} sm={24} xs={24} className=''>
            <img src={warehousemanagement} className='w-100 h-100 rounded-start-3' alt='' />
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className=''>
            <div className='d-flex flex-column gap-1  pb-0'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font custom-color fw-medium'
              >
                <div
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                London{' '}
              </span>
              <Row gutter={[12, 15]}>
                <Col xl={20} lg={20} md={22} sm={24} xs={24}>
                  <span className='fw-bold custom-font fs-4'>
                    Al-based Warehouse Management Solution
                  </span>
                </Col>
                <Col span={24}>
                  <p className='custom-paragraph-color custom-font blog-discription'>
                    Enhancing operations with advanced anomaly detection
                    techniques and elevating efficiency by swiftly identifying and
                    addressing irregularities.

                  </p>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  className='percentage-card d-flex flex-column gap-2 custom-color  '
                >
                  <span className='percentage custom-font'>35%</span>
                  <span className='percentage-text custom-font'>
                    Efficiency Increased
                  </span>
                </Col>
                <Col
                  span={8}
                  className='percentage-card d-flex flex-column gap-2 p-1 custom-color'
                >
                  <span className='percentage custom-font'>40%</span>
                  <span className='percentage-text custom-font'>
                    Increased Image Detection Accuracy
                  </span>
                </Col>
                <Col xl={9} lg={9} md={10} sm={15} xs={15}>
                  <button className='get-in-touch-btn heading-btn w-100'
                   onClick={() => navigate(routes?.home?.caseStudy?.aiwarehouse)}>
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>


      
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pt-4 pb-4 h-auto'>
        <Row gutter={[20, 15]} className='casestudy-card-container p-2 justify-content-between'>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className='order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2'>
            <div className='d-flex flex-column gap-1  pb-0'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font custom-color fw-medium'
              >
                <div
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                London{' '}
              </span>
              <Row gutter={[12, 15]}>
                <Col xl={20} lg={20} md={22} sm={24} xs={24}>
                  <span className='fw-bold custom-font fs-4'>
                    Forex Currency Wallet Software Solution
                  </span>
                </Col>
                <Col span={24}>
                  <p className='custom-paragraph-color custom-font blog-discription'>
                    Enhancing operations with advanced anomaly detection
                    techniques and elevating efficiency by swiftly identifying and
                    addressing irregularities.
                  </p>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  className='percentage-card d-flex flex-column gap-2 custom-color  '
                >
                  <span className='percentage custom-font'>48%</span>
                  <span className='percentage-text custom-font'>
                    Accuracy Increased
                  </span>
                </Col>
                <Col
                  span={8}
                  className='percentage-card d-flex flex-column gap-2 p-1 custom-color'
                >
                  <span className='percentage custom-font'>24%</span>
                  <span className='percentage-text custom-font'>
                    Image Detection Accuracy
                  </span>
                </Col>
                <Col xl={9} lg={9} md={10} sm={15} xs={15}>
                  <button className='get-in-touch-btn heading-btn w-100'
                   onClick={() => navigate(routes?.home?.caseStudy?.forexcurrency)}>
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={11} lg={11} md={11} sm={24} xs={24} className='order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1'>
            <img src={forexcurrency} className='w-100 h-100 rounded-end-3' alt='' />
          </Col>
        </Row>
      </div>
      
      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pt-4 pb-4 h-auto'>
        <Row gutter={[20, 15]} className='casestudy-card-container p-2 justify-content-between'>
          <Col xl={11} lg={11} md={11} sm={24} xs={24} className=' '>
            <img src={insuranceindustry} className='w-100 h-100 rounded-start-3' alt='' />
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className=' '>
            <div className='d-flex flex-column gap-1  pb-0'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font custom-color fw-medium'
              >
                <div
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                UNITED STATES{' '}
              </span>
              <Row gutter={[12, 15]}>
                <Col xl={20} lg={20} md={22} sm={24} xs={24}>
                  <span className='fw-bold custom-font fs-4'>
                    Development of integrated Tools

                  </span>
                </Col>
                <Col span={24}>
                  <p className='custom-paragraph-color custom-font blog-discription'>
                  Transforming the Surplus Lines Insurance Landscape by
                  implementing innovative technologies and strategic
                  enhancements for industry-wide progress.
                  </p>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  className='percentage-card d-flex flex-column gap-2 custom-color  '
                >
                  <span className='percentage custom-font'>35%</span>
                  <span className='percentage-text custom-font'>
                    Efficiency Increased
                  </span>
                </Col>
                <Col
                  span={8}
                  className='percentage-card d-flex flex-column gap-2 p-1 custom-color'
                >
                  <span className='percentage custom-font'>24%</span>
                  <span className='percentage-text custom-font'>
                    Image Detection Accuracy
                  </span>
                </Col>
                <Col xl={9} lg={9} md={10} sm={15} xs={15}>
                  <button className='get-in-touch-btn heading-btn w-100'
                  onClick={() => navigate(routes?.home?.caseStudy?.Development)}>
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className='p-xl-5 p-lg-5 p-md-4 p-sm-3 p-3 pt-4 pb-4 h-auto'>
        <Row gutter={[20, 15]} className='casestudy-card-container p-2 justify-content-between'>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className='order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2 '>
            <div className='d-flex flex-column gap-1  pb-0'>
              <span
                className='d-flex align-items-center gap-2 fs-6 custom-roman-font custom-color fw-medium'
              >
                <div
                  style={{
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#184D98',
                  }}
                ></div>{' '}
                London{' '}
              </span>
              <Row gutter={[12, 15]}>
                <Col xl={20} lg={20} md={22} sm={24} xs={24}>
                  <span className='fw-bold custom-font fs-4'>
                    Innovative B2B Collaboration Platform
                  </span>
                </Col>
                <Col span={24}>
                  <p className='custom-paragraph-color custom-font blog-discription'>
                  Empowering the European Fashion Retail Industry with
                  innovative solutions, advanced technologies, and strategic
                  insights
                    
                    
                  </p>
                </Col>
                <Col
                  xl={8}
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  className='percentage-card d-flex flex-column gap-2 custom-color  '
                >
                  <span className='percentage custom-font'>35%</span>
                  <span className='percentage-text custom-font'>
                    Efficiency Increased
                  </span>
                </Col>
                <Col
                  span={8}
                  className='percentage-card d-flex flex-column gap-2 p-1 custom-color'
                >
                  <span className='percentage custom-font'>24%</span>
                  <span className='percentage-text custom-font'>
                    Image Detection Accuracy
                  </span>
                </Col>
                <Col xl={9} lg={9} md={10} sm={15} xs={15}>
                  <button className='get-in-touch-btn heading-btn w-100'
                  onClick={() => navigate(routes?.home?.caseStudy?.Innovative)}>
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={11} lg={11} md={11} sm={24} xs={24} className=' order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1'>
            <img src={virtualcoin} className='w-100 h-100 rounded-end-3' alt='' />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>

    </div>
  );
};

export default React.memo(CaseStudy);
