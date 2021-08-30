import moment from "moment";
import date from "date-and-time";
import getSuffixDate from "./getSuffixDate";

export default function formatDate(post) {
  const Time = require("any-date-parser");

  const thisYear = new Date().getFullYear();
  const tweetYear = new Date(Time.fromAny(post.created_at)).getFullYear();
  const tweetDay = new Date(Time.fromAny(post.created_at)).getDate();
  const yesterday = date.addDays(new Date(), -1).getDate();

  const timeBetweenNowAndPost = date
    .subtract(new Date(), new Date(Time.fromAny(post.created_at)))
    .toHours();
  if (timeBetweenNowAndPost < 24 && timeBetweenNowAndPost > 1)
    return `${Math.floor(timeBetweenNowAndPost)}h`;
  if (timeBetweenNowAndPost < 1)
    return `${Math.floor(timeBetweenNowAndPost * 60)} mins`;

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
