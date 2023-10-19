import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	const dataSortedByName = data.sort((a, b) => {
		const na = a.name,
			nb = b.name;
		if (na < nb) return -1;
		if (na > nb) return 1;
		return 0;
	});

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
			{dataSortedByName.map((genre) => (
				<ListItem key={genre.id}>
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text
							onClick={() => onSelectGenre(genre)}
							fontSize="lg"
							cursor="pointer"
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
