import styled from "styled-components";
import NavLink from "react-bootstrap/NavLink";


const StyledNavLink = styled(NavLink)`
	color: ${({theme}) => theme.text_medium};

	justify-content: center;
	justify-items: center;
	align-items: center;

	&:hover {
		color: ${({theme}) => theme.text_high};
	}

	&:focus {
		color: ${({theme}) => theme.text_high};
	}
`

export default function FooterLink(props) {
	return(
		<>
			<StyledNavLink>{props.children}</StyledNavLink>
		</>
	);
}