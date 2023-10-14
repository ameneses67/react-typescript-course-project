import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GridGame = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && (
				<Text
					color="tomato"
					fontSize="xl"
				>
					{error.code}: {error.message}
				</Text>
			)}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GridGame;
