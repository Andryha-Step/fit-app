import styled from 'styled-components'

export interface FlexProps {
    columns?: boolean
}

export default styled.div<FlexProps>`

    display: flex;

    ${p => p.columns ? `
        flex-direction: columns;
    ` : ''}
`