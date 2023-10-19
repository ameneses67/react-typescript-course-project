import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

	const skeletons = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];

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
				gap={10}
			>
				{isLoading &&
					skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
				{data.map((game) => (
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
