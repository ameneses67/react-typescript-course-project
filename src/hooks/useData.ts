import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";
import { GameQuery } from "../App";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	gameQuery?: GameQuery | null
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);

		apiClient
			.get<FetchResponse<T>>(endpoint, {
				signal: controller.signal,
				...requestConfig,
			})
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setLoading(false);
			});
		return () => controller.abort();
	}, [gameQuery]);

	return { data, error, isLoading };
};

export default useData;
