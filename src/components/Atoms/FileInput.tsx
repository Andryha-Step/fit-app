import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './Title'
import plus from '../../assets/icons/plus.svg'
import plusWhite from '../../assets/icons/plus-white.svg'
import image from '../../assets/icons/image-type.svg'
import imageWhite from '../../assets/icons/image-type-white.svg'

export interface FileInputProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    title?: string
    mb?: string
}

export default function FileInput(props: FileInputProps): JSX.Element {

    const { style, children, title, mb } = props
    const [isFilled, setIsFilled] = useState(false);

    const handleOnDragOver = () => {
        setIsFilled(true);
    }

    return (
        <label style={style}>
            {
                children ||
                (
                    title && <Title weight='400' size='1.1rem'>
                        {title}
                    </Title>
                )
            }
            <StyledDropZone
                isLabel={(!!children) || (!!title)}
                isFilled={isFilled}
                mb={mb}
                onDrop={(e) => { console.log(e); e.preventDefault(); setIsFilled(false) }}
                onDragOver={(e) => { e.preventDefault(); setIsFilled(true) }}
                onDragLeave={() => setIsFilled(false)}
            >
                <img src={isFilled ? imageWhite : image} alt='file type' style={{ height: '2rem' }} />
            </StyledDropZone>
        </label>
    )
}

const StyledFileInput = styled.div`

`

const StyledDropZone = styled.div<FileInputProps & { isLabel: boolean, isFilled: boolean }>`
    background: #F8F8F8;
    border-radius: 1rem;
    padding: 0 1rem;
    border: 2px dashed #429FBA;
    background: url(${plus}) no-repeat center;
    min-height: 3.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}

    ${p => p.isLabel ? `
        margin-top: .4rem;
    ` : ''}

    ${p => p.isFilled ? `
        background-color: #429FBA;
        background-image: url(${plusWhite})
    ` : ''}
`