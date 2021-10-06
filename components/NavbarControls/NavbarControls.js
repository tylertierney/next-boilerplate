import { Flex } from "@chakra-ui/react";
import BrandedButton from "../BrandedButton/BrandedButton";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useState } from "react";
import { useUser } from "../../context/authContext";
import UserMenu from "./UserMenu";

const NavbarControls = () => {
  // const [loginDisabled, setLoginDisabled] = useState(false);
  // const [signupDisabled, setSignupDisabled] = useState(false);

  const [loginIsLoading, setLoginIsLoading] = useState(false);
  const [signupIsLoading, setSignupIsLoading] = useState(false);

  const { user } = useUser();

  return (
    <Flex align="center" justify="center" h="100%">
      <ThemeSwitch />
      {user ? (
        <UserMenu />
      ) : (
        <>
          <BrandedButton
            props={{ margin: "0px 4px" }}
            variant="ghost"
            color="none"
            action="link"
            href="/login"
            isLoading={loginIsLoading}
            setIsLoading={setLoginIsLoading}
            name="Log In"
          >
            Log In
          </BrandedButton>
          <BrandedButton
            variant="solid"
            color="primary"
            action="link"
            href="/signup"
            props={{ margin: "0px 4px", maxH: "90%" }}
            isLoading={signupIsLoading}
            setIsLoading={setSignupIsLoading}
            name="Sign Up"
          >
            Sign Up
          </BrandedButton>
        </>
      )}
    </Flex>
    //   )}
    // </>
  );
};

export default NavbarControls;
