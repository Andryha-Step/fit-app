import React from 'react';
import styled from 'styled-components';
import { Text } from '../Atoms'
import secondary_logo from '../../assets/images/logo.png'

interface FooterProps {
	terms?: boolean;
}

export default function Footer(props: FooterProps) {
	return (<StyledFooter>
		<Text color="black" center style={{ marginBottom: '0.2rem' }}>Powered by</Text>
		<img style={{ marginBottom: '1rem', filter: 'invert(1)', width: '10rem' }} src={secondary_logo} alt='Moove logo' />
		{props.terms &&
			<Text color="black"><StyledA href="#">Terms and Conditions</StyledA> | <StyledA href="#">Privacy Policy</StyledA></Text>
		}
	</StyledFooter>)
}

const StyledFooter = styled.footer`
    @media only screen and (max-width: 600px) {
		& {
			flex: 0.7;
			margin-bottom: 5rem;
		}
	}

	height: 10rem;
	margin-top: 1rem;
	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
    width: 100%;
	border-top: 1px solid #E6E5E5;
`
const StyledA = styled.a`
	color: black;
    margin: 0 0.5rem;

	&:active {
		color: black;
	}
`