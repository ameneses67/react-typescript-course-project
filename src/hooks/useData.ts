import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { AxiosError, CanceledError } from "../services/api-client";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpointService) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = endpointService.get<FetchResponse<T>>();
		request
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setLoading(false);
			});
		return () => cancel();
	}, []);

	return { data, error, isLoading };
};

export default useData;
