class SortedList {
  constructor() {
    this.item = []
    this.length = 0

  }
  add(item) {
    this.item.push(item)
    this.item.sort((a, b) => a - b)
    this.length = this.item.length

  }
  get(pos) {
    return this.item[pos]
  }
  max() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.item)
  }
  min() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.item)
  }
  average() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList")
    }
    let arr = this.item.reduce((a, b) => a + b, 0)
    return arr / this.item.length;
  }
  sum() {
    if (!this.item) {
      throw new Error("EmptySortedList")
    }
    return this.item.reduce((a, b) => a + b, 0)
  }
};

module.exports = SortedList;