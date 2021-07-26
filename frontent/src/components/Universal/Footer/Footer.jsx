import React from "react";
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FooterLink from "./FooterLink";

import { GoMarkGithub, GoGitBranch } from "react-icons/go";
import { FaInfoCircle, FaShieldAlt, FaLock } from "react-icons/fa";


const CenterDiv = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
	justify-content: center;
	justify-items: center;
	align-items: center;
`;

const StyledFooter = styled(Navbar)`
	min-width: 100%;
	max-height: 4rem;
`;

const StyledContainer = styled(Container)`

`;

const StyledToggle = styled(Navbar.Toggle)`	
	background: ${({theme}) => theme.medium};
	
	justify-content: center;
	justify-items: center;
	align-items: center;

	&:hover {
		background: ${({theme}) => theme.text_high};
	}

	&:focus {
		background: ${({theme}) => theme.text_high};
}
`;


export default function PageFooter() {
	return (
		<>
			<StyledContainer>
				<StyledFooter fixed="bottom" expand="sm">
						<CenterDiv>
							<FooterLink><FaInfoCircle/> About</FooterLink>
							<FooterLink><FaShieldAlt/> Privacy</FooterLink>
							<FooterLink><FaLock/> Security</FooterLink>
							<FooterLink><GoMarkGithub/> GitHub</FooterLink>
							<FooterLink><GoGitBranch/> Changelog</FooterLink>
						</CenterDiv>
				</StyledFooter>
			</StyledContainer>
		</>
	);
}
