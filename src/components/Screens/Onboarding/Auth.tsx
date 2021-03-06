import React, { FormEvent } from 'react';
import styled from 'styled-components';
import VerticalContainer from './VerticalContainer'
import success from '../../../assets/images/success.svg'
import lock from '../../../assets/images/lock.svg'
import { Title, Text, Input, Button } from '../../Atoms';
import { useHistory } from "react-router-dom";
import Footer from './Footer'
import Backdrop from './Backdrop'
import Header from './Header'

export interface CreateAccountScreenProps {
	login?: boolean;
	registration?: boolean;
	linkSent?: boolean;
	loginLink?: boolean;
}

export default function CreateAccount(props: CreateAccountScreenProps): JSX.Element {

	const history = useHistory();

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		if (props.login) {
			history.push('/success')
		}

		if (props.registration) {
			history.push('/create-account')
		}

		if (props.linkSent) {
			history.push('/link')
		}

		if (props.loginLink) {
			history.push('/app/forYou')
		}
	}

	return (
		<Backdrop blur>
			<VerticalContainer>
				<Header back />
				<FormContainer onSubmit={handleSubmit}>
					{
						(props.linkSent || props.loginLink) &&
						<SuccessImg>
							<img src={props.linkSent ? success : (props.loginLink ? lock : '')} style={{ height: '2.5rem' }} alt='success' />
						</SuccessImg>
					}
					<Title center color={'white'} mb={'0.8rem'}>
						{props.login && 'Log In'}
						{props.registration && 'Create Account'}
						{props.linkSent && 'Login link sent'}
						{props.loginLink && 'Your Login link'}
					</Title>
					{
						props.linkSent &&
						<Text color={'white'} center mb={'1rem'}>Please check your email inbox for your <br /> login link.</Text>
					}
					{
						props.loginLink &&
						<Text color={'white'} center mb={'1rem'}>Tap below to get started</Text>
					}
					{
						(props.login || props.registration) &&
						<Input type="email" id="email" name="email" placeholder='Email adress' error={'Invalid email address'} />
					}
					{
						props.registration &&
						<Input type="checkbox" id="terms" name="terms" value="terms">
							I confirm that I have read and agree to the <br /> <StyledA href='#'>Terms & Conditions</StyledA> and <StyledA href='#'>Privacy Policy</StyledA>
						</Input>
					}
					<Button primary style={{ marginTop: '1rem', marginBottom: '1.8rem' }}>
						{(props.registration || props.login) && 'send me a login link'}
						{props.linkSent && 'OPEN EMAIL APP'}
						{props.loginLink && 'LOGIN'}
					</Button>
					{
						props.loginLink &&
						<Text color={'white'} center>This link will expire in 30 minutes <br /> and can only be used once.</Text>
					}
				</FormContainer>
				<Footer terms={props.loginLink} />
			</VerticalContainer>
		</Backdrop>
	)
}

const FormContainer = styled.form`
	flex: 5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
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