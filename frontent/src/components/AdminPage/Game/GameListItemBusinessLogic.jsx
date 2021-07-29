import { useState, useEffect } from "react";

import { getGames, updateGame } from "../../../adapters/AdminPage/AdminPageAdapter";

import GameListItem from "./GameListItem";

export function GameListItems(count) {
	const [gameItems, setGameItems] = useState([]);
	const fetchGames = async () => {
		getGames(count)
			.then((res) => {
				console.log(res.data);
				setGameItems(res.data);
			})
			.catch((error) => {
				console.log("Error fetching game data! " + error);
			});
	};
	
	useEffect(() => {
		fetchGames();
	}, []);

	return gameItems.map((game) => {
		return <GameListItem key={game.id} title={game.title}/>;
	});
}
