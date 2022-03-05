export class Node<T> {
  #data: T;
  #next: Node<T> | null;
  constructor(data: T) {
    this.#data = data;
    this.#next = null;
  }
  getData() {
    return this.#data;
  }
  getNext() {
    return this.#next;
  }
  setNext(node: Node<T> | null) {
    this.#next = node;
  }
}
