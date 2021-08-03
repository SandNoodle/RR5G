import { useState } from "react";
import styled from "styled-components";

import Modal from "react-bootstrap/Modal";
import ButtonComponent from "../../Universal/Button";
import { deleteGame } from "../../../adapters/AdminPage/AdminPageAdapter";

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
	white-space: nowrap;
`;

const StyledFooter = styled(Modal.Footer)`
	border-top: 2px solid ${({ theme }) => theme.text_low};
`;

export default function DeleteModal({ gameId, gameTitle }) {
	const [isVisible, SetVisible] = useState(false);

	const handleClose = () => SetVisible(false);
	// const handleShow = () => SetVisible(true);

	return (
		<>
			<StyledModal
				show={isVisible}
				onHide={handleClose}
				dialogClassName="content"
			>
				<StyledHeader>
					<StyledTitle>
						Do you reall want to delete {gameTitle}?
					</StyledTitle>
				</StyledHeader>

				<StyledFooter>
					<ButtonComponent
						className="delete-modal"
						onClick={() => {
							deleteGame(gameId);
							handleClose();
							window.location.reload();
						}}
					>
						Delete
					</ButtonComponent>
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
