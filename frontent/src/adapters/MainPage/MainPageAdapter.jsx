import { get } from "../BaseAdapter";

import { GET_RANDOM_FIVE_URL } from "../../config";

export function getGames(count) {
	const requestUrl = GET_RANDOM_FIVE_URL.concat(count);
	return get(requestUrl);
}