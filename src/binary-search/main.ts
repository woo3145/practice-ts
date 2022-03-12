import { binarySearch, binarySearchRecursive } from "./binary-search";

const BinarySearchTest = () => {
  let idx = 0;

  const arr = Array.from({ length: 200 }, () => {
    idx += 2;
    return idx;
  });

  const { index, value } = binarySearchRecursive(arr, 261, 0, arr.length - 1);
  if (index === -1) {
    console.log("찾는 값이 없습니다.");
  } else {
    console.log(`찾는 값: ${value}, 인덱스: ${index}`);
  }
};

export default BinarySearchTest;
