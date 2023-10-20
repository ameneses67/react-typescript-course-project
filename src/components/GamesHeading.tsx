import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
	} Games`;

	return (
		<Heading
			fontSize="5xl"
			mb={5}
		>
			{heading}
		</Heading>
	);
};

export default GamesHeading;
