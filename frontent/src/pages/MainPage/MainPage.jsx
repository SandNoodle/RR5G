import { useState, useEffect } from "react";

import CenteredDiv from "../../components/Universal/CenteredDiv";
import RandomizeButton from "../../components/MainPage/RandomizationButton.jsx/RandomizeButton";

import { GameCards, fetchGameCardData } from "../../components/MainPage/GameCard/GameCardBusinessLogic";

import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InnerDiv = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const StyledContainer = styled(Container)`
	width: 100%;
`;

const CardRow = styled(Row)`
	flex-grow: 0rem 1rem;
	gap: 1.2rem;
	padding-bottom: 2rem;
	justify-content: center;
`;

const ButtonRow = styled(Row)`
	justify-content: center;
`;

const StyledCol = styled(Col)``;

function MainPage() {

	const [gameCardData, setGameCardData] = useState([]);
	const updateGameCardData = async (count) => {
		fetchGameCardData(count).then((res) => {
			setGameCardData(res);
		});
	}

	useEffect(() => {
		updateGameCardData(5);
	}, []);

	return (
		<>
			<CenteredDiv>
				<InnerDiv>
					<StyledContainer>
						<StyledCol>
							<CardRow>
								<GameCards gameData={gameCardData} /> 
							</CardRow>
						</StyledCol>
						<StyledCol>
							<ButtonRow>
								<RandomizeButton onClick={() => updateGameCardData(5)}>Give me 5!</RandomizeButton>
							</ButtonRow>
						</StyledCol>
					</StyledContainer>
				</InnerDiv>
			</CenteredDiv>
		</>
	);
}

export default MainPage;
