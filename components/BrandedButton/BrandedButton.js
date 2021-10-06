import { Button, Text, Icon } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLoaderCircle } from "react-icons/bi";

const BrandedButton = ({
  variant,
  action,
  color,
  href,
  children,
  props,
  disabled,
  isLoading,
  setIsLoading,
  name,
}) => {
  const ref = useRef(null);

  // const [isLoading, setIsLoading] = useState(false);
  const [minW, setMinW] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setMinW(ref.current.getBoundingClientRect().width);

    const handleRouteChange = (url, { shallow }) => {
      setIsLoading(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // return () => {
    //   router.events.off("routeChangeComplete", handleRouteChange);
    // };
  }, []);

  let bgColor;
  let textColor;
  switch (color) {
    case "primary":
      bgColor = "brand.primary.1000";
      textColor = "white";
      break;
    case "secondary":
      bgColor = "brand.secondary.1000";
      textColor = "white";
      break;
    case "none":
      bgColor = "transparent";
      textColor = "brand.text.dark";
      break;
    default:
      bgColor = "brand.primary.1000";
      textColor = "white";
      break;
  }

  console.log(name);

  const button = (
    <Button
      ref={ref}
      variant={variant}
      backgroundColor={bgColor}
      transition="0.3s ease-in-out"
      color={textColor}
      _hover={
        variant === "ghost"
          ? { opacity: "0.5" }
          : {
              boxShadow: "xl",
            }
      }
      _focus={{ outline: "none" }}
      p="0.9rem 0.6rem"
      onClick={() => setIsLoading(true)}
      minW={minW ? `${minW}px` : ""}
      type="submit"
      opacity={isLoading ? "0.4" : "1"}
      name={name}
      {...props}
    >
      {isLoading ? (
        <Icon
          color={textColor}
          as={BiLoaderCircle}
          className="spinnerIcon"
          fontSize="1.3rem"
        />
      ) : (
        <Text as="span" color={textColor}>
          {children}
        </Text>
      )}
    </Button>
  );

  if (action === "link") {
    return <Link href={href}>{button}</Link>;
  } else {
    return button;
  }
};

export default BrandedButton;
