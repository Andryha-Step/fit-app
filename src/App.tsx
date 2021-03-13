import React from 'react';
import './App.css';

// onboarding
import { Button } from './components/Button'
import styled, { createGlobalStyle } from 'styled-components';
import { Title } from './components/Title'
import { Text } from './components/Text'
import logo_img from './assets/images/logo.svg'
import powered_by_logo_img from './assets/images/poweredby_logo.svg'
import background from './assets/backgrounds/onboarding.svg'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);


function App() {

  const SwiperCofing = {
    containerClass: 'swiper-custom',
    pagination: {
      clickable: true
    }
  }

  return (
    <AppContainer>
      <SpaceForSliderDots />
      <Backdrop>
        <PageContainer>
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
                  <Text center>Get access to unlimited on-demand and live classes tailored to your goals. <br />Take individual classes at your convenience or schedule classes with your friends.</Text>
                </Slide>
             </SwiperSlide>
            </Swiper>
          </Slider>
          <ButtonGroup>
            <Button primary>get started</Button>
            <Button transparent>log in</Button>
          </ButtonGroup>
          <Footer>
            <img width='30%' src={powered_by_logo_img} alt='Moove logo' />
          </Footer>
        </PageContainer>
      </Backdrop>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  width: 100%;
  height: 100vh;
  background: url(${background});
  background-size: cover;
  /* background-position: center center; */
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;


  @media only screen and (max-width: 600px) {
    & {
      width: 100vw;
    }
  }

  @media only screen and (min-width: 768px) {
    & {
      width: 60vw;
    }
  }

  @media only screen and (min-width: 768px) {
    & {
      width: 60vw;
    }
  }

  @media only screen and (min-width: 992px) {
    & {
      width: 40vw;
    }
  }

  @media only screen and (min-width: 1200px) {
    & {
      width: 35vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    & {
      width: 29vw;
    }
  }
`

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  backdrop-filter: brightness(30%) blur(1px);
`

const Header = styled.header`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Footer = styled.footer`
  flex: 1.5;
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

  .swiper-pagination-bullet {
    background: white;
    transition: width .35s .2s, opacity .35s .2s;
    border-radius: 8px;
    width: 9px;
    height: 9px;
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

const Dots = styled.div`
  height: 10vh;
`

const ButtonGroup = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default App;
