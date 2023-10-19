import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<Flex
			padding="1rem"
			alignItems="center"
		>
			<Image
				src={logo}
				alt="Game explorer logo"
				boxSize="60px"
			/>
			<SearchInput onSearch={onSearch} />
			<DarkModeSwitch />
		</Flex>
	);
};

export default NavBar;
