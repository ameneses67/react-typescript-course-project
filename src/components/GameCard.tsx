import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Game } from "../hooks/useGames";
import Emoji from "./Emoji";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card
			rounded="xl"
			overflow="hidden"
		>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack
					justifyContent="space-between"
					mb={3}
				>
					<PlatformIconList
						platforms={game.parent_platforms.map(
							(platform) => platform.platform
						)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading
					fontSize={"2xl"}
					marginBottom={2}
				>
					{game.name}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
