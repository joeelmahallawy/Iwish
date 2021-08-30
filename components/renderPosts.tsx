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
  let showReply;
  const [postsArray, setPostsArray] = useGlobalValue();
  const updateSelf = useUpdate();

  useEffect(() => {
    doFetch();
  }, []);

  const [posts, doFetch] = useAsyncFn(async () => {
    const response = await fetch("/api");
    const result = await response.json();
    setPostsArray([...postsArray, ...result.data]);
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
            onClick={() => {
              post.openComments = true;
              updateSelf();
            }}
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
        <>
          {post.comments.map((comment, i) => (
            <Box key={i}>
              <Flex p={3}>
                <Box bg="gray.100" p={3} w="100%" borderRadius={5}>
                  <Flex justifyContent="space-between">
                    <Flex>
                      <ImProfile size="30" />
                      <Text ml={1} fontSize="110%" fontWeight="600">
                        Anonymous {i + 1}
                      </Text>
                    </Flex>
                    {formatDate(comment)}
                  </Flex>
                  <Flex mt={3}>
                    <Text
                      fontWeight="400"
                      fontSize="110%"
                      mt={1}
                      bg="white"
                      w="100%"
                      p={2}
                      borderRadius={5}
                    >
                      {comment.text}
                    </Text>
                  </Flex>
                  <Flex justifyContent="flex-end">
                    {/* FIXME:FIXME: */}
                    <Button
                      mt={2}
                      bg="transparent"
                      _focus={{ outline: "none" }}
                      _hover={{ bg: "gray.200" }}
                      onClick={() => {
                        showReply = true;
                        updateSelf();
                      }}
                    >
                      Reply
                    </Button>
                    <Button
                      mt={2}
                      bg="transparent"
                      _focus={{ outline: "none" }}
                      _hover={{ bg: "gray.200" }}
                      onClick={() => {
                        comment.upvotes = comment.upvotes + 1;
                        updateSelf();
                      }}
                    >
                      <IoMdArrowDropup size={30} />
                      {comment.upvotes}
                    </Button>
                    {/* FIXME:FIXME: */}
                  </Flex>
                </Box>
              </Flex>
              {showReply && console.log("hi")}
              {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}
              {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}
              {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}
              {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:\ */}
            </Box>
          ))}
          <Center p={3}>
            <ImProfile size="30" />
            <Input ml={3} w="80%" mr={1} ref={comment} />
            <Button
              colorScheme="messenger"
              onClick={() => {
                //   @ts-expect-error
                handleCommentAdd(comment.current.value, post.comments);
                updateSelf();
              }}
            >
              {console.log(post)}
              Comment
            </Button>
          </Center>
        </>
      )}
    </Box>
  ));
};
export default RenderPosts;
