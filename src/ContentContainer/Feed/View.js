class View {
  static CARD = new View('card');
  static COMPACT = new View('compact');
  static CLASSIC = new View('classic');

  constructor(name) {
    this.name = name;
  }

  toString() {
    return `View.${this.name}`;
  }
}

export default View;