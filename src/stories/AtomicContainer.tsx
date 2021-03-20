import styled from 'styled-components';

export type bgType = 'dark' | 'light'

const bgs = {
    dark: 'linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%)',
    light: '#F8F8F8'
}

export default styled.div<{background?: bgType}>`
    display: flex;
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    background: ${p => bgs[p.background || 'light']};
`