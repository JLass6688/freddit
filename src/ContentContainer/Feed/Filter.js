class Filter {
  static HOT = new Filter('Hot');
  static NEW = new Filter('New');
  static TOP = new Filter('Top');

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Filter.${this.name}`;
  }
}

export default Filter;