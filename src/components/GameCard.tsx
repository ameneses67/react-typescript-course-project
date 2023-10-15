import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

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
				<Heading
					fontSize={"2xl"}
					marginBottom={2}
				>
					{game.name}
				</Heading>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map(
							(platform) => platform.platform
						)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
