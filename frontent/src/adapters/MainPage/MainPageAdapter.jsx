import { get } from "../BaseAdapter";

import { GET_RANDOM_FIVE_URL } from "../../config";

export function getGames(count) {
	const requestString = GET_RANDOM_FIVE_URL.concat("");
	return get(requestString);
}