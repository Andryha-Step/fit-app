import React from 'react';
import styled from 'styled-components';
import VerticalContainer from '../../VerticalContainer'
import logo_img from '../../../assets/images/logo.svg'
import powered_by_logo_img from '../../../assets/images/poweredby_logo.svg'
import back_buttom from '../../../assets/images/back.svg'
import { Title } from '../../Title'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { Link } from "react-router-dom";

export interface CreateAccountScreenProps {
  login?: boolean;
  registration?: boolean;
}

export default function CreateAccount(props: CreateAccountScreenProps): JSX.Element {
    return (
        <Backdrop>
            <VerticalContainer>
            <Header>
                <img width='47%' src={logo_img} alt='Moove logo' />
                <Link to='/onboarding'>
                  <BackButton src={back_buttom} />
                </Link>
            </Header>
            <FormContainer>
                {props.login && <Title center>Log In</Title>}
                {props.registration && <Title center>Create Account</Title>}
                <Input type="email" id="email" name="email" placeholder='Email adress' />
                {
                  props.registration &&
                    <Input type="checkbox" id="terms" name="terms" value="terms">
                        I confirm that I have read and agree to the <br /> Terms & Conditions and Privacy Policy
                    </Input>
                }
                <Button primary>send me a login link</Button>
            </FormContainer>
            <Footer>
                <img width='30%' src={powered_by_logo_img} alt='Moove logo' />
            </Footer>
            </VerticalContainer>
        </Backdrop>
    )
}

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  backdrop-filter: brightness(40%) blur(1px);
`

const Header = styled.header`
  height: 9rem;
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

const FormContainer = styled.form`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`

const BackButton = styled.img`
    cursor: pointer;
    position: absolute;
    left: 5vw;
    top: 5rem;
    height: 3rem;
`