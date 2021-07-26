import { useState, useEffect } from "react";
import { getGames } from "../../../adapters/MainPage/MainPageAdapter";

import GameCard from "../GameCard/GameCard";

export function GameCards(count) {
	const [gameCards, setGameCards] = useState([]);
	const fetchGames = async () => {
		getGames(count).then((res) => {
			setGameCards(res.data);
		}).catch(error => {
			console.log("Error fetching game data! " + error);
		});
	};

	useEffect(() => {
		fetchGames();
	}, []);

	return gameCards.map((game) => {
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
