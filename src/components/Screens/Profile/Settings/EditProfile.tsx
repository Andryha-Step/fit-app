import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, DateInput, FileInput, Modal, Select, SlideToggle, Text, TextInput, Title } from '../../../Atoms'
import BackHeader from '../../../Blocks/BackHeader'
import Flex from '../../../Blocks/Flex'
import Calendar from '../../Book/Calendar'
import calendarIcon from '../../../../assets/icons/calendar-input.svg'
import UnitInput from './UnitInput'

export interface EditProfileProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function EditProfile(props: EditProfileProps): JSX.Element {

    const { style } = props
    const [modalOpen, setModalOpen] = useState(false);
    const [dob, setDob] = useState(0);

    return (
        <StyledEditProfile style={style}>
            <BackHeader mb='2rem'>
                <Title weight='600' size='1.5rem'>Edit Profile</Title>
            </BackHeader>
            <TextInput
                placeholder="Your real name"
                title='First name'
                mb='1rem'
            />
            <TextInput
                placeholder="Your real last name"
                title='Last name'
                mb='1rem'
            />
            <DateInput
                inputProps={{
                    placeholder: "DD/MM/YY",
                    title: 'DOB',
                    mb: '1rem'
                }}
            />
            <TextInput
                placeholder="email@example.com"
                title='Email'
                mb='1rem'
            />
            <UnitInput />
            <Select
                options={[{
                    title: 'Female'
                }, {
                    title: 'Male'
                }]}
                theme="gray"
                mb='1rem'
            >
                <Title weight='400' size='1.1rem' color="#636363">
                    Gender
                </Title>
            </Select>
            <Select
                options={[{
                    title: 'Be more active'
                }]}
                theme="gray"
                mb='1rem'
            >
                <Title weight='400' size='1.1rem' color="#636363">
                    Fitness goal
                </Title>
            </Select>
            <FileInput mb='2rem'>
                <Title weight='400' size='1.1rem' color="#636363">
                    Upload profile picture
                </Title>
            </FileInput>
            <Flex jc='space-between' mb='1rem'>
                <Title weight='400' size='1.1rem' color="#636363">Receive workout requests</Title>
                <SlideToggle />
            </Flex>
            <SearchButtonContainer>
                <Button primary width={'25rem'} noShadow>SAVE</Button>
            </SearchButtonContainer>
        </StyledEditProfile>
    )
}

const StyledEditProfile = styled.div`
    padding: 0 1.5rem;

    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 10vw;
        max-width: 80vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1.5rem 25vw;
        max-width: 50vw;
    }

    @media screen and (min-width: 1600px) {
        padding: 1.5rem 30vw;
        max-width: 40vw;
    }
`

const SearchButtonContainer = styled.div`
    position: fixed;
    z-index: 10;
    bottom: .5rem;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;

    @media screen and (max-width: 600px) {
        background-color: white;
        padding-top: 1rem;
        border-top: 1px solid #EFEFEF;
    }
`