import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const color = useColorModeValue("gray.500", "gray.400");

	return (
		<IconButton
			aria-label="Dark mode switch"
			onClick={toggleColorMode}
			color={color}
			size="lg"
			variant="ghost"
		>
			{colorMode === "light" ? <BsMoonStarsFill /> : <FaSun />}
		</IconButton>
	);
};

export default DarkModeSwitch;
