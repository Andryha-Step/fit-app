import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import TextInput from './TextInput';
import calendarIcon from '../../assets/icons/calendar-input.svg'
import Button from './Button';
import Calendar from '../Screens/Book/Calendar';
import { TextInputProps } from '.';

export interface DateInputProps {
    children?: React.ReactNode
    modalStyle?: React.CSSProperties
    inputStyle?: React.CSSProperties
    inputProps?: TextInputProps
}

export default function DateInput(props: DateInputProps): JSX.Element {

    const { inputStyle, modalStyle, inputProps } = props
    const [date, setDate] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Modal wrapperTemplate='white-box' isOpen={modalOpen} onClose={() => setModalOpen(false)} style={modalStyle}>
                <Calendar hideToday onDateSelect={(date) => setDate(date.getTime())} />
                <Button primary width='100%' onClick={() => setModalOpen(false)}>Save</Button>
            </Modal>
            <TextInput
                style={inputStyle}
                rightInner={<img src={calendarIcon} alt='calendar' />}
                readOnly
                onClick={() => setModalOpen(true)}
                value={date ? new Date(date).toLocaleDateString('en-EN') : ''}
                {...inputProps}
            />
        </>
    )
}

const StyledDateInput = styled.div`

`