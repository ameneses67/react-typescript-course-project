import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
						<Text
							cursor="pointer"
							fontSize="lg"
							onClick={() => onSelectedGenre(genre)}
							fontWeight={genre.id === selectedGenre?.id ? "black" : "normal"}
						>
							{genre.name}
						</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
