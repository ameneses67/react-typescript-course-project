import apiClient from "./api-client";

class HttpService {
	_endpoint: string;

	constructor(endpoint: string) {
		this._endpoint = endpoint;
	}

	get<T>() {
		const controller = new AbortController();

		const request = apiClient.get<T>(this._endpoint, {
			signal: controller.signal,
		});

		return { request, cancel: () => controller.abort() };
	}
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
