import styled from 'styled-components'

export interface FlexProps {
    column?: boolean
    center?: boolean
    flex?: string
    jc?: string
    ai?: string
    width?: string
    mb?: string
    mt?: string
    horizontalScroll?: boolean
    gap?: string
    pointer?: boolean,
    padding?: string
}

export default styled.div<FlexProps>`

    display: flex;

    ${p => p.column ? `
        flex-direction: column;
    ` : ''}

    ${p => p.center ? `
        justify-content: center;
        align-items: center;
    ` : ''}
    
    ${p => p.flex ? `
        flex: ${p.flex};
    ` : ''}

    ${p => p.jc ? `
        justify-content: ${p.jc};
    ` : ''}

    ${p => p.ai ? `
        align-items: ${p.ai};
    ` : ''}

    ${p => p.width ? `
        width: ${p.width};
    ` : ''}

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}

    ${p => p.mt ? `
        margin-top: ${p.mt};
    ` : ''}

    ${p => p.horizontalScroll ? `
        overflow-x: scroll;
    ` : ''}

    ${p => p.gap ? `
        gap: ${p.gap};
    ` : ''}

    ${p => p.pointer ? `
        cursor: pointer;
    ` : ''}

    ${p => p.padding ? `
        padding: ${p.padding};
    ` : ''}

    &::-webkit-scrollbar {
        display: none;
    }
`