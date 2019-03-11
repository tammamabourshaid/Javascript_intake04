class List {
  constructor() {
    this.list = [];
  }
  add(item, pos) {
    const idx = (pos == undefined) ? this.list.length : pos;
    this.list.splice(idx, 0, item);
  }
  get(idx) {
    return this.list[idx];
  }
  count() {
    return this.list.length;
  }
  toArray() {
    return [...this.list];
  }
}

module.exports = {
  List
};