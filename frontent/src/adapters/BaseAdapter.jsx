import Axios from "axios";
import { BASEURL } from "../config";

function getAxiosInstance() {
	return Axios.create({
		baseURL: BASEURL,
		timeout: 5000, // ms
	});
}

export function get(url) {
	const axios = getAxiosInstance();
	return axios.get(url);
}

export function post(url, requestData) {
	const axios = getAxiosInstance();
	return axios.post(url, requestData);
}

export function put(url, putData) {
	const axios = getAxiosInstance();
	return axios.put(url, putData);
}

export function del(url, deleteData) {
	const axios = getAxiosInstance();
	return axios.delete(url,deleteData);
}