export default class Comments {
  text: any;
  upvotes: number;
  created_at: any;
  replies: any;
  constructor(text, upvotes, created_at, replies) {
    this.upvotes = upvotes;
    this.text = text;
    this.created_at = created_at;
    this.replies = replies;
  }
}
