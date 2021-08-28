export default class Posts {
  comments: any;
  upvotes: number;
  text: any;
  constructor(comments, upvotes, text) {
    this.comments = comments;
    this.upvotes = upvotes;
    this.text = text;
  }
}
