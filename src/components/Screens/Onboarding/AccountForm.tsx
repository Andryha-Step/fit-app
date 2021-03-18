import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import VerticalContainer from '../../VerticalContainer'
import { Title, Text, Input, Button, Select, Popup, TabSwitcher } from '../../Atoms';
import { InputProps } from '../../Atoms/Input'
import Flex from '../../Blocks/Flex'
import Backdrop from '../../Blocks/Onboarding/Backdrop'
import { useHistory } from 'react-router-dom'

export interface AccountFormScreenProps {

}

export default function AccountForm(props: AccountFormScreenProps): JSX.Element {

    const history = useHistory();
    const [popupOpen, setPopupOpen] = useState<'weight' | 'height' | null>(null);
    const [weightInput, setWeightInput] = useState<string>('');
    const [heightInput, setHeightInput] = useState<string>('');
    const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
    const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');


    const onNumberFocus = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLInputElement;
        const id = target.id as 'weight' | 'height' | null

        setPopupOpen(id)
    }

    useEffect(() => {
        document.getElementById(`${popupOpen}_input_integral`)?.focus()
        document.getElementById(`${popupOpen}_input`)?.focus()
    }, [popupOpen])

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		history.push('/suc')
	}

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
                return (target.value.replace(/[^0-9]/g,'') || '0') + '′' + (current.split('′')[1]?.replace('″', '') || '0') + '″'
            })
            if (target?.id === `${input}_input_fractional`) setInput((current) => {
                return (current.split('′')[0] || '0') + '′' + (target.value.replace(/[^0-9]/g,'') || '0') + '″'
            })
            return;
        } 

        setInput(target.value.replace(/[^0-9,.]/g,''))

    }

    const handleInputKeyDown = (e: React.SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
        const target = e.target as HTMLInputElement
        if (e.nativeEvent.key === 'Enter') {
            e.preventDefault();
            setPopupOpen(null);
        }

        if (target?.id === 'height_input_fractional' && e.nativeEvent.key === 'Backspace' && target?.value === '') {
            document.getElementById(`height_input_integral`)?.focus()
        }
    }

    const numericInputProps:InputProps = {
        onKeyDown: handleInputKeyDown,
        inputmode: "numeric",
        pattern: "\\d*",
        onChange: handleNumberInput,
        type: "number",
        color: "black",
    }

    return (
        <Backdrop blur>
            <Popup 
                isOpen={popupOpen !== null} 
                wrapperTemplate='white-box' 
                wrapperWidth='15rem' 
                onClose={() => setPopupOpen(null)}
            >
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        popupOpen === 'height' &&
                        <>
                            <TabSwitcher
                                currentTab={heightUnit}
                                onSwitch={(id: 'cm' | 'ft') => {
                                    setHeightUnit(id); 
                                    setHeightInput('');
                                    document.getElementById(`height_input_integral`)?.focus()
                                    document.getElementById(`height_input`)?.focus()
                                }}
                                tabs={[
                                    {title: 'CM', id: 'cm'},
                                    {title: 'Ft/In', id: 'ft'}
                                ]}
                                style={{marginBottom: '2rem'}}
                            />
                            {heightUnit === 'ft' ?
                                <Flex>
                                    <Input 
                                        style={{width: '50%', marginRight: '0'}} 
                                        placeholder={'169'} 
                                        step={1}
                                        id='height_input_integral' 
                                        value={heightInput.split('′')[0] === '0' ? '' : (heightInput.split('′')[0] || '')} 
                                        {...numericInputProps}
                                    />
                                    <Input 
                                        style={{width: '50%'}} 
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
                        popupOpen === 'weight' &&
                        <>
                            <TabSwitcher
                                currentTab={weightUnit}
                                onSwitch={(id: 'kg' | 'lbs') => {
                                    setWeightUnit(id); 
                                    setWeightInput('');
                                    document.getElementById(`weight_input`)?.focus();
                                }}
                                tabs={[
                                    {title: 'KG', id: 'kg'},
                                    {title: 'LBS', id: 'lbs'}
                                ]}
                                style={{marginBottom: '2rem'}}
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
            </Popup>
            <VerticalContainer>
                <Header>
                    <Title>Let’s get to know you</Title>
                    <Text>Share your details to setup a personalised experience.</Text>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <Input type="text" placeholder="First name">
                        First name
                    </Input>
                    <Input type="text" placeholder="Last Name">
                        Last Name
                    </Input>
                    <InputRowContainer>
                        <Input type="text" placeholder="60" id="weight" onFocus={onNumberFocus} value={weightInput === '0.0' ? '' : weightInput}>
                            Weight <span style={{color: '#B0B0B0', marginLeft: '0.2rem'}}> {weightUnit} </span>
                        </Input>
                        <Input type="text" placeholder="169" id="height" onFocus={onNumberFocus} value={heightInput === '0.0' ? '' : heightInput}>
                            Height <span style={{color: '#B0B0B0', marginLeft: '0.2rem'}}> {heightUnit} </span>
                        </Input>
                    </InputRowContainer>
                    <Select
                        options={[
                            {title: 'Be more active'},
                            {title: 'Lose weight'},
                            {title: 'Gain more weight'},
                            {title: 'Motivate myself'}
                        ]}
                        style={{marginBottom: '2rem'}}
                    >
                        What is your fitness goal?
                    </Select>
                    <Button primary>save</Button>
                </FormContainer>
            </VerticalContainer>
        </Backdrop>
    )
}

const Header = styled.header`
    height: 20vh;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const FormContainer = styled.form`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
`

const InputRowContainer = styled.div`
    display: flex;
    & > label {
        width: 50%;
    }
`