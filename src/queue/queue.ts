class QueueNode<T> {
  #value: T;
  #next: QueueNode<T> | null = null;
  constructor(value: T) {
    this.#value = value;
    this.#next = null;
  }
  value() {
    return this.#value;
  }
  setNext(node: QueueNode<T>) {
    this.#next = node;
  }
  getNext() {
    return this.#next;
  }
}

class Queue<T> {
  #head: QueueNode<T> | null = null;
  #tail: QueueNode<T> | null = null;
  #size = 0;
  size() {
    return this.#size;
  }
  enqueue(data: T) {
    const node = new QueueNode<T>(data);
    if (!this.size()) {
      this.#head = node;
    } else {
      this.#tail && this.#tail.setNext(node);
    }
    this.#tail = node;
    this.#size += 1;
  }

  dequeue() {
    if (!this.size()) {
      return null;
    }
    const head = this.#head;
    this.#head = head?.getNext() || null;
    this.#size -= 1;
    if (!this.size()) {
      this.#tail = null;
    }
    return head?.value();
  }
}

export default Queue;
