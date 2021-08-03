// import styled from "styled-components";
import { useState, useEffect } from "react";

import CenteredDiv from "../../components/Universal/CenteredDiv";
import TransparentCard from "../../components/Universal/TransparentCard/TransparentCard";

import { GameListItems, fetchGamesData } from "../../components/AdminPage/Game/GameListItemBusinessLogic";

// import InfoModal from "../../components/AdminPage/InfoModal/InfoModal";
// import DeleteModal from "../../components/AdminPage/DeleteModal/DeleteModal";

function AdminPage() {

	const [gameItems, setGameItems] = useState([]);
	const updateGamesData = async () => {
		fetchGamesData().then((res) => {
			setGameItems(res);
		});
	}

	useEffect(() => {
			updateGamesData();
	}, [])

	return (
		<>
			<CenteredDiv>
				<TransparentCard>
					<GameListItems gameItems={gameItems} />
				</TransparentCard>
			</CenteredDiv>
		
			{/* <InfoModal gameData={gameItems[0]}/> */}
			{/* <DeleteModal gameId={1} gameTitle={"Hollow Knight"}/> */}
		</>
	);
}

export default AdminPage;
