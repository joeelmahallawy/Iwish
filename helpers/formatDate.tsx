import moment from "moment";
import date from "date-and-time";
import getSuffixDate from "./getSuffixDate";

export default function formatDate(post) {
  const Time = require("any-date-parser");

  const thisYear = new Date().getFullYear();
  const tweetYear = new Date(Time.fromAny(post.created_at)).getFullYear();
  const today = new Date().getDate();
  const tweetDay = new Date(Time.fromAny(post.created_at)).getDate();
  const yesterday = date.addDays(new Date(), -1).getDate();

  if (tweetDay == today) return "Today";
  if (tweetDay == yesterday) return "Yesterday";

  if (tweetYear != thisYear)
    return (
      date.format(new Date(Time.fromAny(post.created_at)), "MMM DD,YY") +
      getSuffixDate(
        date.format(new Date(Time.fromAny(post.created_at)), "MMM DD,YY")
      )
    );

  return (
    date.format(new Date(Time.fromAny(post.created_at)), "MMM DD") +
    getSuffixDate(
      date.format(new Date(Time.fromAny(post.created_at)), "MMM DD")
    )
  );
}
