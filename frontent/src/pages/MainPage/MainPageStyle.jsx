import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CenterDiv = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
`;

export const InnerDiv = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export const StyledContainer = styled(Container)`
	width: 100%;
`;

export const CardRow = styled(Row)`
	flex-grow: 0rem 1rem;
	gap: 1.2rem;
	padding-bottom: 2rem;
	justify-content: center;
`;

export const ButtonRow = styled(Row)`
	justify-content: center;
`;

export const StyledCol = styled(Col)``;