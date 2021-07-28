import styled from "styled-components";

const StyledText = styled.p`
	display: inline;
	color: ${({theme}) => theme.text_medium};
	&.high {
		color: ${({theme}) => theme.text_high};
	}
	
	&.disabled {
		color: ${({theme}) => theme.text_disabled};
	}
`;

export default function Text(props) {
	return(
		<>
			<StyledText className={props.className}>{props.children}</StyledText>
		</>
	);
}