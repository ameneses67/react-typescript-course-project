import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
				{isLoading &&
					skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
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

export default GameGrid;
