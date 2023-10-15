import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const bg = useColorModeValue(
		"rgba(0, 0, 0, 0.08)",
		"rgba(255, 255, 255, 0.08)"
	);
	const color = useColorModeValue("gray.500", "gray.400");

	return (
		<IconButton
			aria-label="Dark mode switch"
			bg="transparent"
			_hover={{ background: bg }}
			onClick={toggleColorMode}
			color={color}
		>
			{colorMode === "light" ? <BsMoonStarsFill /> : <FaSun />}
		</IconButton>
	);
};

export default DarkModeSwitch;
