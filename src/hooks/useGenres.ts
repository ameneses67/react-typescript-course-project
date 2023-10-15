import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "../services/api-client";
import genreService, { Genre } from "../services/genre-service";

interface FetchGenresResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = genreService.get<FetchGenresResponse>();
		request
			.then((res) => {
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err);
				setLoading(false);
			});
		return () => cancel();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
