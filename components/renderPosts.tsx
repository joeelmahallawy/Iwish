import { Box } from "@chakra-ui/layout";
import {
  Button,
  Flex,
  Text,
  Heading,
  Center,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import useGlobalValue from "../globalVariables/useGlobalState";
import { useAsyncFn, useUpdate } from "react-use";
import { TwitterClient } from "twitter-api-client";
import formatDate from "../helpers/formatDate";
import { ImProfile } from "react-icons/im";
import { IoMdArrowDropup } from "react-icons/io";
import handleCommentAdd from "../helpers/handleCommentAdd";

const RenderPosts = () => {
  const comment = useRef();
  let openComments = false;
  const [postsArray, setPostsArray] = useGlobalValue();
  const updateSelf = useUpdate();

  useEffect(() => {
    doFetch();
  }, []);

  const [posts, doFetch] = useAsyncFn(async () => {
    const response = await fetch("/api");
    const result = await response.json();
    setPostsArray([...postsArray, ...result.data]);
    console.log(result.data);
    return result.data;
  }, []);

  postsArray.forEach((post) => {
    if (!post.comments) post.comments = [];
    if (!post.upvotes) post.upvotes = 0;
  });

  return postsArray.map((post, i) => (
    <Box key={i} bg="white" mt={3}>
      <Box border="0.5px solid gray" borderRadius={5}>
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
            onClick={() => (post.openComments = true)}
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
            <IoMdArrowDropup size={30} />
            {post.upvotes}
          </Button>
        </Flex>
      </Box>
      {post.openComments && (
        // post.comments.map((comment, i) => (
        //   <Box>
        //     <Input />
        //   </Box>
        // ))

        <Center p={3}>
          {console.log("wow")}
          <ImProfile size="30" />
          {/* <Textarea
            h="20%"
            rows={1}
            _hover={{ bg: "none" }}
            placeholder="Add a comment..."
            // resize="none"
            _focus={{ outline: "none", border: "1px solid gray" }}
          /> */}
          <Input
            ml={3}
            w="80%"
            mr={1}
            onChange={() => console.log(comment.current)}
            ref={comment}
          />
          <Button
            colorScheme="messenger"
            onClick={() => {
              //   handleCommentAdd(comment.current.value);
              console.log(comment.current.value);
              // @ts-expect-error
              post.comments.push({ text: comment.current.value, upvotes: 0 });
              console.log(post);
            }}
          >
            {console.log(post)}
            Comment
          </Button>
        </Center>
      )}
    </Box>
  ));
};
export default RenderPosts;
