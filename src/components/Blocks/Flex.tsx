import styled from 'styled-components'

export interface FlexProps {
    columns?: boolean
    center?: boolean
    flex?: string
    jc?: string
    ai?: string
}

export default styled.div<FlexProps>`

    display: flex;

    ${p => p.columns ? `
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
`