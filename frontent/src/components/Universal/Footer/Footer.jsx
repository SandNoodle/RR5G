import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FooterNavLink from "./FooterNavLink";
import Link from "../Link";

import { GoMarkGithub } from "react-icons/go";
import { FaInfoCircle, FaShieldAlt, FaLock } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { GITHUB_URL } from "../../../config";

const CenterDiv = styled.div`
	width: 100%;
	display: flex;
	gap: 3rem;
	justify-content: center;
	justify-items: center;
	align-items: center;
	margin-bottom: 1rem;
`;

const StyledFooter = styled(Navbar)`
	min-width: 100%;
	max-height: 4rem;
`;

const StyledContainer = styled(Container)``;

export default function PageFooter() {
	return (
		<>
			<StyledContainer>
				<StyledFooter fixed="bottom" expand="sm">
					<CenterDiv>
						<FooterNavLink to="/about">
							<FaInfoCircle />
						</FooterNavLink>
						<FooterNavLink to="/privacy">
							<FaShieldAlt /> 
						</FooterNavLink>
						<FooterNavLink to="/">
							<HiHome size={32} />
						</FooterNavLink>
						<FooterNavLink to="/security">
							<FaLock /> 
						</FooterNavLink>
						<Link
							to={GITHUB_URL}
							target="_blank"
							className="footerLink"
						>
							<GoMarkGithub /> 
						</Link>
					</CenterDiv>
				</StyledFooter>
			</StyledContainer>
		</>
	);
}
