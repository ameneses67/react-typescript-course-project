import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { AxiosError, CanceledError } from "../services/api-client";

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = gameService.get<FetchGamesResponse>();
		request
			.then((res) => {
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setLoading(false);
			});
		return () => cancel();
	}, []);

	return { games, error, isLoading };
};

export default useGames;
