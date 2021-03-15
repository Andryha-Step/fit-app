import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import VerticalContainer from '../../VerticalContainer'
import { Title, Text, Input, Button, Select, Popup, TabSwitcher } from '../../Atoms';
import { useHistory } from 'react-router-dom'

export interface AccountFormScreenProps {

}

export default function AccountForm(props: AccountFormScreenProps): JSX.Element {

    const history = useHistory();
    const [popupOpen, setPopupOpen] = useState<'weight' | 'height' | null>(null);
    const weightInputRef = useRef<HTMLInputElement>(null);
    const heightInputRef = useRef<HTMLInputElement>(null);

    const onNumberFocus = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLInputElement;
        const id = target.id as 'weight' | 'height' | null

        setPopupOpen(id)
    }

    useEffect(() => {
        console.log(weightInputRef.current)
        if (popupOpen === 'weight') {
            document.getElementById(`weight_input`)?.focus()
        }

        if (popupOpen === 'height') {
            document.getElementById(`height_input`)?.focus()
        }
    }, [popupOpen])

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		history.push('/suc')
	}

    return (
        <Backdrop>
            <Popup 
                isOpen={popupOpen !== null} 
                wrapperTemplate='white-box' 
                wrapperWidth='15rem' 
                onClose={() => setPopupOpen(null)}
            >
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        popupOpen === 'height' &&
                        <>
                            <TabSwitcher
                                tabs={[
                                    {title: 'CM', id: 'cm'},
                                    {title: 'FT', id: 'ft'}
                                ]}
                                style={{marginBottom: '2rem'}}
                            />
                            <Input type="number" color="black" placeholder={'169'} id='height_input' />
                        </>
                    }
                    {
                        popupOpen === 'weight' &&
                        <>
                            <TabSwitcher
                                tabs={[
                                    {title: 'KG', id: 'kg'},
                                    {title: 'LSB', id: 'lsb'}
                                ]}
                                style={{marginBottom: '2rem'}}
                            />
                            <Input type="number" color="black" placeholder={'60'} id='weight_input' />
                        </>
                    }
                </div>
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
                        <Input type="text" placeholder="60" id="weight" onFocus={onNumberFocus}>
                            Weight
                        </Input>
                        <Input type="text" placeholder="169" id="height" onFocus={onNumberFocus}>
                            Height
                        </Input>
                    </InputRowContainer>
                    <Select
                        options={[
                            {title: 'Be more active'},
                            {title: 'Lose weight'},
                            {title: 'Gain more weight'},
                            {title: 'Motivate myself'}
                        ]}
                        style={{marginBottom: '3rem'}}
                    >
                        What is your fitness goal?
                    </Select>
                    <Button primary>save</Button>
                </FormContainer>
            </VerticalContainer>
        </Backdrop>
    )
}

const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    backdrop-filter: brightness(40%) blur(10px);
`

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