import styled from "styled-components";

const StyledLink = styled.a`
	color: ${({ theme }) => theme.primary};
	text-decoration: none;

	transition: ease-in-out 0.15s;
	&:hover {
		color: ${({ theme }) => theme.text_high};
	}

	&.footerLink {
		color: ${({ theme }) => theme.text_low};
	
		&:hover {
			color: ${({ theme }) => theme.text_high};
		}
	}
`;

export default function Link(props) {
	return (
		<>
			<StyledLink href={props.to} target={props.target} className={props.className}>
				{props.children}
			</StyledLink>
		</>
	);
}
