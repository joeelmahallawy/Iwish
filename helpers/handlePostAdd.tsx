import Posts from "../classes/posts";
import useGlobalValue from "../globalVariables/useGlobalState";

const handlePostAdd = (comments, upvotes, text, postArray, setPostArray) => {
  const post = new Posts(comments, upvotes, text, new Date());
  postArray.unshift(post);
  setPostArray([...postArray]);
};
export default handlePostAdd;
