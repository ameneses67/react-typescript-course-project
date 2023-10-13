import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
	return (
		<HStack
			justifyContent="space-between"
			padding="1rem"
		>
			<Image
				src={logo}
				alt="Game explorer logo"
				boxSize="60px"
			/>
			<DarkModeSwitch />
		</HStack>
	);
};

export default NavBar;
