import { Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import autosize from "autosize";
import handlePostAdd from "../helpers/handlePostAdd";
import { createGlobalState, useMethods, useUpdate } from "react-use";
import { createMethods, initialState } from "../states/useMethods";
import useGlobalValue from "../globalVariables/useGlobalState";

const AddPost = () => {
  const [postsArray, setPostsArray] = useGlobalValue();
  const post = useRef();
  useEffect(() => {
    autosize(post.current);
    return () => {
      autosize.destroy(post.current);
    };
  }, []);

  return (
    <Flex w="50%" bg="#edf2f7" borderRadius="10px">
      <Box w="90%">
        <Textarea
          _hover={{ bg: "#edf2f7" }}
          variant="filled"
          w="100%"
          minHeight="80px"
          maxH="200px"
          placeholder="I wish..."
          fontSize="170%"
          resize="none"
          rows={2}
          ref={post}
          _focus={{ bg: "#edf2f7", outline: "none" }}
        />
        {/* <Flex>
          <Input type="image" />
        </Flex> */}
      </Box>
      <Button
        mt="auto"
        colorScheme="messenger"
        onClick={() => {
          // @ts-expect-error
          handlePostAdd([], 0, post.current.value, postsArray, setPostsArray);
        }}
      >
        {console.log(postsArray)}
        Post
      </Button>
    </Flex>
  );
};
export default AddPost;
