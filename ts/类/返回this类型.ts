class MySet {
  has(value: number): boolean {}
  add(value: number): this {}
}

class MyOtherSet extends MySet {
  add(value: number): this {}
}
