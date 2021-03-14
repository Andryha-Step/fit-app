import React, { FormEvent } from 'react';
import styled from 'styled-components';
import VerticalContainer from '../../VerticalContainer'
import logo_img from '../../../assets/images/logo.svg'
import powered_by_logo_img from '../../../assets/images/poweredby_logo.svg'
import back_buttom from '../../../assets/images/back.svg'
import success from '../../../assets/images/success.svg'
import { Title } from '../../Title'
import { Text } from '../../Text'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { Link, useHistory } from "react-router-dom";

export interface CreateAccountScreenProps {
	login?: boolean;
	registration?: boolean;
	linkSent?: boolean;
}

export default function CreateAccount(props: CreateAccountScreenProps): JSX.Element {

	const history = useHistory();

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (props.login || props.registration) {
			history.push('/suc')
		} else {
			history.push('/ac')
		}
	}

	return (
		<Backdrop>
			<VerticalContainer>
			<Header>
				<img width='47%' src={logo_img} alt='Moove logo' />
				<Link to='/'>
					<BackButton src={back_buttom} />
				</Link>
			</Header>
			<FormContainer onSubmit={handleSubmit}>
				{
					props.linkSent &&
						<SuccessImg>
							<img src={success} style={{height: '2.5rem'}} alt='success' />	
						</SuccessImg>
				}	
				<Title center>
					{props.login && 'Log In'}
					{props.registration && 'Create Account'}
					{props.linkSent && 'Login link sent'}
				</Title>
				{
					props.linkSent &&
					<Text center>
						Please check your email inbox for your <br /> login link.
					</Text>
				}
				{
					(props.login || props.registration) &&
					<Input type="email" id="email" name="email" placeholder='Email adress' />
				}
				{
					props.registration &&
					<Input type="checkbox" id="terms" name="terms" value="terms">
						I confirm that I have read and agree to the <br /> <StyledA href='#'>Terms & Conditions</StyledA> and <StyledA href='#'>Privacy Policy</StyledA>
					</Input>
				}
				<Button primary style={{marginTop: '1rem'}}>
					{(props.registration || props.login) && 'send me a login link'}
					{props.linkSent && 'OPEN EMAIL APP'}
				</Button>
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
	backdrop-filter: brightness(40%) blur(10px);
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

const SuccessImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
`

const StyledA = styled.a`
	color: white;

	&:active {
		color: white;
	}
`