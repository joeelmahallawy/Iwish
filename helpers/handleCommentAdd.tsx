import Comments from "../classes/comments";
const handleCommentAdd = (text, commentsArr) => {
  const comment = new Comments(text, 0, new Date(), []);
  commentsArr.push(comment);
};
export default handleCommentAdd;
