import styled from "styled-components";
import { css } from "styled-components";

const sharedStyle = css`
	color: ${({theme}) => theme.text_high};
	letter-spacing: 0rem;
`;

export const HeaderLarge = styled.h1`
	${sharedStyle}
	font-weight: 500;
	font-size: 3rem;
`;

export const HeaderMedium = styled.h2`
	${sharedStyle}
	font-weight: 500;
	font-size: 2rem;
`;

export const HeaderSmall = styled.h3`
	${sharedStyle}
	font-weight: 400;
	font-size: 1.25rem;
`;
