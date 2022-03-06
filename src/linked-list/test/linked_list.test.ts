import LinkedList from "../linked_list";

const linkedList = new LinkedList<number>();

describe("linked List Test", () => {
  test("empty", () => {
    expect(linkedList.empty()).toBe(true);
  });
  test("push Method", () => {
    linkedList.pushBack(1);
    linkedList.pushBack(2);
    linkedList.pushBack(3);
    linkedList.pushFront(4);
    expect(linkedList.front()).toBe(4);
    expect(linkedList.back()).toBe(3);
    expect(linkedList.size()).toBe(4);
    linkedList.insert(2, 9);
    expect(linkedList.valueAt(2)).toBe(9);
    expect(linkedList.size()).toBe(5);
  });

  test("pop Method", () => {
    expect(linkedList.popFront()).toBe(4);
    expect(linkedList.popBack()).toBe(3);
    expect(linkedList.size()).toBe(3);
  });

  test("search", () => {
    expect(linkedList.valueAt(0)).toBe(1);
    expect(linkedList.valueAt(99)).toBe(null);
  });

  test("remove", () => {
    linkedList.removeValue(2);
    console.log(linkedList.getAll());
    expect(linkedList.size()).toBe(2);
  });
});
