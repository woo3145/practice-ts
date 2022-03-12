const hash = (value: string, size: number): number => {
  let sum = 0;
  for (let i = 0; i < value.length; ++i) {
    sum += value[i].charCodeAt(0);
  }
  return sum % size;
};

class HashObject {
  key;
  value;
  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

export class HashTable {
  #size;
  #table: HashObject[] | null[];

  constructor(size: number) {
    this.#size = size;
    this.#table = Array.from({ length: size }, () => null);
  }

  set(value: string) {
    let key = hash(value, this.#size);
    let check = 0;
    while (true) {
      ++check;
      if (check > this.#size) {
        console.log("테이블에 공간이 없습니다.");
        break;
      }
      if (!this.#table[key]) {
        this.#table[key] = new HashObject(key, value);
        break;
      } else {
        key = (key + 1) % this.#size;
      }
    }
  }
  get(value: string) {
    let dumyIndex = hash(value, this.#size);
    let count = 0;
    while (true) {
      ++count;
      if (count >= this.#size) {
        console.log(`${value}가 존재하지 않습니다.`);
        break;
      }
      if (this.#table[dumyIndex]?.value === value) {
        return this.#table[dumyIndex];
      } else {
        dumyIndex = (dumyIndex + 1) % this.#size;
        continue;
      }
    }
  }
  remove(value: string) {
    const node = this.get(value);
    if (node?.key) {
      this.#table[node.key] = new HashObject(node.key, "-1");
      console.log(`${value}를 삭제하였습니다.`);
    }
  }
}

class Node {
  value;
  next: Node | null;
  constructor(value: HashObject) {
    this.value = value;
    this.next = null;
  }
}
export class HashTable2 {
  #size;
  #table: Node[] | null[];
  #hashKey = 7;

  constructor() {
    this.#size = 0;
    this.#table = [];
  }

  set(value: string) {
    let key = hash(value, this.#hashKey);
    const data = new HashObject(key, value);
    const node = new Node(data);
    if (!this.#table[key]) {
      this.#table[key] = node;
    } else {
      let current = this.#table[key];
      while (current?.next) {
        current = current.next;
      }
      current && (current.next = node);
    }
    this.#size += 1;
  }
  get(value: string) {
    const key = hash(value, this.#hashKey);
    let current = this.#table[key];

    while (current) {
      if (current.value.value === value) {
        return current.value;
      }
      current = current.next;
    }
  }

  size() {
    return this.#size;
  }

  remove(value: string) {
    const key = hash(value, this.#hashKey);
    let current = this.#table[key];
    let prev = null;
    while (current) {
      if (current.value.value === value) {
        break;
      }
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log("값이 존재하지 않습니다.");
      return;
    }
    this.#size -= 1;
    if (prev) {
      prev.next = current.next;
    } else {
      this.#table[key] = current.next;
    }
    console.log(`${value}를 삭제하였습니다.`);
  }
}
