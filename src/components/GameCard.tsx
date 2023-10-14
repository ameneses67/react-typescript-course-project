import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card
			rounded="xl"
			overflow="hidden"
		>
			<Image src={game.background_image} />
			<CardBody>
				<Heading
					fontSize={"2xl"}
					marginBottom={2}
				>
					{game.name}
				</Heading>
				<PlatformIconList
					platforms={game.parent_platforms.map((platform) => platform.platform)}
				/>
			</CardBody>
		</Card>
	);
};

export default GameCard;
