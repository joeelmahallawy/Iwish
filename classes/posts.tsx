export default class Posts {
  comments: any;
  upvotes: number;
  text: any;
  created_at: any;
  constructor(comments, upvotes, text, created_at) {
    this.comments = comments;
    this.upvotes = upvotes;
    this.text = text;
    this.created_at = created_at;
  }
}
