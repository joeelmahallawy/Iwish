import { Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import autosize from "autosize";
import handlePostAdd from "../helpers/handlePostAdd";
import { useMethods } from "react-use";
import { createMethods, initialState } from "../states/useMethods";

const AddPost = () => {
  const [state, methods] = useMethods(createMethods, initialState);

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
          methods.addPost(post.current.value);
          console.log("hi");
        }}
      >
        {console.log(state)}
        Post
      </Button>
    </Flex>
  );
};
export default AddPost;
