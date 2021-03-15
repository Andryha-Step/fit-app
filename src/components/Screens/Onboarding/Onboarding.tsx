import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Title, Text, Button } from '../../Atoms';
import logo_img from '../../../assets/images/logo.svg'
import powered_by_logo_img from '../../../assets/images/poweredby_logo.svg'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Link } from 'react-router-dom';

import VerticalContainer from '../../VerticalContainer'

SwiperCore.use([Pagination]);

function Onboarding(): JSX.Element {

  const SwiperCofing = {
    pagination: {
      clickable: true
    }
  }

  return (
    <Backdrop>
      <SpaceForSliderDots />
      <VerticalContainer>
        <Header>
          <img width='47%' src={logo_img} alt='Moove logo' />
        </Header>
        <Slider>
          <Swiper
            {...SwiperCofing}
          >
            <SwiperSlide>
              <Slide>
                <Title center>ON-DEMAND AND LIVE CLASSES</Title>
                <Text center>Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <Title center>ON-DEMAND AND LIVE CLASSES</Title>
                <Text center>Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <Title center>ON-DEMAND AND LIVE CLASSES</Title>
                <Text center weight="500">Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
              </Slide>
            </SwiperSlide>
          </Swiper>
        </Slider>
        <ButtonGroup>
          <Link to='/reg' style={{display: 'flex', flexDirection: 'column', textDecoration: 'none'}}>
            <Button primary>get started</Button>
          </Link>
          <Link to='/login' style={{display: 'flex', flexDirection: 'column', textDecoration: 'none'}}>
            <Button transparent>log in</Button>
          </Link>
        </ButtonGroup>
        <Footer>
          <img width='30%' src={powered_by_logo_img} alt='Moove logo' />
        </Footer>
      </VerticalContainer>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  backdrop-filter: brightness(40%);
`

const Header = styled.header`
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Footer = styled.footer`
  @media only screen and (max-width: 600px) {
    & {
      flex: 0.7;
      align-items: flex-start;
    }
  }
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Slider = styled.div`
  display: flex; 
  margin-left: 3vh;
  margin-right: 3vh;
  flex: 3.9;
`

// Creating a new swiper-container class identical to original
// with padding-bottom: 2rem to make space for slider pagination
const SpaceForSliderDots = createGlobalStyle`
  .swiper-container {
    padding-bottom: 2.5rem;
  }

  @media only screen and (max-width: 600px) {
    .swiper-container {
      padding-bottom: 3rem;
    }
  }

  .swiper-pagination-bullet {
    background: white;
    transition: width .35s .2s, opacity .35s .2s;
    border-radius: 8px;
    width: 9px;
    height: 9px;
  }

  .swiper-pagination-bullets {
    bottom: 0!important;
  }

  .swiper-pagination-bullet-active {
    width: 18px;
    border-radius: 8px;
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
