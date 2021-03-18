import React from 'react';
import styled from 'styled-components'; 
import logo_img from '../../../assets/images/logo.svg'
import back_button from '../../../assets/images/back.svg'
import { Link } from 'react-router-dom';

interface HeaderProps {
    back?: boolean;
}

export default function Header(props: HeaderProps) {
    return (<StyledHeader>
        <img src={logo_img} alt='Moove logo' style={{height: '4rem'}} />
        {
            props.back && <Link to='/'>
                <BackButton src={back_button} />
            </Link>
        }
    </StyledHeader>)
}

const StyledHeader = styled.header`
    margin: 2rem 0;
	height: 16vh;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`

const BackButton = styled.img`
	cursor: pointer;
	position: absolute;
    left: 5vw;
    top: calc(2rem + 16vh - 3.6rem);
	height: 3rem;
`