import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Card, Button, Row, Col } from 'antd';
import insuranceindustry from '../assets/images/blogImg/Insuranceindustry.png';
import ai from '../assets/images/blogImg/ai.png';
import aiforsmallbusiness from '../assets/images/blogImg/aiforsmallbusiness.png';
import aiwithbussinuessgrowth from '../assets/images/blogImg/aiwithbussinuessgrowth.png';
import escrowplatform from '../assets/images/blogImg/escrowplatform.png';
import forexcurrency from '../assets/images/blogImg/forexcurrency.png';
import virtualcoin from '../assets/images/blogImg/virtualcoin.png';
import warehousemanagement from '../assets/images/blogImg/warehousemanagement.png';
import arrowIcon from '../assets/images/right-arrow.png';
import right from '../assets/images/right.png';
import left from '../assets/images/left.png';
const items = [
  {
    id: 1,
    title: 'AI-based Warehouse Mgmt.',
    type: 'Case Study',
    discription:
      'Focused on quality first approach we have experience in working with various industry leaders and tech giants',
    image: warehousemanagement,
  },
  {
    id: 2,
    title: 'AI for small businesses: Practical applications and...',
    type: 'Blog',
    discription:
      'If you’re tired of spending long hours on redundant tasks for your small business firm, it’s time to',
    image: aiforsmallbusiness,
  },
  {
    id: 3,
    title: 'Devt. of Integrated Tools',
    type: 'Case Study',
    discription:
      'Successful collaboration with a US vendor in the surplus lines insurance industry, creating a Broker and Agent Management System....',
    image: insuranceindustry,
  },
  {
    id: 4,
    title: 'How is AI-powered Digital Transformation reshaping business...',
    type: 'Blog',
    discription:
      'With the power of digital transformation and artificial intelligence, several organizations have already enhanced...',
    image: aiwithbussinuessgrowth,
  },
  {
    id: 5,
    title: 'How Artificial Intelligence Can Transform Businesses?',
    type: 'Blog',
    discription:
      'Predicting the future isn’t magic; it’s artificial intelligence” This statement clearly defines the...',
    image: ai,
  },
  {
    id: 6,
    title: 'Forex Currency Wallet',
    type: 'Case Study',
    discription:
      'It is an all-in-one platform for foreign currency exchange, online wallets, forex, transfers, and deal bookings. With integrated security....',
    image: forexcurrency,
  },
  {
    id: 7,
    title: 'Virtual Coin & QR Processing',
    type: 'Case Study',
    discription:
      'Developed a mobile app for a fitness club chain, enabling QR code payments for memberships and products.',
    image: virtualcoin,
  },
  {
    id: 8,
    title: 'Escrow Platform',
    type: 'Case Study',
    discription:
      'An online platform for secure construction project management, offering features such as construction milestones, payment management, and escrow services. ',
    image: escrowplatform,
  },
];

const CarouselWithResponsiveItems = () => {
  const [numItemsPerSlide, setNumItemsPerSlide] = useState(3);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setNumItemsPerSlide(3);
      } else if (screenWidth >= 992) {
        setNumItemsPerSlide(3);
      } else if (screenWidth >= 768) {
        setNumItemsPerSlide(2);
      } else {
        setNumItemsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += numItemsPerSlide) {
    groupedItems.push(items.slice(i, i + numItemsPerSlide));
  }

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
          <Carousel ref={carouselRef} dots={false}>
            {groupedItems.map((group, index) => (
              <div className='w-100' key={index}>
                <Row className='w-100' gutter={[15, 15]}>
                  {group.map((item) => (
                    <Col span={24 / numItemsPerSlide} key={item.id}>
                      <Card style={{ height: 570 }}>
                        <div className='h-100'>
                          <Row className='h-100'>
                            <Col span={24}>
                              <img
                                alt='example'
                                className='w-100 rounded-top-3'
                                height={253}
                                src={item?.image}
                                loading='lazy'
                              />
                            </Col>
                            <Col span={24}>
                              <div className='p-4 pb-0 d-flex flex-column gap-3'>
                                <div>
                                  <span className='custom-background-color p-2 fw-bold fs-6 rounded-2 custom-color custom-roman-font'>
                                    {item?.type}
                                  </span>
                                </div>
                                <span
                                  className='fs-4 custom-font ellipsis'
                                  style={{ fontWeight: 700 }}
                                >
                                  {item?.title}
                                </span>
                                <p className='fs-6 m-0 custom-roman-font ellipsis'>
                                  {item?.discription}
                                </p>
                              </div>
                            </Col>
                            <Col
                              span={24}
                              className='d-flex align-items-center m-lg-3'
                            >
                              <Button
                                type='text'
                                className='blog-btn w-auto d-flex justify-content-center align-items-center gap-3 fs-6 rounded-5 custom-color custom-roman-font'
                                style={{
                                  letterSpacing: '0.25em',
                                  fontWeight: 700,
                                }}
                              >
                                {item?.type === 'Blog'
                                  ? 'View Full Blog'
                                  : 'View Case Study'}
                                <img
                                  src={arrowIcon}
                                  alt=''
                                  style={{ width: '30px', height: '20px' }}
                                />
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
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

export default CarouselWithResponsiveItems;
