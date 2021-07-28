import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
	color: ${({theme}) => theme.text_low};

	justify-content: center;
	justify-items: center;
	align-items: center;
	
	user-select: none;
	cursor: pointer;
	text-decoration: none;

	transition: ease-in-out 0.15s;
	&:hover {
		color: ${({theme}) => theme.text_high};
	}

	.selected::after,
	&:focus,
	&:active {
		color: ${({theme}) => theme.text_high};
	}
`

export default function FooterNavLink(props) {
	return(
		<>
			<StyledNavLink to={props.to} exact activeClassName="selected" target={props.target} rel={props.rel}>{props.children}</StyledNavLink>
		</>
	);
}