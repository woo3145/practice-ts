import LinkedList from "./linked_list";

const linkedListTest = () => {
  console.log("****** Linked List Test ******");
  const linkedList = new LinkedList<number>();

  console.log("push front 1");
  linkedList.pushFront(1);
  console.log("push front 4");
  linkedList.pushFront(4);
  console.log("push front 9");
  linkedList.pushFront(9);

  console.log("현재 사이즈 : ", linkedList.size());
  console.log("0번째 수 : ", linkedList.valueAt(0));
  console.log("1번째 수 : ", linkedList.valueAt(1));
  console.log("pop front : ", linkedList.popFront());
  console.log("현재 사이즈 : ", linkedList.size());
  console.log("0번째 수 : ", linkedList.valueAt(0));

  console.log("push back 0");
  linkedList.pushBack(0);

  console.log("0번째 수 : ", linkedList.valueAt(0));

  console.log("1번째 수 : ", linkedList.valueAt(1));

  console.log("2번째 수 : ", linkedList.valueAt(2));

  console.log("pop back", linkedList.popBack());
  console.log("pop back", linkedList.popBack());
  console.log("pop back", linkedList.popBack());
  console.log("pop back", linkedList.popBack());
  console.log("현재 사이즈 : ", linkedList.size());
};

export default linkedListTest;
