import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import swiper_arrow from '../../../assets/icons/swiper_arrow.svg'
import { Title, Text, Button } from '../../Atoms';
import Footer from '../../Blocks/Onboarding/Footer'
import Backdrop from '../../Blocks/Onboarding/Backdrop'
import Header from '../../Blocks/Onboarding/Header'
import SwiperCore, { Pagination, Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import 'swiper/swiper-bundle.min.css';
import { Link } from 'react-router-dom';

import VerticalContainer from '../../VerticalContainer'

SwiperCore.use([Pagination, Navigation, Controller]);

function Onboarding(): JSX.Element {

  const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined);

  const SwiperCofing = {
    pagination: {
      clickable: true
    },
    onSwiper: setSwiper,
    controller: { control: swiper }
  }

  return (
    <Backdrop>
      <DisableScroll />
      <SpaceForSliderDots />
      <VerticalContainer>
        <Header />
        <Slider>
          <SliderArrowPrev src={swiper_arrow} alt='arrow prev' onClick={() => swiper?.slidePrev()} />
          <SliderArrowNext src={swiper_arrow} alt='arrow next' onClick={() => swiper?.slideNext()} />
          <Swiper
            {...SwiperCofing}
          >
            <SwiperSlide>
              <Slide>
                <Title color={'white'} center>ON-DEMAND AND LIVE CLASSES</Title>
                <Text color={'white'} center>Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <Title color={'white'} center>ON-DEMAND AND LIVE CLASSES</Title>
                <Text color={'white'} center>Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <Title color={'white'} center>ON-DEMAND AND LIVE CLASSES</Title>
                <Text color={'white'} center weight="500">Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
              </Slide>
            </SwiperSlide>
          </Swiper>
        </Slider>
        <ButtonGroup>
          <Link to='/reg' style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <Button primary>get started</Button>
          </Link>
          <Link to='/login' style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <Button transparent>log in</Button>
          </Link>
        </ButtonGroup>
        <Footer />
      </VerticalContainer>
    </Backdrop>
  );
}

const Slider = styled.div`
  position: relative;
  display: flex; 
  margin-left: 3vh;
  margin-right: 3vh;
  flex: 3.9;
`

const SliderArrow = styled.img`
  width: 2rem;
  cursor: pointer;
  display: none;
  @media only screen and (min-width: 1200px) {
    & {
      display: unset;
    }
  }
`

const SliderArrowNext = styled(SliderArrow)`
  position: absolute;
  right: -5rem;
  bottom: 6rem;
`

const SliderArrowPrev = styled(SliderArrow)`
  transform: rotate(180deg);
  position: absolute;
  left: -5rem;
  bottom: 6rem;
`

// Creating a new swiper-container class 
// with padding-bottom: 2rem to make space for slider pagination
const SpaceForSliderDots = createGlobalStyle`
  .swiper-container {
    padding-bottom: 2.5rem;
  }

  /* @media only screen and (max-width: 600px) {
    .swiper-container {
      padding-bottom: 3rem;
    }
  } */

  .swiper-pagination-bullet {
    background: white;
    transition: width .35s .2s, opacity .35s .2s;
    border-radius: 8px;
    width: 0.5rem;
    height: 0.5rem;
  }

  .swiper-pagination-bullets {
    bottom: 0!important;
  }

  .swiper-pagination-bullet-active {
    width: 1rem;
    border-radius: 8px;
  }
`

const DisableScroll = createGlobalStyle`
  body,
  html {
    width: 100%;
    position: fixed;
  }

`

const Slide = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
`

const ButtonGroup = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2rem;
`

export default Onboarding;
