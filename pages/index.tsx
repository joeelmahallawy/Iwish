import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import image from "../logoImage/iwish_logo.jpeg";
import AddPost from "../components/addPost";

const IndexPage = () => {
  return (
    <Box>
      <Center bg="#f2eddb">
        <Box w="200px" mt={-20} h="100px">
          <Image
            src={image.src}
            h="100%"
            w="100%"
            objectFit="cover"
            alt="Iwish Logo"
          />
        </Box>
      </Center>
      <Center flexDir="column" w="100vw">
        {/* POSTS */}
        <Box w="60%">
          <AddPost />
          <Heading>hi</Heading>
        </Box>
      </Center>
    </Box>
  );
};

export default IndexPage;
