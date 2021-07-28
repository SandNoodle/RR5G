import styled from "styled-components";
import { HeaderSmall } from "../../Universal/Header";

import { default as Button } from "../../Universal/Button";

import { FaTimesCircle as DeleteIcon } from "react-icons/fa";
import { IoIosInformationCircle as EditIcon } from "react-icons/io";
import { HiDotsCircleHorizontal as InfoIcon } from "react-icons/hi";

const StyledBody = styled.div`
	background: ${({ theme }) => theme.game_list_item_background};
	color: ${({ theme }) => theme.text_high};

	min-width: 100%;
	min-height: 4rem;
	border-radius: 0.75rem;

	padding: 1rem;

	display: flex;
	gap: 0.4rem;
	align-items: center;
`;

const StyledText = styled(HeaderSmall)`
	margin-top: auto;
	margin-bottom: auto;
`;

export default function GameListItem({ title }) {
	return (
		<>
			<StyledBody>
				<StyledText className="high">{title}</StyledText>
				<Button className="rounded">
					<InfoIcon size={32} />
				</Button>
				<Button className="rounded">
					<EditIcon size={32} />
				</Button>
				<Button className="rounded">
					<DeleteIcon size={32} />
				</Button>
			</StyledBody>
		</>
	);
}
