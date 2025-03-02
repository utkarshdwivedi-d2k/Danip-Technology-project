import React, { useRef } from 'react';
import { Carousel, Row, Col } from 'antd';

import leslie from '../assets/images/clientimg/leslie.png';
import nathan from '../assets/images/clientimg/nathan.png';
import venkata from '../assets/images/clientimg/venkata.png';

import right from '../assets/images/right.png';
import left from '../assets/images/left.png';
import quote from '../assets/images/quote.png';
export const TestimonialCarousel = () => {
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
            src={left}
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
            dots={false}
            effect='fade'
            autoplay={false}
            autoplaySpeed={5000}
          >
            <div className=' w-100  text-center d-flex justify-content-center backgroud-img'>
            <Row className='w-100 justify-content-center'>
                <Col
                  xl={12}
                  lg={12}
                  md={15}
                  sm={20}
                  xs={24}
                  className='d-flex flex-column custom-roman-font'
                >
                   <div className='d-flex gap-4 align-items-center justify-content-center'>
                  <img
                    src={venkata}
                    className='image-container d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none'
                    alt=''
                    loading="lazy"
                  />
                  <div className='position-relative'>
                    <img
                      src={leslie}
                      className='image-container active-img'
                      alt=''
                      loading="lazy"
                    />
                    <div className='position-absolute quote-img-container'>
                      <img src={quote} alt='' width={40} height={40} loading="lazy" />
                    </div>
                  </div>
                  <img
                    src={nathan}
                    className='image-container d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none'
                    alt=''
                    loading="lazy"
                  />
                </div>
                <p className='mt-5 fw-medium fs-5'>
                  "The work was delivered ahead of time and innumerable problems
                  solved. They have already been awarded the next phase of this
                  project."
                </p>
                <span className='mt-4 fw-bold fs-4'>Leslie.G</span>
                <span className='mt-2 fs-6 fw-semibold'>
                  Mercedes-Benz Retail
                </span>
                <span className='fw-semibold'>Network Dubai</span>
                </Col>
              </Row>
            </div>
  
            <div className=' w-100  text-center d-flex justify-content-center backgroud-img'>
              <Row className='w-100 justify-content-center'>
                <Col
                  xl={12}
                  lg={12}
                  md={15}
                  sm={20}
                  xs={24}
                  className='d-flex flex-column custom-roman-font'
                >
                  <div className='d-flex gap-4 align-items-center justify-content-center'>
                    <img
                      src={leslie}
                      className='image-container d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none'
                      alt=''
                    />
                    <div className='position-relative'>
                      <img
                        src={nathan}
                        className='image-container active-img'
                        alt=''
                      />
                      <div className='position-absolute quote-img-container'>
                        <img src={quote} alt='' width={40} height={40} />
                      </div>
                    </div>
                    <img
                      src={venkata}
                      className='image-container d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none'
                      alt=''
                    />
                  </div>
                  <p className='mt-5 fw-medium fs-5'>
                    "Excellent work as always! My project is very complex and he
                    is quick to dig in the code and get the modifications needed
                    to be done. Thank you very much!"
                  </p>
                  <span className='mt-4 fw-bold fs-4'>Nathan.W</span>
                  <span className='fw-semibold'>Confidential</span>
                </Col>
              </Row>
            </div>

            <div className=' w-100  text-center d-flex justify-content-center backgroud-img'>
            <Row className='w-100 justify-content-center'>
                <Col
                  xl={12}
                  lg={12}
                  md={15}
                  sm={20}
                  xs={24}
                  className='d-flex flex-column custom-roman-font'
                >
                 <div className='d-flex gap-4 align-items-center justify-content-center'>
                  <img
                    src={nathan}
                    className='image-container d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none '
                    alt=''
                  />
                  <div className='position-relative'>
                    <img
                      src={venkata}
                      className='image-container active-img'
                      alt=''
                    />
                    <div className='position-absolute quote-img-container'>
                      <img src={quote} alt='' width={40} height={40} />
                    </div>
                  </div>
                  <img
                    src={leslie}
                    className='image-container d-xl-flex d-lg-flex d-md-flex d-sm-flex d-none'
                    alt=''
                  />
                </div>
                <p className='mt-5 fw-medium fs-5'>
                  "Had a great experience working with Mr. bean (developer
                  name). He has helped above and beyond what we agreed for.
                  Excellent.!!"
                </p>
                <span className='mt-4 fw-bold fs-4'>Venkata Venu.G</span>
                <span className='mt-2 fs-6 fw-semibold'>
                  Technocrat Solutions-
                </span>
                <span className='fw-semibold'>USA</span>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Col>
        <Col span={1} className='d-flex justify-content-center'>
          <img
            src={right}
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
