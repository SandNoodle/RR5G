import styled from "styled-components";

import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
	padding: auto;
	align-content: center;
	justify-content: center;
	align-items: center;

	&.rounded {
		border-radius: 50%;
	}
`;

export default function ButtonComponent(props) {
	return (
		<>
			<StyledButton className={props.className} variant="primary" size="lg" type="button" onClick={props.onClick}>
				{props.children}
			</StyledButton>
		</>
	);
}