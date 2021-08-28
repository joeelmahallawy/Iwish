import { Box } from "@chakra-ui/layout";
import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import useGlobalValue from "../globalVariables/useGlobalState";
import { useAsyncFn } from "react-use";
import { TwitterClient } from "twitter-api-client";
import formatDate from "../helpers/formatDate";

const RenderPosts = () => {
  const [postsArray, setPostsArray] = useGlobalValue();
  const Time = require("any-date-parser");

  //   FIXME:

  const [posts, doFetch] = useAsyncFn(async () => {
    const response = await fetch("/api");
    const result = await response.json();
    setPostsArray(result.data);
    return result.data;
  }, []);
  console.log("POSTSARRAY", postsArray);

  return postsArray.map((post, i) => (
    <Box key={i}>
      <Button onClick={doFetch}>CLICK FOR DATA</Button>
      {/* <Flex></Flex> */}
      <Flex>{post.text}</Flex>
      {formatDate(post)}
      {/* <Flex>{post.created_at}</Flex> */}
    </Box>
  ));
};
export default RenderPosts;
