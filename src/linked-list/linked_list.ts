import { Node } from "./node";

interface ILinkedList<T> {
  size(): number;
  empty(): boolean;
  valueAt(index: number): T | null;
  pushFront(value: T): void;
  popFront(): T | null;
  pushBack(value: T): void;
  popBack(): T | null;
  front(): T | null;
  back(): T | null;
  insert(index: number, value: T): void;
  erase(index: number): void;
  reverse(): void;
  removeValue(value: T): void;
}

class LinkedList<T> implements ILinkedList<T> {
  #head: Node<T> | null = null;
  #size: number = 0;

  setHead(node: Node<T> | null) {
    this.#head = node;
  }

  getAll() {
    let current = this.#head;
    let str = "[ ";
    while (current) {
      str += current.getData();
      if (current.getNext()) {
        str += " -> ";
      }
      current = current.getNext();
    }
    str += " ]";
    return str;
  }

  size(): number {
    return this.#size;
  }
  empty(): boolean {
    return this.#size === 0 ? true : false;
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

    while (current && current.getNext()) {
      current = current.getNext();
    }
    current && current.setNext(node);
  }

  popBack(): T | null {
    let current = this.#head;
    let prev: Node<T> | null = null;
    if (current) {
      this.#size -= 1;
    }

    while (current?.getNext()) {
      prev = current;
      current = current.getNext();
    }
    if (prev) {
      prev.setNext(null);
    } else {
      this.#head = null;
    }

    return current ? current.getData() : null;
  }

  front(): T | null {
    const current = this.#head;
    if (!current) {
      return null;
    }
    return current.getData();
  }

  back(): T | null {
    let current = this.#head;

    while (current?.getNext()) {
      current = current.getNext();
    }

    return current ? current.getData() : null;
  }

  insert(index: number, value: T): void {
    const node = new Node(value);
    let current = this.#head;
    let prev: Node<T> | null = null;
    let count = 0;

    if (!this.size()) {
      this.#head = node;
      this.#size += 1;
      return;
    }

    this.#size += 1;
    while (count < index && current) {
      ++count;
      prev = current;
      current = current.getNext();
    }

    if (index >= this.size()) {
      // ???????????? ??????
      if (!current && prev) {
        prev.setNext(node);
      }
    } else {
      if (prev) {
        prev.setNext(node);
        node.setNext(current);
      } else {
        node.setNext(current);
        this.#head = node;
      }
    }
  }

  erase(index: number) {
    let current = this.#head;
    let prev: Node<T> | null = null;
    let count = 0;
    if (!current) {
      return;
    }
    if (index !== 0 && index >= this.size()) {
      return;
    }
    // index??? ?????????????????? ??????(????????? ?????????)
    while (count < index) {
      ++count;
      if (current && current.getNext()) {
        prev = current;
        current = current.getNext();
      }
    }
    // ?????? ???????????? ????????? ?????? ????????? ???????????? index??????????????? ??????
    if (current) {
      if (current.getNext()) {
        prev
          ? prev.setNext(current.getNext())
          : this.setHead(current.getNext());
      } else {
        // ?????? ???????????? ????????? ?????????????????? ?????? ????????? ??????????????? ??????
        prev ? prev.setNext(null) : this.setHead(null);
      }
    }

    this.#size -= 1;
  }

  reverse() {
    let current = this.#head;
    let temp: Node<T> | null = null;
    let newHead: Node<T> | null = null;

    // current??? ???????????? ??????
    while (current) {
      // current????????? ??? ????????? ???????????? ?????? ?????? newHead??? ????????? ?????? ????????????
      // ????????? ?????? ?????? newHead??? ?????? ???????????? head????????? ?????? ??????????????????.
      temp = new Node(current.getData());
      current = current.getNext();
      temp.setNext(newHead);
      newHead = temp;
    }
    this.#head = newHead;
  }

  removeValue(value: T) {
    let current = this.#head;
    let prev: Node<T> | null = null;

    while (current) {
      if (current.getData() === value) {
        this.#size -= 1;
        if (prev) {
          prev.setNext(current.getNext());
        } else {
          this.setHead(current.getNext());
        }
        break;
      }
      prev = current;
      current = current.getNext();
    }
  }
}

export default LinkedList;
