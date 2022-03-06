import LinkedList from "./linked_list";

const linkedListTest = () => {
  console.log("****** Linked List Test ******");
  const linkedList = new LinkedList<number>();

  console.log("pushBack 1");
  linkedList.pushBack(1);
  console.log("pushBack 2");
  linkedList.pushBack(2);
  console.log("pushBack 3");
  linkedList.pushBack(3);
  console.log("pushBack 4");
  linkedList.pushBack(4);
  console.log("배열 확인", linkedList.getAll());
  console.log("2번째 인덱스 수", linkedList.valueAt(2));
  console.log("Empty?", linkedList.empty());

  console.log("pushFront 9");
  linkedList.pushFront(9);
  console.log("배열 확인", linkedList.getAll());

  console.log("popFront : ", linkedList.popFront());
  console.log("popBack : ", linkedList.popBack());
  console.log("배열 확인", linkedList.getAll());

  console.log("제일 앞 : ", linkedList.front());
  console.log("제일 뒤 : ", linkedList.back());

  console.log("리버스");
  linkedList.reverse();
  console.log("배열 확인", linkedList.getAll());

  console.log("1번째 인덱스 삭제");
  linkedList.erase(1);
  console.log("배열 확인", linkedList.getAll());

  console.log("pushBack 1");
  linkedList.pushBack(1);
  console.log("pushBack 2");
  linkedList.pushBack(2);
  console.log("pushBack 3");
  linkedList.pushBack(3);
  console.log("pushBack 4");
  linkedList.pushBack(4);
  console.log("배열 확인", linkedList.getAll());

  console.log("처음 발견되는 3 삭제");
  linkedList.removeValue(3);
  console.log("배열 확인", linkedList.getAll());
};

export default linkedListTest;
