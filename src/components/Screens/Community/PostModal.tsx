import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Modal, Select, Text, TextInput, Title, DateInput } from '../../Atoms'
import CloseHeader from '../../Blocks/CloseHeader'
import Flex from '../../Blocks/Flex'
import Avatar from '../Chat/Avatar'
import file from '../../../assets/icons/file.svg'
import poll from '../../../assets/icons/poll.svg'
import plus from '../../../assets/icons/plus-black.svg'
import close from '../../../assets/icons/close.svg'
import select_arrow from '../../../assets/icons/arrow-down-black.svg';
import private_ from '../../../assets/icons/private.svg';
import public_ from '../../../assets/icons/public.svg';


export interface PostModalProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    isModalOpen: boolean
    onClose: () => void
}

export default function PostModal(props: PostModalProps): JSX.Element {

    const { style, isModalOpen, onClose } = props

    const [windowState, setWindowState] = useState('main');
    const [pollOptions, setPoolOptions] = useState(['', '']);
    const [visibility, setVisibility] = useState('public')

    const onVisibilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVisibility(e.target.value)
    }

    const handleOptionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setPoolOptions(pollOptions.map((el, i) => i === parseInt(e.target.id.replace('opt', '')) ? e.target.value : el))
        console.log(pollOptions)
    }

    const addOption = () => {
        setPoolOptions([...pollOptions, '']);
        setTimeout(() => {
            document.getElementById(`opt${pollOptions.length}`)?.focus();
        }, 0)
    }

    const removeOption = (e: React.MouseEvent<HTMLImageElement>) => {
        if (pollOptions.length <= 2) return;

        const target = e.target as HTMLImageElement
        setPoolOptions(pollOptions.filter((el, i) => i !== parseInt(target.id.replace('opt', ''))));
    }

    const optionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Backspace' && pollOptions[parseInt(target.id.replace('opt', ''))].length <= 0) {
            e.preventDefault();

            if (parseInt(target.id.replace('opt', '')) <= 0) { // When backspace on first empty option — focus on qestion
                document.getElementById(`q_inp`)?.focus();
            }
            if (pollOptions.length > 2) { // When backspace on empty option — remove it
                setPoolOptions(pollOptions.filter((el, i) => i !== parseInt(target.id.replace('opt', ''))))
            }

            // Focus on previus option
            document.getElementById(`opt${parseInt(target.id.replace('opt', '')) - 1}`)?.focus();

        } else if (e.key === 'Enter') {
            addOption()
        }
    }

    return (
        <Modal wrapperTemplate='white-box' isOpen={isModalOpen}>
            <StyledPostModal style={style}>
                <ModalHeader border={windowState !== 'visibility'}>
                    {
                        windowState === 'main' && <>
                            <CloseHeader onClick={onClose} pb="1rem">
                                <Avatar mr={'1rem'} />
                                <Title weight="600">Sansa Indira</Title>
                            </CloseHeader>
                            <FakeSelect onClick={() => setWindowState('visibility')}>
                                <img src={visibility === 'public' ? public_ : private_} alt="" style={{ marginRight: '.5rem' }} />
                                <Title size='1rem' weight='500'>
                                    {visibility === 'public' && 'Public'}
                                    {visibility === 'private' && 'Members only'}
                                </Title>
                            </FakeSelect>
                        </>
                    }
                    {
                        windowState === 'visibility' && <>
                            <CloseHeader onClick={() => setWindowState('main')}>
                                <Title weight="600" size='1.4rem'>Who can see this post?</Title>
                            </CloseHeader>
                        </>
                    }
                    {
                        windowState === 'poll' && <>
                            <CloseHeader onClick={onClose} pb="1rem">
                                <Avatar mr={'1rem'} />
                                <Title weight="600">Sansa Indira</Title>
                            </CloseHeader>
                            <FakeSelect onClick={() => setWindowState('visibility')}>
                                <img src={visibility === 'public' ? public_ : private_} alt="" style={{ marginRight: '.5rem' }} />
                                <Title size='1rem' weight='500'>
                                    {visibility === 'public' && 'Public'}
                                    {visibility === 'private' && 'Members only'}
                                </Title>
                            </FakeSelect>
                            <CloseHeader onClick={() => setWindowState('main')}>
                                <Title weight="600">Create poll</Title>
                            </CloseHeader>
                        </>
                    }
                </ModalHeader>

                { // Main window
                    windowState === 'main' && <>
                        <PostTextarea placeholder="What’s on your mind?" />
                        <Flex jc="space-between">
                            <Flex>
                                <FileButton>
                                    <Title weight='400' size='1.1rem'>File</Title>
                                </FileButton>
                                <PoolButton onClick={() => setWindowState('poll')}>
                                    <Title weight='400' size='1.1rem'>Poll</Title>
                                </PoolButton>
                            </Flex>
                            <Button noShadow primary width='10rem' padding='.5rem 0'>Post</Button>
                        </Flex>
                    </>
                }

                { // Poll creating
                    windowState === 'poll' && <>
                        <TextInput title='Question' placeholder='Question' mb='1rem' id="q_inp" />
                        {
                            pollOptions.map((opt, i) => (
                                <Flex mb='.5rem' ai='flex-end'>
                                    <TextInput style={{ flex: 1 }} title={i === 0 ? 'Options' : ''} placeholder='Option' onChange={handleOptionInput} value={pollOptions[i]} id={`opt${i}`} onKeyDown={optionKeyDown} />
                                    <img src={close} alt='close' style={{ marginLeft: '1rem', height: '3rem', width: '1rem', opacity: .3, cursor: 'pointer' }} onClick={removeOption} id={`opt${i}`} />
                                </Flex>
                            ))
                        }
                        <Flex ai='center' onClick={addOption} pointer mb='1rem'>
                            <CircledPlus />
                            <Text color='#C5C5C5' size='1rem'>Add option</Text>
                        </Flex>
                        <DateInput
                            inputProps={{
                                placeholder: "DD/MM/YY",
                                title: 'End date',
                                mb: '1rem'
                            }}
                        />
                        <Flex jc='flex-end'>
                            <Button noShadow primary width='10rem' padding='.5rem 0' onClick={() => setWindowState('main')}>Post</Button>
                        </Flex>
                    </>
                }

                { // Post visibility settings
                    windowState === 'visibility' && <>
                        <VisibilityRadio icon={public_}>
                            <input type='radio' name='visibility' value='public' checked={visibility === 'public'} onChange={onVisibilityChange} />
                            <Flex column flex='1'>
                                <Title weight='400'>Public</Title>
                                <Title size='.9rem' color='#B0B0B0' weight='600'>Post is visible to anyone</Title>
                            </Flex>
                        </VisibilityRadio>
                        <VisibilityRadio icon={private_}>
                            <input type='radio' name='visibility' value='private' checked={visibility === 'private'} onChange={onVisibilityChange} />
                            <Flex column flex='1'>
                                <Title weight='400'>Members only</Title>
                                <Title size='.9rem' color='#B0B0B0' weight='600'>Post is visible to members only</Title>
                            </Flex>
                        </VisibilityRadio>
                        <Flex jc='flex-end'>
                            <Button noShadow primary width='10rem' padding='.5rem 0' onClick={() => setWindowState('main')}>Done</Button>
                        </Flex>
                    </>
                }

            </StyledPostModal>
        </Modal>
    )
}

const StyledPostModal = styled.div`
    min-width: 25rem;
`

const PostTextarea = styled.textarea`
    font-size: 1.5rem;
    color: black;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    text-decoration: none;
    
    border: 0;
    padding-top: .5rem;
    width: 100%;
    height: 8rem;
    outline: none;
    resize: none;

    &&::placeholder {
        color: #B0B0B0;
    }
`

const FileButton = styled.div`
    background: url(${file}) no-repeat 0 center;
    background-size: .8rem;
    padding-left: 1.2rem;
    cursor: pointer;
    margin-right: 2rem;
    display: flex;
    align-items: center;
`

const PoolButton = styled.div`
    background: url(${poll}) no-repeat 0 center;
    background-size: 1.4rem;
    padding-left: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const ModalHeader = styled.div<{ border: boolean }>`
    ${p => p.border ? `
        border-bottom: 1px solid #eeeeee;
    ` : ''}
    padding-bottom: .8rem;
    margin-bottom: 1rem;
`

const CircledPlus = styled.div`
    background: url(${plus}) no-repeat center center #F8F8F8;
    height: 3rem;
    width: 3rem;
    border-radius: 5rem;
    margin-right: 1rem;
`

const FakeSelect = styled.div`
    border-radius: 1rem;
    padding: 0 1rem;
    min-height: 3rem;
    color: black;
    background: #F8F8F8;
    display: flex;
    align-items: center;
    cursor: pointer;  
    margin-bottom: 1rem;

    background-image: url(${select_arrow});
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: 95% center;
    padding-right: 1rem;
`

const VisibilityRadio = styled.label<{ icon?: string }>`
    display: flex;
    padding-left: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(169, 169, 169, 0.2);
    background: url(${p => p.icon}) no-repeat 0% 20%;
    position: relative;

    && input {
        width: 0;
        height: 0;
        opacity: 0;
    }

    && input ~ div::after {
        content: ' '; 
        display: block;
        width: .4rem;
        height: .4rem;
        border-radius: 1rem;
        background-color: white;
        border: .2rem solid white;
        box-shadow: 0 0 0 .2rem black;
        outline: none;
        position: absolute;
        top: calc(40% - .45rem);
        left: 95%;
    }

    && input:checked ~ div::after {
        background-color: black;
    }
`