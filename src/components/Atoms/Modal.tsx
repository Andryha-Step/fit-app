import React, { useRef, MouseEvent } from 'react';
import styled from 'styled-components';

export interface ModalProps {
    children?: React.ReactNode | React.ReactNode[];

    // Describes a type of wrapper for Modal
    wrapperTemplate?: 'white-box';
    wrapperWidth?: string;

    isOpen?: boolean;
    onClose?: () => void;
}

export default function Modal(props: ModalProps): JSX.Element {

    const ModalRef = useRef<HTMLDivElement>(null);

    if (!props.isOpen) return <></>;
    
    const clickHandler = (e: MouseEvent) => {

        // Check if user clicked on container, not wrapper or content
        if (e.target === ModalRef.current) {
            props.onClose && props.onClose()
        }
    }

    return (
        <ModalContainer onClick={clickHandler} ref={ModalRef}>
            {
                props.wrapperTemplate === 'white-box' && 
                    <WhiteBoxWrapper width={props.wrapperWidth}>
                        {props.children}
                    </WhiteBoxWrapper>
            }
            {
                !props.wrapperTemplate && props.children
            }
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.58);
    width: calc(100vw - 1.2rem * 2);
    height: calc(100vh - 1.2rem * 2);
    z-index: 10;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WhiteBoxWrapper = styled.div<{width?: string}>`
    background: #F8F8F8;
    border-radius: 20px;
    padding: 1.5rem;
    font-size: 1.3rem;
    color: black;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    ${p => p.width && `width: ${p.width};`}
`