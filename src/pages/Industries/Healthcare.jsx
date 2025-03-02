import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Col, Row } from "antd";
import { Helmet } from "react-helmet";

const Healthcare = () => {
  const [scroll, setScroll] = useState(false);

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
            xl={13}
            lg={15}
            md={17}
            sm={17}
            xs={24}
            className='d-flex flex-column gap-lg-4 gap-xl-4 gap-md-3 gap-sm-2 gap-2'
          >
            <span className='lh-sm custom-font aboutus-heading custom-color'>
            Healthcare
            </span>
          </Col>
        </Row>
    
      </div>
    </div>
    </div>
  );
};

export default Healthcare;

