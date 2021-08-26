import { Box } from "@chakra-ui/react";
import React from "react";
import { useMethods } from "react-use";
import { createMethods, initialState } from "../states/useMethods";

const handlePostAdd = (post, postArrFunction) => {
  postArrFunction(post);
};
export default handlePostAdd;
