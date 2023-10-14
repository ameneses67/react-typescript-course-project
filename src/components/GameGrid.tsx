import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

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
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}
				padding={{ base: "1rem", md: "2rem", lg: "3rem" }}
			>
				{games.map((game) => (
					<GameCard
						game={game}
						key={game.id}
					/>
				))}
			</SimpleGrid>
		</>
	);
};

export default GridGame;
