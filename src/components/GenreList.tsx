import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

	return (
		<List
			spacing="4"
			position="relative"
		>
			{isLoading && (
				<Spinner
					position="absolute"
					marginLeft="50%"
					marginTop="50%"
				/>
			)}
			{error && null}
			{data.map((genre) => (
				<ListItem key={genre.id}>
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
