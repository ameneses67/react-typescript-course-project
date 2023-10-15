import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card
			rounded="xl"
			overflow="hidden"
			width="100%"
		>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
