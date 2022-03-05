import { Node } from "./node";

interface ILinkedList<T> {
  size(): number;
  empty(): boolean;
  valueAt(index: number): T | null;
  pushFront(value: T): void;
  popFront(): T | null;
  pushBack(value: T): void;
  popBack(): T | null;
  front(): T;
  back(): T;
  insert(index: number, value: T): T;
  erase(index: number): void;
  reverse(): void;
  removeValue(value: T): void;
}

class LinkedList<T> {
  #head: Node<T> | null = null;
  #size: number = 0;

  setHead(node: Node<T> | null) {
    this.#head = node;
  }

  size(): number {
    return this.#size;
  }
  empty(): boolean {
    return this.#size === 0 ? false : true;
  }
  valueAt(index: number): T | null {
    let current = this.#head;
    let count = 0;
    while (current && count < index) {
      ++count;
      current = current.getNext();
    }

    return current ? current.getData() : null;
  }
  pushFront(value: T): void {
    const current = this.#head;
    const node = new Node(value);
    this.setHead(node);
    if (current) {
      node.setNext(current);
    }

    this.#size += 1;
  }

  popFront(): T | null {
    const current = this.#head;
    if (current) {
      this.#size -= 1;
      this.setHead(current.getNext());

      return current.getData();
    }
    return null;
  }
  pushBack(value: T): void {
    const node = new Node(value);
    let current = this.#head;
    this.#size += 1;

    if (!current) {
      this.setHead(node);
      return;
    }

    while (current?.getNext()) {
      current = current.getNext();
    }
    current?.setNext(node);
  }

  popBack(): T | null {
    let current = this.#head;
    let prev: Node<T> | null = null;
    if (!current) {
      return null;
    }
    this.#size -= 1;

    while (current?.getNext()) {
      prev = current;
      current = current.getNext();
    }
    if (prev) {
      prev?.setNext(null);
    } else {
      this.#head = null;
    }

    return current ? current.getData() : null;
  }
}

export default LinkedList;
