import { DELETE_REMOVE_GAME_URL, GET_ALL_GAMES_URL, POST_NEW_GAME_URL, PUT_UPDADTE_GAME_URL } from "../../config";
import { del, get, post, put } from "../BaseAdapter";

export function getGames() {
	const requestUrl = GET_ALL_GAMES_URL;
	return get(requestUrl); 
}

export function addNewGame(gameData) {
	const requestUrl = POST_NEW_GAME_URL;
	return post(requestUrl, gameData);
}

export function deleteGame(gameId) {
	const requestUrl = DELETE_REMOVE_GAME_URL.concat(gameId);
	return del(requestUrl, null);
}

export function updateGame(gameId, updateData) {
	const requestUrl = PUT_UPDADTE_GAME_URL.concat(gameId);
	return put(requestUrl, updateData);
}