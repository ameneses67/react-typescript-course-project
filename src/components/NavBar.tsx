import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack padding="1rem">
			<Image
				src={logo}
				alt="Game explorer logo"
				boxSize="60px"
			/>
			<SearchInput />
			<DarkModeSwitch />
		</HStack>
	);
};

export default NavBar;
