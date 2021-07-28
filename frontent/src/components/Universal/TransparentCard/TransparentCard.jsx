import styled from "styled-components";

import Card from "react-bootstrap/Card";

const StyledTransparentCard = styled(Card)`
	background: ${({ theme }) => theme.transparent_elevation};
	box-shadow: 0rem 0rem 4rem ${({ theme }) => theme.background_dark};
	width: 70vw;
	height: 70vh;
	max-width: 70%;
	max-height: 70%;
	padding: 1rem;
	border-radius: 2rem;

	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: top;
	align-items: center;
	overflow-y: auto;
	
	&.lastChildToBottom {
		& > :last-child{
			margin-top: auto;
		}
	}
`;

export default function TransparentCard(props) {
	return(
		<>
			<StyledTransparentCard className={props.className}>{props.children}</StyledTransparentCard>
		</>
	);
}