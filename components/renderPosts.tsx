import { Box } from "@chakra-ui/layout";
import { Button, Flex, Text, Heading, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useGlobalValue from "../globalVariables/useGlobalState";
import { useAsyncFn, useUpdate } from "react-use";
import { TwitterClient } from "twitter-api-client";
import formatDate from "../helpers/formatDate";
import { ImProfile } from "react-icons/im";
import { IoMdArrowDropup } from "react-icons/io";

const RenderPosts = () => {
  const updateSelf = useUpdate();
  useEffect(() => {
    doFetch();
    console.log("USE EFFECT HOOK CALLED");
  }, []);

  const [posts, doFetch] = useAsyncFn(async () => {
    const response = await fetch("/api");
    const result = await response.json();
    setPostsArray([...postsArray, ...result.data]);
    console.log(result.data);
    return result.data;
  }, []);

  const [postsArray, setPostsArray] = useGlobalValue();
  postsArray.forEach((post) => {
    if (!post.comments) post.comments = [];
    if (!post.upvotes) post.upvotes = 0;
  });

  return postsArray.map((post, i) => (
    <Box key={i} border="1px solid black" bg="white" mt={3}>
      <Flex justifyContent="space-between" p={5}>
        <Center>
          <ImProfile size="30" />
          <Text color="darkblue" ml={1}>
            Anonymous
          </Text>
        </Center>
        <Text color="gray.600">Posted {formatDate(post)}</Text>
      </Flex>
      <Flex p={5}>{post.text}</Flex>
      <Flex justifyContent="flex-end" mt="auto">
        <Button
          size="lg"
          ml={2}
          bg="transparent"
          _focus={{ outline: "none" }}
          _hover={{ bg: "gray.200" }}
        >
          Comment
        </Button>
        <Button
          size="lg"
          bg="transparent"
          _focus={{ outline: "none" }}
          _hover={{ bg: "gray.200" }}
          mr={3}
          onClick={() => {
            post.upvotes = post.upvotes + 1;
            updateSelf();
            console.log(post);
          }}
        >
          {/* <Box> */}
          <IoMdArrowDropup size={30} />
          {post.upvotes}
          {/* </Box> */}
        </Button>
      </Flex>
    </Box>
  ));
};
export default RenderPosts;
