import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const color = score > 80 ? "green" : score > 60 ? "yellow" : "red";
	return (
		<Badge
			colorScheme={color}
			fontSize="md"
			rounded="md"
			paddingInline={2}
		>
			{score}
		</Badge>
	);
};

export default CriticScore;
