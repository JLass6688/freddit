class FeedPostType {
  static IMAGE = new FeedPostType('IMAGE');
  static TEXT = new FeedPostType('TEXT');
  static ARTICLE = new FeedPostType('ARTICLE');

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `${this.name}`;
  }
}

export default FeedPostType;