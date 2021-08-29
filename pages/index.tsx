import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import image from "../logoImage/requestforstartup_transparentbackground.jpeg";
import AddPost from "../components/addPost";
import RenderPosts from "../components/renderPosts";

// FIXME:FIXME:FIXME:FIXME:THEME COLOR #f1f3f4FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:
const IndexPage = () => {
  return (
    <Box h="100%" bg="#FFFAF0">
      <Center id="nav">
        <Box w="440px" h="100px">
          <Image
            src={image.src}
            bgBlendMode="color"
            h="100%"
            w="100%"
            alt="Iwish Logo"
          />
        </Box>
      </Center>
      <Center flexDir="column" w="100vw">
        {/* POSTS */}
        <Flex w="60%" flexDir="column">
          <Box p={5} border="1px solid gray">
            <Heading>Home</Heading>
          </Box>
          <Center flexDir="column">
            <AddPost />
            <Box w="75%">
              <RenderPosts />
            </Box>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
};

export default IndexPage;
