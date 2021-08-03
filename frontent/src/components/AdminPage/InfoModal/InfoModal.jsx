import { useState } from "react";
import styled from "styled-components";

import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonComponent from "../../Universal/Button";
import Text from "../../Universal/Text";
import { HeaderSmall } from "../../Universal/Header";

const StyledModal = styled(Modal)`
	.content .modal-content {
		background-color: ${({ theme }) => theme.modal_background};
		box-shadow: 0rem 0rem 1rem ${({ theme }) => theme.background_dark};
		backdrop-filter: blur(4px);
		border: none;
		border-radius: 1rem;
	}
`;

const StyledHeader = styled(Modal.Header)`
	justify-content: center;
	border-bottom: 2px solid ${({ theme }) => theme.text_low};
`;

const StyledTitle = styled(Modal.Title)`
	color: ${({ theme }) => theme.text_high};
`;

const StyledImage = styled.img`
	max-width: 10rem;
	max-height: 12rem;
	border-radius: 0.5rem;
	box-shadow: 0rem 0rem 0.25rem ${({ theme }) => theme.background_dark};
`;

const StyledBody = styled(Modal.Body)`
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
`;

const StyledFooter = styled(Modal.Footer)`
	border-top: 2px solid ${({ theme }) => theme.text_low};
`;

const StyledRow = styled(Row)``;

const StyledCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-items: center;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	padding: 0.5rem;
`;

const StyledInfoWrapper = styled.div``;

export default function InfoModal( gameData ) {
	
	const [isVisible, SetVisible] = useState(false);

	const handleClose = () => SetVisible(false);
	// const handleShow = () => SetVisible(true);

	let hours = gameData.minutesToComplete
		? Math.floor(gameData.minutesToComplete / 60)
		: 0;
	let minutes = gameData.minutesToComplete
		? gameData.minutesToComplete % 60
		: 0;

	return (
		<>
			<StyledModal
				show={isVisible}
				onHide={handleClose}
				dialogClassName="content"
			>
				<StyledHeader>
					<StyledTitle>{gameData.title}</StyledTitle>
				</StyledHeader>
				<StyledBody>
					<StyledRow>
						<StyledCol>
							<StyledImage src={gameData.imageUrl} />
						</StyledCol>
						<StyledCol>
							<StyledInfoWrapper>
								<HeaderSmall>
									ID: <Text>{gameData.id}</Text>
								</HeaderSmall>
								<HeaderSmall>
									Time To Complete:{" "}
									<Text>
										{hours} H {minutes} M
									</Text>
								</HeaderSmall>
							</StyledInfoWrapper>
						</StyledCol>
					</StyledRow>
				</StyledBody>
				<StyledFooter>
					<ButtonComponent
						className="close-modal"
						onClick={handleClose}
					>
						Close
					</ButtonComponent>
				</StyledFooter>
			</StyledModal>
		</>
	);
}
