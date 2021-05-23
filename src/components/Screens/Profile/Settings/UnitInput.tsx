import React, { FocusEvent, FocusEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, InputProps, Modal, TabSwitcher, TextInput, Title } from '../../../Atoms';
import Flex from '../../../Blocks/Flex';

export interface UnitInputProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function UnitInput(props: UnitInputProps): JSX.Element {

    const { style } = props

    const [modalOpen, setModalOpen] = useState<'weight' | 'height' | null>(null);
    const [weightInput, setWeightInput] = useState<string>('');
    const [heightInput, setHeightInput] = useState<string>('');
    const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
    const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');


    const onNumberFocus: FocusEventHandler<HTMLInputElement> = (e: FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLInputElement;
        const id = target.id as 'weight' | 'height' | null

        setModalOpen(id)
    }

    useEffect(() => {
        document.getElementById(`${modalOpen}_input_integral`)?.focus()
        document.getElementById(`${modalOpen}_input`)?.focus()
    }, [modalOpen])


    const handleNumberInput = (e: React.SyntheticEvent<HTMLInputElement, InputEvent>) => {
        const target = e.target as HTMLInputElement

        let setInput: React.Dispatch<React.SetStateAction<string>>;
        let input = '';
        if (target?.id.includes('height')) {
            setInput = setHeightInput
            input = 'height'
        } else if (target?.id.includes('weight')) {
            setInput = setWeightInput
            input = 'weight'
        } else {
            return;
        }

        if (target?.id.includes('height') && heightUnit === 'ft') {
            // if (e.nativeEvent.data === '.') {
            //     document.getElementById(`${input}_input_fractional`)?.focus();
            //     return;
            // }
            if (target?.id === `${input}_input_integral`) setInput((current) => {
                return (target.value.replace(/[^0-9]/g, '') || '0') + '′' + (current.split('′')[1]?.replace('″', '') || '0') + '″'
            })
            if (target?.id === `${input}_input_fractional`) setInput((current) => {
                return (current.split('′')[0] || '0') + '′' + (target.value.replace(/[^0-9]/g, '') || '0') + '″'
            })
            return;
        }

        setInput(target.value.replace(/[^0-9,.]/g, ''))

    }

    const handleInputKeyDown = (e: React.SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
        const target = e.target as HTMLInputElement
        if (e.nativeEvent.key === 'Enter') {
            e.preventDefault();
            setModalOpen(null);
        }

        if (target?.id === 'height_input_fractional' && e.nativeEvent.key === 'Backspace' && target?.value === '') {
            document.getElementById(`height_input_integral`)?.focus()
        }
    }

    const numericInputProps: InputProps = {
        onKeyDown: handleInputKeyDown,
        inputmode: "numeric",
        pattern: "\\d*",
        onChange: handleNumberInput,
        type: "number",
        color: "black",
    }

    return (
        <Flex style={style} mb='1rem'>
            <Modal
                isOpen={modalOpen !== null}
                wrapperTemplate='white-box'
                wrapperWidth='15rem'
                onClose={() => setModalOpen(null)}
            >
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        modalOpen === 'height' &&
                        <>
                            <TabSwitcher
                                mb={'1rem'}
                                currentTab={heightUnit}
                                onSwitch={(id: 'cm' | 'ft') => {
                                    setHeightUnit(id);
                                    setHeightInput('');
                                    document.getElementById(`height_input_integral`)?.focus()
                                    document.getElementById(`height_input`)?.focus()
                                }}
                                tabs={[
                                    { title: 'CM', id: 'cm' },
                                    { title: 'Ft/In', id: 'ft' }
                                ]}
                                style={{ marginBottom: '2rem' }}
                                borderIndicatior
                            />
                            {heightUnit === 'ft' ?
                                <Flex>
                                    <Input
                                        style={{ width: '50%', marginRight: '0' }}
                                        placeholder={'169'}
                                        step={1}
                                        id='height_input_integral'
                                        value={heightInput.split('′')[0] === '0' ? '' : (heightInput.split('′')[0] || '')}
                                        {...numericInputProps}
                                    />
                                    <Input
                                        style={{ width: '50%' }}
                                        placeholder={'2'}
                                        id='height_input_fractional'
                                        value={heightInput.split('′')[1]?.replace('″', '') === '0' ? '' : (heightInput.split('′')[1]?.replace('″', '') || '')}
                                        {...numericInputProps}
                                    />
                                </Flex>
                                : <Input
                                    placeholder={'169'}
                                    id='height_input'
                                    value={heightInput}
                                    {...numericInputProps}
                                />
                            }

                        </>
                    }
                    {
                        modalOpen === 'weight' &&
                        <>
                            <TabSwitcher
                                mb={'1rem'}
                                currentTab={weightUnit}
                                onSwitch={(id: 'kg' | 'lbs') => {
                                    setWeightUnit(id);
                                    setWeightInput('');
                                    document.getElementById(`weight_input`)?.focus();
                                }}
                                tabs={[
                                    { title: 'KG', id: 'kg' },
                                    { title: 'LBS', id: 'lbs' }
                                ]}
                                style={{ marginBottom: '2rem' }}
                                borderIndicatior
                            />
                            <Input
                                placeholder={'60'}
                                id='weight_input'
                                value={weightInput}
                                {...numericInputProps}
                            />
                        </>
                    }
                </form>
            </Modal>
            <TextInput style={{ marginRight: '1rem' }} inputStyle={{ maxWidth: '20vw' }} placeholder="60" id="weight" onFocus={onNumberFocus} value={weightInput === '0.0' ? '' : weightInput} flex='1'>
                <Title weight='400' size='1.1rem' color="#636363">Weight ({weightUnit})</Title>
            </TextInput>
            <TextInput inputStyle={{ maxWidth: '20vw' }} placeholder="169" id="height" onFocus={onNumberFocus} value={heightInput === '0.0' ? '' : heightInput} flex='1'>
                <Title weight='400' size='1.1rem' color="#636363">Height ({heightUnit})</Title>
            </TextInput>
        </Flex>
    )
}