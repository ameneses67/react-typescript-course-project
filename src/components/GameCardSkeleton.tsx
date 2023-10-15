import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card
			rounded="xl"
			overflow="hidden"
		>
			<Skeleton height={{ base: "200px", "2xl": "300px" }} />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
