import { Flex, List, ListItem, Icon } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import Link from "next/link";

import { FaFacebook, FaPinterest } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ width: "100vw" }}>
      <Flex
        w="100%"
        h="200px"
        backgroundColor="brand.gray"
        minH="200px"
        paddingX={["0.3rem", "2rem"]}
        align="center"
        justify="space-around"
      >
        <Flex
          h="100%"
          w="25%"
          align="center"
          fontSize={["1rem", "1.5rem", "2rem"]}
        >
          <Logo
            props={{
              fontSize: "inherit",
              color: "brand.white",
              opacity: "0.5",
              marginRight: "1rem",
              width: "80%",
              h: "100%",
            }}
          />
          <Flex
            borderRadius="lg"
            opacity="0.3"
            h="80%"
            maxH="90%"
            w="2px"
            backgroundColor="brand.white"
          ></Flex>
        </Flex>
        <Flex
          w="75%"
          h="100%"
          //   border="solid blue 1px"
          justify="space-around"
          align="center"
          fontSize={["0.7rem", "0.8rem", "1rem"]}
          color="brand.white"
        >
          <List fontSize="inherit" color="inherit" spacing={4}>
            <ListItem
              opacity="0.5"
              transition="0.3s ease-in-out"
              _hover={{ opacity: "1" }}
            >
              <Link href="/" passHref>
                About Us
              </Link>
            </ListItem>
            <ListItem
              opacity="0.5"
              transition="0.3s ease-in-out"
              _hover={{ opacity: "1" }}
            >
              <Link href="/" passHref>
                Contact
              </Link>
            </ListItem>
            <ListItem
              opacity="0.5"
              transition="0.3s ease-in-out"
              _hover={{ opacity: "1" }}
            >
              <Link href="/" passHref>
                Careers
              </Link>
            </ListItem>
            <ListItem
              opacity="0.5"
              transition="0.3s ease-in-out"
              _hover={{ opacity: "1" }}
            >
              <Link href="/" passHref>
                News
              </Link>
            </ListItem>
          </List>
          <Flex align="center" fontSize="1.4rem" justify="space-around">
            <Link href="/" passHref>
              <a name="Facebook">
                <Icon
                  transition="0.3s ease-in-out"
                  opacity="0.5"
                  _hover={{ opacity: "1" }}
                  cursor="pointer"
                  mr="0.6rem"
                  as={FaFacebook}
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a name="Pinterest">
                <Icon
                  as={FaPinterest}
                  transition="0.3s ease-in-out"
                  opacity="0.5"
                  _hover={{ opacity: "1" }}
                  cursor="pointer"
                  mr="0.6rem"
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a name="LinkedIn">
                <Icon
                  as={RiLinkedinFill}
                  transition="0.3s ease-in-out"
                  opacity="0.5"
                  _hover={{ opacity: "1" }}
                  cursor="pointer"
                  mr="0.6rem"
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <a name="Twitter">
                <Icon
                  as={AiOutlineTwitter}
                  transition="0.3s ease-in-out"
                  opacity="0.5"
                  _hover={{ opacity: "1" }}
                  cursor="pointer"
                  mr="0.6rem"
                />
              </a>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
