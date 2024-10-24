import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./constant";
import { toast } from "react-toastify";

export function httpPost(path: string, errMsg: string, todo: (res: AxiosResponse | void) => void, data?: unknown) {
	axios.post(BASE_URL + path, undefined, { params: { data: data } })
		.catch(err => {
			console.log(err);
			toast.error(errMsg + ', error:' + err);
		})
		.then(todo)
	// !, { params: { data: data } }

}