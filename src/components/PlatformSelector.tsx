import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	const dataSortedByName = data.sort((a, b) => {
		const na = a.name,
			nb = b.name;
		if (na < nb) return -1;
		if (na > nb) return 1;
		return 0;
	});

	return (
		<Menu>
			<MenuButton
				mb={4}
				as={Button}
				rightIcon={<BsChevronDown />}
			>
				{selectedPlatform?.name || "Platform"}
			</MenuButton>
			<MenuList>
				{dataSortedByName.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
