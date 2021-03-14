import React, { FormEvent } from 'react';
import styled from 'styled-components';
import VerticalContainer from '../../VerticalContainer'
import { Title } from '../../Title'
import { Text } from '../../Text'
import { Input } from '../../Input'
import { Button } from '../../Button'
import Select from '../../Select'
import { useHistory } from 'react-router-dom'

export interface AccountFormScreenProps {

}

export default function AccountForm(props: AccountFormScreenProps): JSX.Element {

    const history = useHistory();

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		history.push('/suc')
	}

    return (
        <Backdrop>
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
                        <Input type="text" placeholder="60">
                            Weight
                        </Input>
                        <Input type="text" placeholder="169">
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