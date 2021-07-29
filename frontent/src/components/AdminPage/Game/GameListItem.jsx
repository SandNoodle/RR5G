import styled from "styled-components";
import { HeaderSmall } from "../../Universal/Header";

import { default as Button } from "../../Universal/Button";

import { FaTimesCircle as DeleteIcon } from "react-icons/fa";
import { IoIosInformationCircle as InfoIcon } from "react-icons/io";
import { HiDotsCircleHorizontal as EditIcon } from "react-icons/hi";

const StyledBody = styled.div`
	background: ${({ theme }) => theme.game_list_item_background};
	color: ${({ theme }) => theme.text_high};

	min-width: 100%;
	min-height: 4rem;
	max-height: 4rem;
	border-radius: 0.75rem;

	margin-top: 0.125rem;
	margin-bottom: 0.125rem;
	padding: 1rem;

	display: flex;
	flex-direction: row;
	gap: 0.2rem;
	align-items: center;

	cursor: pointer;
	user-select: none;

	transition: ease-in-out 0.15s;
	&:hover {
		background: ${({ theme }) => theme.game_list_item_hover};
	}

	& > :last-child {
		margin-left: auto;
	}
`;

const StyledText = styled(HeaderSmall)`
	margin-top: auto;
	margin-bottom: auto;
`;

const Group = styled.div`
	display: flex;
`;

export default function GameListItem({ title, deleteEvent }) {
	return (
		<>
			<StyledBody>
				<StyledText className="high">{title}</StyledText>

				<Group>
					<Button className="icon info">
						<InfoIcon size={24} />
					</Button>
					<Button className="icon warning">
						<EditIcon size={24} />
					</Button>
					<Button className="icon danger">
						<DeleteIcon size={24} />
					</Button>
				</Group>
			</StyledBody>
		</>
	);
}
