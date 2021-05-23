import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Modal, Select, Text, TextInput, Title, DateInput } from '../../Atoms'
import CloseHeader from '../../Blocks/CloseHeader'
import Flex from '../../Blocks/Flex'
import Avatar from '../Chat/Avatar'
import file from '../../../assets/icons/file.svg'
import pool from '../../../assets/icons/pool.svg'
import plus from '../../../assets/icons/plus-black.svg'
import close from '../../../assets/icons/close.svg'

export interface PostModalProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    isModalOpen: boolean
    onClose: () => void
}

export default function PostModal(props: PostModalProps): JSX.Element {

    const { style, isModalOpen, onClose } = props

    const [windowState, setWindowState] = useState('main');
    const [poolOptions, setPoolOptions] = useState(['', '']);

    const handleOptionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setPoolOptions(poolOptions.map((el, i) => i === parseInt(e.target.id.replace('opt', '')) ? e.target.value : el))
        console.log(poolOptions)
    }

    const addOption = () => {
        setPoolOptions([...poolOptions, '']);
        setTimeout(() => {
            document.getElementById(`opt${poolOptions.length}`)?.focus();
        }, 0)
    }

    const removeOption = (e: React.MouseEvent<HTMLImageElement>) => {
        if (poolOptions.length <= 2) return;

        const target = e.target as HTMLImageElement
        setPoolOptions(poolOptions.filter((el, i) => i !== parseInt(target.id.replace('opt', ''))));
    }

    const optionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (e.key === 'Backspace' && poolOptions[parseInt(target.id.replace('opt', ''))].length <= 0) {
            e.preventDefault();

            if (parseInt(target.id.replace('opt', '')) <= 0) { // When backspace on first empty option — focus on qestion
                document.getElementById(`q_inp`)?.focus();
            }
            if (poolOptions.length > 2) { // When backspace on empty option — remove it
                setPoolOptions(poolOptions.filter((el, i) => i !== parseInt(target.id.replace('opt', ''))))
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
                <ModalHeader>
                    <CloseHeader onClick={onClose} pb="1rem">
                        <Avatar mr={'1rem'} />
                        <Title weight="600">Sansa Indira</Title>
                    </CloseHeader>
                    <Select
                        theme="gray"
                        options={[
                            {
                                title: 'Members only'
                            }
                        ]}
                    />
                </ModalHeader>

                { // Main window
                    windowState === 'main' && <>
                        <PostTextarea placeholder="What’s on your mind?" />
                        <Flex jc="space-between">
                            <Flex>
                                <FileButton>
                                    <Title weight='400' size='1.1rem'>File</Title>
                                </FileButton>
                                <PoolButton onClick={() => setWindowState('pool')}>
                                    <Title weight='400' size='1.1rem'>Pool</Title>
                                </PoolButton>
                            </Flex>
                            <Button noShadow primary width='10rem' padding='.5rem 0'>Post</Button>
                        </Flex>
                    </>
                }

                { // Pool creating
                    windowState === 'pool' && <>
                        <CloseHeader mb='1rem' onClick={() => setWindowState('main')}>
                            <Title weight="600">Add pool</Title>
                        </CloseHeader>
                        <TextInput title='Question' placeholder='Question' mb='1rem' id="q_inp" />
                        {
                            poolOptions.map((opt, i) => (
                                <Flex mb='.5rem' ai='flex-end'>
                                    <TextInput style={{ flex: 1 }} title={i === 0 ? 'Options' : ''} placeholder='Option' onChange={handleOptionInput} value={poolOptions[i]} id={`opt${i}`} onKeyDown={optionKeyDown} />
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
                                title: 'DOB',
                                mb: '1rem'
                            }}
                        />
                        <Button noShadow primary width='10rem' padding='.5rem 0'>Post</Button>
                    </>
                }

                {

                }

            </StyledPostModal>
        </Modal>
    )
}

const StyledPostModal = styled.div`
    min-width: 30rem;
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
    padding-left: 1.2rem;
    cursor: pointer;
    margin-right: 2rem;
    display: flex;
    align-items: center;
`

const PoolButton = styled.div`
    background: url(${pool}) no-repeat 0 center;
    padding-left: 1.7rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const ModalHeader = styled.div`
    border-bottom: 1px solid #eeeeee;
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