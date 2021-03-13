import React from 'react';
import styled from 'styled-components';

const WidthConatiner = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    & {
      width: 100vw;
    }
  }

  @media only screen and (min-width: 768px) {
    & {
      width: 25rem;
    }
  }
`

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export default function VerticalContainer(props: {children: React.ReactNode}): JSX.Element {
  return (
    <CenterContainer>
      <WidthConatiner> 
        { props.children }
      </WidthConatiner>
    </CenterContainer>
  )
}