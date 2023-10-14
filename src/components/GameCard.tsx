import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import { Game } from "../services/game-service";

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
				<CardHeader>{game.name}</CardHeader>
			</CardBody>
		</Card>
	);
};

export default GameCard;
