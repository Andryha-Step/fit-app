import styled from 'styled-components'

export interface FlexProps {
    column?: boolean
    center?: boolean
    flex?: string
    jc?: string
    ai?: string
    width?: string
    mb?: string
    horizontalScroll?: boolean
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

    ${p => p.horizontalScroll ? `
        overflow-x: scroll;
    ` : ''}

    &::-webkit-scrollbar {
        display: none;
    }
`