// import styled from "styled-components";

import CenteredDiv from "../../components/Universal/CenteredDiv";
import TransparentCard from "../../components/Universal/TransparentCard/TransparentCard";

import { GameListItems } from "../../components/AdminPage/Game/GameListItemBusinessLogic";

function AdminPage() {
	return (
		<>
			<CenteredDiv>
				<TransparentCard>
					<GameListItems />
				</TransparentCard>
			</CenteredDiv>
		</>
	);
}

export default AdminPage;
