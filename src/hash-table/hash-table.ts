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

class HashTable {
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
}

export default HashTable;
