import styled from "styled-components";

import Card from "react-bootstrap/Card";

const StyledGameCard = styled(Card)`
	overflow: hidden;
	align-items: center;
	width: 12rem;
	height: 22rem;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.card_light},
		${({ theme }) => theme.card_dark}
	);
	box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.card_highlight_dark};
	border-radius: 1.75rem;
	border: none;

	transition: ease-in-out 0.15s;
	&:hover {
		border: none;
		transform: perspective(70rem) rotateX(08deg) scale(1.05);
		box-shadow: 0rem 0rem 2rem ${({ theme }) => theme.card_highlight_light};
	}
`;

const StyledGameCardBody = styled(Card.Body)``;

const StyledImage = styled(Card.Img)`
	pointer-events: none;
	width: 12rem;
	height: auto;
`;

const StyledTitle = styled(Card.Title)`
	cursor: default;
	user-select: none;
	color: ${({ theme }) => theme.text_high};
	font-weight: 700;
	font-size: 1.1rem;
	text-align: center;
`;

const StyledText = styled(Card.Text)`
	cursor: default;
	user-select: none;
	color: ${({ theme }) => theme.text_medium};
	font-weight: 700;
	font-size: 1.1rem;
	text-align: center;
`;

export default function GameCard({ image, gameTitle, minutesToComplete }) {

	let hours = Math.floor(minutesToComplete / 60);
	let minutes = minutesToComplete % 60;

	return (
		<>
			<StyledGameCard>
				<StyledImage variant="top" src={image} />
				<StyledGameCardBody>
					<StyledTitle>{gameTitle}</StyledTitle>
					<StyledText>{hours}H {minutes}M</StyledText>
				</StyledGameCardBody>
			</StyledGameCard>
		</>
	);
}
