import styled from 'styled-components';

export default styled.div<{blur?: boolean}>`
	width: 100%;
    height: 100vh;
	/* min-height: -webkit-fill-available; */
	display: flex;
	justify-content: center;
	backdrop-filter: brightness(60%) ${p => p.blur ? 'blur(10px)' : ''};
    /* background: linear-gradient(180deg, rgba(27, 27, 27, 0) 50%, rgba(27, 27, 27, 0.85) 74.51%); */
`