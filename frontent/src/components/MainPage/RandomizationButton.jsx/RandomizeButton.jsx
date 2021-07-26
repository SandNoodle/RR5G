import styled from "styled-components";

import Button from "react-bootstrap/Button";
import { BsFillCaretRightFill as RightArrow } from "react-icons/bs";

const ButtonWithIcon = styled(Button)`
	background: linear-gradient(
			45deg,
			${({ theme }) => theme.primary},
			${({ theme }) => theme.primary}
		);;
	color: ${({ theme }) => theme.text_info};
	box-shadow: 0rem 0rem 0.5rem ${({ theme }) => theme.background_dark};
	border-radius: 1.75rem;
	border: none;
	width: 14rem;
	padding: 1rem 1rem 1rem 1rem;
	text-transform: uppercase;
	font-weight: 500;
	
	transition: ease-in-out 0.15s;
	
	&:focus,
	&:hover {
		background: linear-gradient(
			45deg,
			${({ theme }) => theme.primary},
			${({ theme }) => theme.secondary}
		);
		box-shadow: 0rem 0rem 1.75rem ${({ theme }) => theme.primary};
		transform: scale(1.025);
	}
`;

const StyledDiv = styled.div`
	display: flex;
	vertical-align: middle;
	align-items: center;
	justify-content: center;
`;

export default function RandomizeButton(props) {
	return (
		<>
			<ButtonWithIcon variant="primary" size="lg" type="button" onClick={props.onClick}>
				<StyledDiv>
				{props.children}
				<RightArrow />
				</StyledDiv>
			</ButtonWithIcon>
		</>
	);
}
