import { getGames } from "../../../adapters/AdminPage/AdminPageAdapter";

import GameListItem from "./GameListItem";

export async function fetchGamesData() {
	return getGames()
			.then((res) => res.data)
			.catch((error) => {
				console.log("Error fetching game data! " + error);
			});
}

export function GameListItems({gameItems}) {
	if(!gameItems) {
		return (null);
	}

	return gameItems.map((game) => {
		return (
			<GameListItem
				key={game.id}
				gameTitle={game.title}
			/>
		);
	});
}
