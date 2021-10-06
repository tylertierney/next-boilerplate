import BrandedHeading from "../BrandedHeading";
import BrandedSubheading from "../BrandedSubheading";
import BrandedParagraph from "../BrandedParagraph";
import BrandedOutlineBtn from "../BrandedOutlineBtn";
import ProductFeature from "../ProductFeature";
import MobileScreenshots from "../MobileScreenshots";
import IconList from "../IconList";

import Image from "next/image";
import remoteControlPic from "../../public/tv.jpeg";

import Particles from "../Particles/Particles";

import { Flex, useColorModeValue } from "@chakra-ui/react";

import theme from "../theme.js";

const WelcomeScreen = () => {
  const bgGradientColor = useColorModeValue(
    theme.colors.brand.white,
    theme.colors.gray["700"]
  );

  return (
    <>
      <section>
        <Flex
          maxW="100%"
          minW="100%"
          w="100%"
          direction={["column", "column", "column", "row"]}
          justify={["flex-start", "flex-start", "space-around"]}
        >
          <Flex
            direction="column"
            p={[
              "2rem 2rem 0 2rem",
              "2rem 2rem 0 2rem",
              "2rem 2rem 0 2rem",
              "2rem",
            ]}
          >
            <BrandedHeading>
              Leading the Evolution in Local OTT & CTV Advertising
            </BrandedHeading>
            <BrandedSubheading>
              Full-service solutions in 110+ markets
            </BrandedSubheading>
            <Flex w="100%" mb="2rem">
              <BrandedOutlineBtn
                name="Connect With Us"
                props={{ color: "red", mr: "0.8rem" }}
              >
                Connect With Us
              </BrandedOutlineBtn>
              <BrandedOutlineBtn name="View Examples" props={{ color: "blue" }}>
                View Examples
              </BrandedOutlineBtn>
            </Flex>
          </Flex>
          <Flex
            position="relative"
            justify="center"
            minW={["100vw", "100vw", "100vw", "500px"]}
            zIndex="-1"
          >
            <Image
              priority={true}
              alt="Person watching television"
              src={remoteControlPic}
            />
            <Flex
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg={[
                `linear-gradient(180deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 36%),
                linear-gradient(0deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 20%)`,
                ``,
                ``,
                `linear-gradient(90deg, ${bgGradientColor} 5%, rgba(255,255,255,0) 36%)`,
              ]}
            ></Flex>
          </Flex>
        </Flex>
      </section>
      <section className="flexColumn" style={{ alignItems: "center" }}>
        <Flex
          align="center"
          direction={["column", "column", "column", "row"]}
          pt="2rem"
          paddingX="1rem"
          mt={["2rem", "2rem", "2rem", "0"]}
          boxShadow="0px 0px 20px 1px rgb(0, 0, 0, 0.3)"
        >
          <ProductFeature
            icon="AiOutlineSafety"
            title="100% Brand-Safe Inventory"
            paragraph="We deliver your ads in brand-safe, premium content."
          />
          <ProductFeature
            icon="HiOutlineUserGroup"
            title="Audience Targeting"
            paragraph="We reach your desired audiences at scale using a catalogue of advanced targeting techniques."
          />
          <ProductFeature
            icon="GoGraph"
            title="Insights & Analytics"
            paragraph="We deliver transparent reporting and actionable insights."
          />
        </Flex>
      </section>
      <section
        className="flexColumn"
        style={{ alignItems: "center", marginBottom: "2rem" }}
      >
        <Flex
          // direction={["column", "column", "column", "row"]}
          pt="2rem"
          //   mt={["1rem", "2rem", "2rem", "0"]}
        >
          <Flex
            direction={["column", "column", "column", "row"]}
            p={["2rem 0 0 0", "2rem 0 0 0", "2rem 2rem 0 2rem", "2rem"]}
            align={[
              "flex-start",
              "flex-start",
              "flex-start",
              "center",
              "center",
            ]}
          >
            <Flex direction="column">
              <BrandedHeading>
                Complete control at your fingertips
              </BrandedHeading>
              <BrandedParagraph props={{ fontSize: "1.4rem" }}>
                Direct and analyze your campaign using our companion app.
              </BrandedParagraph>
            </Flex>
            <MobileScreenshots />
          </Flex>
        </Flex>
      </section>
      <Flex
        position="relative"
        mb="2rem"
        maxH="600px"
        w="100vw"
        h="100%"
        filter="drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))"
      >
        <Flex
          position="relative"
          minHeight={["500px", "400px", "300px"]}
          minW="100vw"
          backgroundColor={useColorModeValue(
            "brand.white",
            "rgb(55, 55, 55, 1)"
          )}
          w="100vw"
          h="100%"
          clipPath="polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)"
        >
          <IconList
            props={{
              position: "absolute",
              top: "50%",
              zIndex: "2",
              width: "100vw",
              transform: "translate(0, -50%)",
            }}
            items={[
              {
                icon: "HiOutlineDocumentReport",
                text: "Track impressions, conversion rates, and audience analytics.",
              },
              {
                icon: "FiEdit",
                text: "Adjust your campaign content to suit your changing business needs.",
              },
              {
                icon: "BsChatDots",
                text: "24/7 support from our network of advertising experts.",
              },
            ]}
          />
          <Particles />
        </Flex>
      </Flex>
    </>
  );
};

export default WelcomeScreen;
