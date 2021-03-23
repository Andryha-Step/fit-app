import React from 'react';
import styled from 'styled-components';
import { Text } from '../../Atoms'
import secondary_logo from '../../../assets/images/logo.png'

interface FooterProps {
    terms?: boolean;
}

export default function Footer(props: FooterProps) {
    return (<StyledFooter>
        <Text center style={{marginBottom: '0.2rem'}}>Powered by</Text>
		<img style={{marginBottom: '1rem'}} width='30%' src={secondary_logo} alt='Moove logo' />
        {props.terms &&
            <Text><StyledA href="#">Terms and Conditions</StyledA> | <StyledA href="#">Privacy Policy</StyledA></Text>
        }
    </StyledFooter>)
}

const StyledFooter = styled.footer`
    @media only screen and (max-width: 600px) {
		& {
			flex: 0.7;
		}
	}
	height: 15vh;
	margin: 1rem 0;
	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
    width: 100%;
`
const StyledA = styled.a`
	color: white;
    margin: 0 0.5rem;

	&:active {
		color: white;
	}
`