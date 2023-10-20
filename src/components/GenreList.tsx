import {
	List,
	ListItem,
	HStack,
	Image,
	Spinner,
	Button,
	Heading,
} from "@chakra-ui/react";
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
		<>
			<Heading
				mb={5}
				mt={2}
				fontSize="2xl"
			>
				Genres
			</Heading>
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
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								variant="link"
								fontSize="lg"
								whiteSpace="normal"
								textAlign="left"
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
