export default function getSuffixDate(date: string) {
  switch (date.slice(-1)) {
    case "1":
      return "st";
    case "2":
      return "nd";
    case "3":
      return "rd";
    default:
      return "th";
  }
}
