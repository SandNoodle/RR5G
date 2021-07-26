import { useState, useEffect } from "react";

import RandomizeButton from "../../components/MainPage/RandomizationButton.jsx/RandomizeButton";

import { GameCards } from "../../components/MainPage/GameCard/GameCardBusinessLogic";

import {
	CenterDiv,
	InnerDiv,
	CardRow,
	ButtonRow,
	StyledContainer,
	StyledCol,
} from "./MainPageStyle";

function MainPage() {

	const [] = useState([]);

	useEffect(() => {
		
	}, []);

	return (
		<>
			<CenterDiv>
				<InnerDiv>
					<StyledContainer>
						<StyledCol>
							<CardRow>
								<GameCards />
							</CardRow>
						</StyledCol>
						<StyledCol>
							<ButtonRow>
								<RandomizeButton>Give me 5!</RandomizeButton>
							</ButtonRow>
						</StyledCol>
					</StyledContainer>
				</InnerDiv>
			</CenterDiv>
		</>
	);
}

export default MainPage;
