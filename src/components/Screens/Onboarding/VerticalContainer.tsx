import React from 'react';
import styled from 'styled-components';

const WidthConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  /* @media only screen and (max-width: 300px) {
    & {
      width: 100%;
    }
  } */

  @media only screen and (min-width: 450px) {
    & {
      width: 30rem;
    }
  }
`

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export default function VerticalContainer(props: { children: React.ReactNode }): JSX.Element {
  return (
    <CenterContainer>
      <WidthConatiner>
        {props.children}
      </WidthConatiner>
    </CenterContainer>
  )
}