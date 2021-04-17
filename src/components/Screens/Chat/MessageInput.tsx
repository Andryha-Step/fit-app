import React, { useRef } from 'react'
import styled from 'styled-components'
import addFile from '../../../assets/icons/file-add.svg'
import sendMessage from '../../../assets/icons/send-message.svg'

export interface MessageInputProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function MessageInput(props: MessageInputProps): JSX.Element {

    const { style } = props

    const InputRef = useRef<HTMLTextAreaElement>(null);

    const onTextInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const target = e.target as HTMLTextAreaElement
        target.style.height = '1.4rem';
        target.style.height = 'calc(' + target.scrollHeight + 'px - 2rem)'
    }

    return (
        <Container>
            <StyledMessageInput style={style}>
                <AddFile src={addFile} />
                <TextInput ref={InputRef} onInput={onTextInput} placeholder={'Message'} />
                <SendMessage />
            </StyledMessageInput>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw; 
    left: 0;

    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 0 10vw;
        width: 80vw; 
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 0 15vw;
        width: 70vw; 
    }

    @media screen and (min-width: 1200px) {
        padding: 0 20vw;
        width: 60vw; 
    }
`

const StyledMessageInput = styled.div`
    /* width: 100%; */
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.03);
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    padding: 1rem;
    /* background-color: #93d0ff; */
    display: flex;
    align-items: flex-end;
`

const AddFile = styled.img`
    margin-bottom: 1rem;
`

const SendMessage = styled.div`
    height: 3rem;
    width: 3rem;
    margin-bottom: .4rem;
    background-image: url(${sendMessage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.5rem;
    background-color: #F8F8F8;
    border-radius: 2rem;
`

const TextInput = styled.textarea`
    background: #F8F8F8;
    padding: 1rem .8rem;
    margin: 0 1rem;
    border-radius: .8rem;
    border: 0;
    resize: none;
    font-family: 'Poppins';
    font-size: 1rem;
    height: 1.4rem;
    outline: none;
    flex: 1;

    &&::placeholder {
        color: #B0B0B0;
    }
`