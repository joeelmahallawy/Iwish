export default function formatDate(post) {
  const Time = require("any-date-parser");
  const month = new Date(Time.fromAny(post.created_at)).getMonth();
  const day = new Date(Time.fromAny(post.created_at)).getDate();

  return `${month}/${day}`;
}
