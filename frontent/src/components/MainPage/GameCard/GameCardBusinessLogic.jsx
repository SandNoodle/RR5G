import { getGames } from "../../../adapters/MainPage/MainPageAdapter";

import GameCard from "../GameCard/GameCard";

export function GameCards({ gameData }) {
	if(!gameData) {
		return (null);
	}

	return gameData.map((game) => {
		return (
			<GameCard
				key={game.id}
				gameTitle={game.title}
				image={game.imageUrl}
				minutesToComplete={game.minutesToComplete}
			/>
		);
	});
}

export async function fetchGameCardData(count) {
	return getGames(count)
			.then((res) => res.data)
			.catch((error) => {
				console.log("Error fetching game data! " + error);
			});
}
