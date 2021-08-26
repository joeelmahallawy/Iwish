import { useMethods } from "react-use";

const initialState = [];

function createMethods(state) {
  return {
    reset() {
      return initialState;
    },
    addPost(post) {
      state.push(post);
      return state;
    },
  };
}

export { createMethods, initialState };
