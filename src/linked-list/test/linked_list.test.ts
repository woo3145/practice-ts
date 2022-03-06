import LinkedList from "../linked_list";

describe("linked List Test", () => {
  describe("Push Front", () => {
    const linkedList = new LinkedList<number>();
    test("빈배열에 데이터 추가", () => {
      linkedList.pushFront(1);
      expect(linkedList.getAll()).toBe("[ 1 ]");
      expect(linkedList.size()).toBe(1);
    });
    test("데이터 추가", () => {
      linkedList.pushFront(2);
      expect(linkedList.getAll()).toBe("[ 2 -> 1 ]");
      expect(linkedList.size()).toBe(2);
    });
  });

  describe("Push Back", () => {
    const linkedList = new LinkedList<number>();
    test("빈배열에 데이터 추가", () => {
      linkedList.pushBack(1);
      expect(linkedList.getAll()).toBe("[ 1 ]");
      expect(linkedList.size()).toBe(1);
    });
    test("데이터 여러개 추가", () => {
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.pushBack(4);
      expect(linkedList.getAll()).toBe("[ 1 -> 2 -> 3 -> 4 ]");
      expect(linkedList.size()).toBe(4);
    });
  });

  describe("Pop Front", () => {
    const linkedList = new LinkedList<number>();
    test("빈 배열에서 Pop", () => {
      expect(linkedList.popFront()).toBe(null);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 하나인 배열에서 Pop", () => {
      linkedList.pushBack(123);
      expect(linkedList.popFront()).toBe(123);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 여러개인 배열에서 pop", () => {
      linkedList.pushBack(123);
      linkedList.pushBack(456);
      linkedList.pushBack(789);
      expect(linkedList.popFront()).toBe(123);
      expect(linkedList.popFront()).toBe(456);
      expect(linkedList.popFront()).toBe(789);
      expect(linkedList.size()).toBe(0);
    });
  });

  describe("Pop Back", () => {
    const linkedList = new LinkedList<number>();
    test("빈 배열에서 Pop", () => {
      expect(linkedList.popBack()).toBe(null);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 하나인 배열에서 Pop", () => {
      linkedList.pushBack(123);
      expect(linkedList.popBack()).toBe(123);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 여러개인 배열에서 pop", () => {
      linkedList.pushBack(123);
      linkedList.pushBack(456);
      linkedList.pushBack(789);
      expect(linkedList.popBack()).toBe(789);
      expect(linkedList.popBack()).toBe(456);
      expect(linkedList.popBack()).toBe(123);
      expect(linkedList.size()).toBe(0);
    });
  });

  describe("Front, Back", () => {
    const linkedList = new LinkedList();
    test("빈 배열", () => {
      expect(linkedList.front()).toBe(null);
      expect(linkedList.back()).toBe(null);
    });
    test("여러개의 배열", () => {
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.pushBack(4);

      expect(linkedList.front()).toBe(1);
      expect(linkedList.back()).toBe(4);
    });
  });

  describe("Insert", () => {
    const linkedList = new LinkedList();

    test("빈 배열에 insert", () => {
      linkedList.insert(0, 4);
      expect(linkedList.getAll()).toBe("[ 4 ]");
      expect(linkedList.size()).toBe(1);
    });
    test("헤더 부분에 데이터 추가", () => {
      linkedList.insert(0, 2);
      expect(linkedList.getAll()).toBe("[ 2 -> 4 ]");
      expect(linkedList.size()).toBe(2);
    });
    test("중간 부분에 데이터 추가", () => {
      linkedList.insert(1, 8);
      expect(linkedList.getAll()).toBe("[ 2 -> 8 -> 4 ]");
      expect(linkedList.size()).toBe(3);
    });
    test("마지막 부분에 데이터 추가", () => {
      linkedList.insert(3, 11);
      expect(linkedList.getAll()).toBe("[ 2 -> 8 -> 4 -> 11 ]");
      expect(linkedList.size()).toBe(4);
    });
    test("인덱스를 벗어나면 마지막 부분에 추가", () => {
      linkedList.insert(888, 6);
      expect(linkedList.getAll()).toBe("[ 2 -> 8 -> 4 -> 11 -> 6 ]");
      expect(linkedList.size()).toBe(5);
    });
  });

  describe("Erase", () => {
    test("빈 배열에서 erase", () => {
      const linkedList = new LinkedList();
      linkedList.erase(0);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 하나인 배열에서 erase", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.erase(0);
      expect(linkedList.size()).toBe(0);
      expect(linkedList.getAll()).toBe("[  ]");
    });
    test("데이터가 여러개인 배열에서 첫 데이터 erase", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.erase(0);
      expect(linkedList.size()).toBe(2);
      expect(linkedList.getAll()).toBe("[ 2 -> 3 ]");
    });
    test("데이터가 여러개인 배열에서 중간 데이터 erase", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.erase(1);
      expect(linkedList.size()).toBe(2);
      expect(linkedList.getAll()).toBe("[ 1 -> 3 ]");
    });
    test("데이터가 여러개인 배열에서 마지막 데이터 erase", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.erase(2);
      expect(linkedList.size()).toBe(2);
      expect(linkedList.getAll()).toBe("[ 1 -> 2 ]");
    });
    test("인덱스가 존재하지 값이면 무반응", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.erase(99);
      expect(linkedList.size()).toBe(3);
      expect(linkedList.getAll()).toBe("[ 1 -> 2 -> 3 ]");
    });
  });

  describe("Reverse", () => {
    const linkedList = new LinkedList();

    test("빈배열에서 실행", () => {
      linkedList.reverse();
      expect(linkedList.getAll()).toBe("[  ]");
    });

    test("데이터가 하나인 배열에서 실행", () => {
      linkedList.pushBack(1);
      linkedList.reverse();
      expect(linkedList.getAll()).toBe("[ 1 ]");
    });
    test("데이터가 두개인 배열에서 실행", () => {
      linkedList.pushBack(2);
      linkedList.reverse();
      expect(linkedList.getAll()).toBe("[ 2 -> 1 ]");
    });
    test("데이터가 여러개 배열에서 실행", () => {
      linkedList.pushBack(3);
      linkedList.pushBack(4);
      linkedList.reverse();
      expect(linkedList.getAll()).toBe("[ 4 -> 3 -> 1 -> 2 ]");
    });
  });

  describe("Remove Value", () => {
    test("빈 배열에서 삭제", () => {
      const linkedList = new LinkedList();

      linkedList.removeValue(22);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 하나인 배열에서 삭제", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(22);
      linkedList.removeValue(22);
      expect(linkedList.size()).toBe(0);
    });
    test("데이터가 여러개 배열에서 첫번째 삭제", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.removeValue(1);
      expect(linkedList.size()).toBe(2);
      expect(linkedList.getAll()).toBe("[ 2 -> 3 ]");
    });
    test("데이터가 여러개 배열에서 중간 삭제", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.removeValue(2);
      expect(linkedList.size()).toBe(2);
      expect(linkedList.getAll()).toBe("[ 1 -> 3 ]");
    });
    test("데이터가 여러개 배열에서 마지막 삭제", () => {
      const linkedList = new LinkedList();
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.removeValue(3);
      expect(linkedList.size()).toBe(2);
      expect(linkedList.getAll()).toBe("[ 1 -> 2 ]");
    });
  });

  describe("Empty", () => {
    const linkedList = new LinkedList();
    test("데이터가 없을 경우", () => {
      expect(linkedList.empty()).toBe(true);
    });
    test("데이터가 존재할 경우", () => {
      linkedList.pushBack(1);
      expect(linkedList.empty()).toBe(false);
    });
  });

  describe("ValueAt", () => {
    const linkedList = new LinkedList();

    test("데이터가 없을 경우", () => {
      expect(linkedList.valueAt(0)).toBe(null);
    });

    test("데이터가 있을 때 첫번째 인덱스", () => {
      linkedList.pushBack(1);
      linkedList.pushBack(2);
      linkedList.pushBack(3);
      linkedList.pushBack(4);
      expect(linkedList.valueAt(0)).toBe(1);
    });
    test("데이터가 있을 때 중간 인덱스", () => {
      expect(linkedList.valueAt(2)).toBe(3);
    });
    test("데이터가 있을 때 마지막 인덱스", () => {
      expect(linkedList.valueAt(3)).toBe(4);
    });
  });
});
