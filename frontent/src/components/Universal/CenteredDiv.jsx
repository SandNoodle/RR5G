import styled from "styled-components";

const StyledCenterDiv = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function CenteredDiv(props) {
	return(
		<>
			<StyledCenterDiv>{props.children}</StyledCenterDiv>
		</>
	);
}