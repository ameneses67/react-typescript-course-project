import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { genres, isLoading, error } = useGenres();

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
			{genres.map((genre) => (
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
