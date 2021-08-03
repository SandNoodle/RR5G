import styled from "styled-components";

import Button from "react-bootstrap/Button";

const StyledButton = styled(Button)`
	padding: auto;
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;

	background: none;
	border: none;
	color: ${({ theme }) => theme.text_medium};

	&.close-modal {
		background: none;
		
		text-transform: uppercase;
		font-weight: 500;

		&:hover {
			color: ${({ theme }) => theme.text_high};
			background: ${({theme}) => theme.info};
		}
	}

	&.delete-modal {
		color: ${({ theme }) => theme.text_high};
		background: ${({theme}) => theme.danger};
		
		text-transform: uppercase;
		font-weight: 500;

		&:hover {
			filter: brightness(1.1);
		}
	}

	&.icon {
		overflow:hidden;
		padding: 0.0rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		border-radius: 100%;
		background:none;

		&:hover {
			color: ${({ theme }) => theme.text_high};
		}
		
		&.danger {
			&:hover {
				color: ${({ theme }) => theme.danger};
			}
		}

		&.warning {
			&:hover {
				color: ${({ theme }) => theme.warning};
			}
		}

		&.info {
			&:hover {
				color: ${({ theme }) => theme.info};
			}
		}
	}
`;

export default function ButtonComponent(props) {
	return (
		<>
			<StyledButton
				className={props.className}
				variant="primary"
				size="lg"
				type="button"
				onClick={props.onClick}
			>
				{props.children}
			</StyledButton>
		</>
	);
}
