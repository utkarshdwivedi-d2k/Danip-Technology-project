import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Input,
  Row,
} from 'antd';
import {
  CommentOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { images } from '../controller/images';
import Footer from '../components/Footer';
import aiwithbussinuessgrowth from '../assets/images/blogImg/aiwithbussinuessgrowth.png';
import CarousalformoreBlog from '../components/CarousalformoreBlog';
import { Helmet } from "react-helmet";
const BlogDetail = () => {
  const [scroll, setScroll] = useState(false);
  const [comment, setComment] = useState('');
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

  const handleClick = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("http://localhost:3000/blog/dndkd")}`;
    window.open(shareUrl, 'Facebook Share', 'width=600,height=400,resizable=yes,scrollbars=yes,status=yes');
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
          <div className='p-0 m-0 w-100  navbar-container pt-0 d-flex flex-column gap-4'>
            <Row className='p-5 pt-0 pb-0'>
              <Col span={24}>
                <Breadcrumb
                  className='custom-roman-font fw-bold'
                  items={[
                    {
                      title: 'Home',
                    },
                    {
                      title: 'BLOG',
                    },
                    {
                      title: 'DIGITAL TRANSFROMATION',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row gutter={[0, 15]} className='border-bottom p-5 pt-0 pb-0'>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={0}
                xs={0}
                className='d-xl-flex d-lg-flex d-md-flex d-sm-none d-none flex-column gap-4 p-4 pb-5 border-end'
              >
                <div>
                  {' '}
                  <span className='border-bottom fs-6 pb-2 fw-medium'>
                    TABLE OF CONTENT{' '}
                  </span>
                </div>
                <div className='d-flex flex-column gap-1'>
                  <span
                    className='text-decoration-underline'
                    style={{ fontSize: '14px', color: '#0092FF' }}
                  >
                    What is digital transformation
                  </span>
                  <span
                    className='text-decoration-underline'
                    style={{ fontSize: '14px', color: '#0092FF' }}
                  >
                    Pros and cons of Digital transformation{' '}
                  </span>
                  <span
                    className='text-decoration-underline'
                    style={{ fontSize: '14px', color: '#0092FF' }}
                  >
                    Do and Don’ts{' '}
                  </span>
                  <span
                    className='text-decoration-underline'
                    style={{ fontSize: '14px', color: '#0092FF' }}
                  >
                    Digital transformations budjet
                  </span>
                </div>
              </Col>
              <Col
                xl={18}
                lg={18}
                md={18}
                sm={24}
                xs={24}
                className='p-4 pb-5 overflow-y-auto custom-blog-scroll'
                style={{ maxHeight: '70vh' }}
              >
                <Row>
                  <Col
                    xl={19}
                    lg={20}
                    md={22}
                    sm={24}
                    xs={24}
                  >
                    <span className='custome-background-color p-2 rounded-2 custom-color custom-roman-font blog-type'>
                      IT SERVICES
                    </span>
                    <div className='mt-4 d-flex flex-column gap-2'>
                      <span
                        className='fs-4 contom-font fw-bold'
                        style={{ color: '#363E3E' }}
                      >
                        How is AI-powered Digital Transformation reshaping
                        business growth?
                      </span>
                      <span className='custom-paragraph-color custom-font fw-medium'>
                        22 April 2024{' '}
                      </span>
                      <img
                        src={aiwithbussinuessgrowth}
                        className='w-100 rounded-4 mt-2'
                        style={{ maxHeight: '470px' }}
                        alt=""
                      />
                      <p className='mt-4 custom-paragraph-color fs-6 fw-normal custom-roman-font lh-base'>
                        Lorem ipsum dolor sit amet consectetur. Porta sed enim
                        cras et. Luctus commodo semper mauris et tellus elit
                        malesuada nisl nibh. Ullamcorper sit nec nisl fusce
                        pulvinar malesuada cras ac aliquet. Tempus ultrices
                        pellentesque cras nec eget integer.
                        <br />
                        <br /> Ac ipsum viverra mollis neque. Velit fusce a at
                        facilisis in nunc lectus turpis. Vitae phasellus
                        ultrices tristique scelerisque euismod. Non laoreet
                        placerat pretium odio tellus. Sed sit id pulvinar id.
                        Eget morbi bibendum non diam egestas in augue purus
                        fringilla. Habitant suscipit arcu dignissim tortor risus
                        ipsum ornare feugiat.
                        <br />
                        <br /> Sed et imperdiet non volutpat aliquet enim nec
                        felis ornare. Leo bibendum aliquam velit leo eu
                        ultricies augue mauris suscipit. Duis vel euismod velit
                        gravida tortor etiam tempus lectus in. Donec aliquet
                        tincidunt quis mi tellus suspendisse lobortis arcu.
                        Tortor eget nisi non egestas quam scelerisque. Eget
                        maecenas iaculis quis sit malesuada pharetra odio nibh.
                        Nam malesuada pellentesque aliquet vitae ac. Arcu mi
                        eget at id sed eget. Id aliquam purus auctor
                        pellentesque. Suspendisse nulla egestas neque at sit et
                        vestibulum morbi faucibus. Hendrerit malesuada in
                        aliquam amet aliquam. Semper eu blandit fusce vel
                        adipiscing consectetur non malesuada. Mauris tristique
                        est quis sed. Amet neque elit justo urna quis etiam
                        lacus cras. Amet nam elit at sed. Egestas pellentesque
                        ut at turpis risus nec malesuada neque est. Tincidunt
                        varius donec sed auctor amet quis ut massa ante.
                        Faucibus amet ornare non proin justo. Ac egestas eu
                        metus tortor. Mauris cras interdum arcu ac hac ipsum
                        amet.
                        <br />
                        <br /> Tortor fames non purus sed lectus quis eget. Vel
                        magna in dictumst.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className='border-bottom p-5 pt-4 pb-4 d-flex align-items-center justify-content-between w-100'>
          <div className='d-flex gap-2 '>
            {/* <a
              href='https://www.facebook.com/DANIP-103200858456074'
              target='_blank'
              rel='noreferrer'
            > */}
              <img
                width={30}
                height={30}
                loading='lazy'
                src={images.facebook}
                alt=''
                onClick={()=>handleClick()}
              />
            {/* </a> */}
            <a
              href='https://www.instagram.com/daniptechnologies/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                width={30}
                height={30}
                loading='lazy'
                src={images.instagram}
                alt=''
              />
            </a>
            <a
              href='https://twitter.com/TechDanip?s=20'
              rel='noreferrer'
              target='_blank'
            >
              <img
                width={30}
                height={30}
                loading='lazy'
                src={images.twitter}
                alt=''
              />
            </a>
            {/* <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("http://localhost:3000/blog/dndkd")}`}
              target='_self'
              rel='noreferrer'
              data-hook="share-button__linked-in"
              aria-label="Share via LinkedIn"
            > */}
              <img
                width={30}
                height={30}
                loading='lazy'
                src={images.linkedin}
                alt=''
              />
            {/* </a> */}
            <a
              href='https://www.linkedin.com/company/danip-technologies/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                width={30}
                height={30}
                loading='lazy'
                src={images.share}
                alt=''
              />
            </a>
          </div>
          <div className='fs-6 d-flex gap-3' style={{ color: '#363E3E' }}>
            <div className='d-flex justify-content-center align-items-center gap-2'>
              <CommentOutlined /> 0 Comments
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
              <HeartOutlined style={{ color: '#FF445B' }} /> 4 likes
            </div>
          </div>
        </div>
        <div className='w-100 p-5 pb-0'>
          <span
            className='contom-font fs-5 fw-bolder'
            style={{ color: '#363E3E' }}
          >
            Comments
          </span>
          <Row gutter={[12, 15]} className='mt-2 mb-4'>
            <Col span={24}>
              <Input
                className='border-0 border-bottom rounded-0 comment-input'
                placeholder='Add Comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                suffix={
                  <Avatar
                    style={{
                      backgroundColor: '#184D98',
                      verticalAlign: 'middle',
                    }}
                    size='small'
                  >
                    A
                  </Avatar>
                }
              />
            </Col>
            {comment?.length > 0 && (
              <Col span={24}>
                <Row gutter={[12, 15]} justify={'end'}>
                  <Col xl={3} lg={3} md={7} sm={8} xs={12}>
                    <Button
                      type='default'
                      className='rounded-5 w-100 cencle-btn fw-medium d-flex justify-content-center align-items-center custom-roman-font'
                    >
                      Get in Touch
                    </Button>
                  </Col>
                  <Col xl={3} lg={3} md={7} sm={8} xs={12}>
                    <Button className='rounded-5 w-100 get-in-touch-btn fw-medium d-flex justify-content-center align-items-center custom-roman-font'>
                      Publish
                    </Button>
                  </Col>
                </Row>
              </Col>
            )}
            <Col span={24}>
              <Row gutter={[12, 15]}>
                <Col span={24} className='d-flex flex-column gap-3'>
                  <div className='d-flex align-items-center gap-3 fs-6 fw-medium'>
                    <Avatar
                      style={{
                        backgroundColor: '#184D98',
                        verticalAlign: 'middle',
                      }}
                      size='default'
                    >
                      A
                    </Avatar>
                    Ankit Sharma
                  </div>
                  <p className='custom-roman-font custom-paragraph-color '>
                    Lorem ipsum dolor sit amet consectetur. Nulla turpis
                    tristique quam leo eu eu pulvinar a amet. Feugiat quam
                    pulvinar et purus dui. Erat sed euismod hendrerit turpis
                    massa. Purus ultricies dictum sed blandit platea velit
                    vestibulum scelerisque leo. Semper.
                  </p>
                </Col>
                <Col span={24} className='d-flex flex-column gap-3'>
                  <div className='d-flex align-items-center gap-3 fs-6 fw-medium'>
                    <Avatar
                      style={{
                        backgroundColor: '#184D98',
                        verticalAlign: 'middle',
                      }}
                      size='default'
                    >
                      A
                    </Avatar>
                    Ankit Sharma
                  </div>
                  <p className='custom-roman-font custom-paragraph-color '>
                    Lorem ipsum dolor sit amet consectetur. Nulla turpis
                    tristique quam leo eu eu pulvinar a amet. Feugiat quam
                    pulvinar et purus dui. Erat sed euismod hendrerit turpis
                    massa. Purus ultricies dictum sed blandit platea velit
                    vestibulum scelerisque leo. Semper.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <CarousalformoreBlog />
        </div>
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default BlogDetail;
