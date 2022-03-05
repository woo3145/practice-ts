import { Node } from "./node";

interface ILinkedList<T> {
  size(): number;
  empty(): boolean;
  valueAt(index: number): T;
  pushFront(value: T): void;
  popFront(): T;
  pushBack(value: T): void;
  popBack(): T;
  front(): T;
  back(): T;
  insert(index: number, value: T): T;
  erase(index: number): void;
  reverse(): void;
  removeValue(value: T): void;
}

class LinkedList<T> implements ILinkedList<T> {
  #head: Node<T> | null = null;
  #size: number = 0;

  size(): number {
    return this.#size;
  }
  empty(): boolean {
    return this.#size === 0 ? false : true;
  }
}

export default LinkedList;
