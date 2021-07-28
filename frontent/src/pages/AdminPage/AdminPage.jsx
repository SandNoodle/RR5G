import styled from "styled-components";

import CenteredDiv from "../../components/Universal/CenteredDiv";
import TransparentCard from "../../components/Universal/TransparentCard/TransparentCard";

import GameListItem from "../../components/AdminPage/Game/GameListItem";

function AdminPage() {
	return (
		<>
			<CenteredDiv>
				<TransparentCard>
					<GameListItem title="TEST"  />
				</TransparentCard>
			</CenteredDiv>
		</>
	);
}

export default AdminPage;
