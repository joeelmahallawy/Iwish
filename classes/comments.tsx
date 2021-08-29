export default class Comments {
  text: any;
  upvotes: number;
  created_at: any;
  constructor(text, upvotes, created_at) {
    this.upvotes = upvotes;
    this.text = text;
    this.created_at = created_at;
  }
}
