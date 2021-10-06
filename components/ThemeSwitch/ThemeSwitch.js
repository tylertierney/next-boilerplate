import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={
        colorMode === "light" ? (
          <MoonIcon color="brand.text.dark" />
        ) : (
          <SunIcon color="brand.text.dark" />
        )
      }
      onClick={toggleColorMode}
      color="black"
      variant="unstyled"
      _focus={{ outline: "none" }}
      name="Dark or light theme"
    />
  );
};

export default ThemeSwitch;
