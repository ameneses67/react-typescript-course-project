import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const bg = useColorModeValue(
		"rgba(0, 0, 0, 0.08)",
		"rgba(255, 255, 255, 0.08)"
	);

	return (
		<IconButton
			aria-label="Dark mode switch"
			bg="transparent"
			_hover={{ background: bg }}
			onClick={toggleColorMode}
		>
			{colorMode === "light" ? (
				<MoonIcon boxSize={5} />
			) : (
				<SunIcon boxSize={5} />
			)}
		</IconButton>
	);
};

export default DarkModeSwitch;
