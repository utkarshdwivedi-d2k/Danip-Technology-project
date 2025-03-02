import React, { useRef } from 'react';
import { Carousel, Row, Col } from 'antd';
import { images } from "../controller/images";

const CarouselFortechnologystack = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };
  return (
    <div className='carousel-container'>
      <Row justify={'center'} align={'middle'}>
        <Col span={1} className='d-flex justify-content-center'>
          <img
            src={images.left}
            alt=''
            width={50}
            height={50}
            onClick={handlePrevClick}
            style={{ cursor: 'pointer' }}
          />
        </Col>
        <Col span={22}>
          <Carousel
            ref={carouselRef}
            autoplay
            dots={true}
            className='tech-carousel'
          >
            <div className='w-100'>
              <Row
                className='w-100 d-flex justify-content-center'
                gutter={[15, 15]}
              >
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.reactLogo} alt='' />
                </Col>

                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.anguralLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.swiftuiLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.flutterLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.swiftlintLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.rxSwiftLogo} alt='' />
                </Col>
              </Row>
            </div>
            <div className='w-100'>
              <Row
                className='w-100 d-flex justify-content-center'
                gutter={[17, 17]}
              >
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.kotlinLogo} alt='' />
                </Col>

                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.javaLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.gradleLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.jetpackLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.swiftLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.obj_cLogo} alt='' />
                </Col>
              </Row>
            </div>
            <div className='w-100'>
              <Row
                className='w-100 d-flex justify-content-center'
                gutter={[15, 15]}
              >
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.reduxLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.netcoreLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.microsoft_netLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.xamarinLogo} alt='' />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={8}
                  xs={12}
                  className='d-flex align-items-center justify-content-center'
                >
                  <img src={images.asp_netLogo} alt='' />
                </Col>
              </Row>
            </div>
          </Carousel>
        </Col>
        <Col span={1} className='d-flex justify-content-center'>
          <img
            src={images.right}
            alt=''
            width={50}
            height={50}
            onClick={handleNextClick}
            style={{ cursor: 'pointer' }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CarouselFortechnologystack;

